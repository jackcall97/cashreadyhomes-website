import "dotenv/config";
import express from "express";
import { createServer } from "http";
import net from "net";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { registerOAuthRoutes } from "./oauth";
import { registerStorageProxy } from "./storageProxy";
import { appRouter } from "../routers";
import { createContext } from "./context";
import { serveStatic, setupVite } from "./vite";
import { registerScheduledBlogRoutes } from "../scheduledBlog";
import { registerSitemapRoutes } from "../sitemap";
import { registerRedirects } from "../redirects";
import { createHeartbeatJob, listHeartbeatJobs } from "./heartbeat";

function isPortAvailable(port: number): Promise<boolean> {
  return new Promise(resolve => {
    const server = net.createServer();
    server.listen(port, () => {
      server.close(() => resolve(true));
    });
    server.on("error", () => resolve(false));
  });
}

async function findAvailablePort(startPort: number = 3000): Promise<number> {
  for (let port = startPort; port < startPort + 20; port++) {
    if (await isPortAvailable(port)) {
      return port;
    }
  }
  throw new Error(`No available port found starting from ${startPort}`);
}

async function startServer() {
  const app = express();
  const server = createServer(app);
  // Configure body parser with larger size limit for file uploads
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));
  registerStorageProxy(app);
  registerOAuthRoutes(app);
  registerRedirects(app as unknown as import('express').Router);
  registerScheduledBlogRoutes(app as unknown as import('express').Router);
  registerSitemapRoutes(app as unknown as import('express').Router);
  // tRPC API
  app.use(
    "/api/trpc",
    createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );
  // development mode uses Vite, production mode uses static files
  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const preferredPort = parseInt(process.env.PORT || "3000");
  const port = await findAvailablePort(preferredPort);

  if (port !== preferredPort) {
    console.log(`Port ${preferredPort} is busy, using port ${port} instead`);
  }

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
    // Register weekly blog post cron job on startup (idempotent)
    registerWeeklyBlogCron().catch(err => console.warn("[Heartbeat] Cron setup skipped:", err.message));
  });
}

async function registerWeeklyBlogCron() {
  try {
    let alreadyExists = false;
    try {
      const existing = await listHeartbeatJobs("");
      alreadyExists = Array.isArray(existing?.jobs) && existing.jobs.some(j => j.name === "weekly-blog-post");
    } catch {
      // listHeartbeatJobs may fail in dev/sandbox — proceed to create anyway
    }
    if (alreadyExists) {
      console.log("[Heartbeat] Weekly blog cron already registered");
      return;
    }
    await createHeartbeatJob(
      {
        name: "weekly-blog-post",
        cron: "0 0 9 * * 1", // Every Monday at 9:00 AM UTC
        path: "/api/scheduled/generate-blog-post",
        method: "POST",
        description: "Generate and publish a new SEO blog post every week",
      },
      "" // empty = run as project owner
    );
    console.log("[Heartbeat] Weekly blog cron registered successfully");
  } catch (err) {
    console.warn("[Heartbeat] Could not register cron:", err);
  }
}

startServer().catch(console.error);
