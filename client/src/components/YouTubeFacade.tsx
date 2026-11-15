import { useState } from "react";

const VIDEO_ID = "wOAvVhRXrBY";
const THUMBNAIL_URL = `https://i.ytimg.com/vi/${VIDEO_ID}/sddefault.jpg`;
const TITLE = "Cash Ready Homes Hudson Valley Intro";

export default function YouTubeFacade() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl aspect-video bg-black">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
          title={TITLE}
          className="absolute inset-0 h-full w-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 h-full w-full cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F5C518] focus-visible:ring-inset"
          aria-label={`Play video: ${TITLE}`}
        >
          <img
            src={THUMBNAIL_URL}
            alt="Short video about selling a house as-is for cash in the Hudson Valley"
            width={640}
            height={360}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30">
            <span
              className="flex h-16 w-16 items-center justify-center rounded-full shadow-lg transition-transform group-hover:scale-110 group-focus-visible:scale-110 sm:h-20 sm:w-20"
              style={{ backgroundColor: "#F5C518" }}
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-8 w-8 translate-x-0.5 sm:h-10 sm:w-10"
                fill="#1a3d1a"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
