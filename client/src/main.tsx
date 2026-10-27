import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const root = document.getElementById("root")!;
// Pages are prerendered to static HTML at build time; hydrate when markup exists.
if (root.hasChildNodes()) hydrateRoot(root, <App />);
else createRoot(root).render(<App />);
