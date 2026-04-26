"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const photos = [
  { src: "/gallery/gallery-01.png", alt: "Stamped concrete walkway and patio", caption: "Stamped concrete walkway" },
  { src: "/gallery/gallery-02.png", alt: "Covered outdoor living room with stone columns, fireplace, and pool", caption: "Outdoor living room" },
  { src: "/gallery/gallery-03.png", alt: "Marble-tile walk-in shower with built-in niche", caption: "Walk-in marble shower" },
  { src: "/gallery/gallery-04.png", alt: "Dark cabinet kitchen with wood-plank ceiling", caption: "Modern dark kitchen" },
  { src: "/gallery/gallery-05.png", alt: "Pergola build in progress with stone columns", caption: "Pergola with stone columns" },
  { src: "/gallery/gallery-06.png", alt: "Travertine outdoor kitchen under construction", caption: "Travertine outdoor kitchen" },
  { src: "/gallery/gallery-07.png", alt: "Paver patio with steps and retaining wall", caption: "Paver patio and steps" },
  { src: "/gallery/gallery-08.png", alt: "White kitchen with subway tile backsplash and granite counters", caption: "Classic white kitchen" },
  { src: "/gallery/gallery-09.png", alt: "Red storage shed with white trim", caption: "Custom storage shed" },
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(
    () => setActive((i) => (i === null ? null : (i + photos.length - 1) % photos.length)),
    [],
  );
  const next = useCallback(
    () => setActive((i) => (i === null ? null : (i + 1) % photos.length)),
    [],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, close, prev, next]);

  return (
    <section id="work" className="border-t border-[var(--line)] bg-surface py-24">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div className="max-w-3xl">
          <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-shadow">
            <span className="text-iron">§</span> Our Work
          </p>
          <h2 className="fv-display mt-2 font-display text-[clamp(40px,5.2vw,76px)] font-bold leading-[1.02] text-sand">
            Recent projects across Tucson & Phoenix
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 lg:gap-4">
          {photos.map((p, i) => (
            <button
              key={p.src}
              onClick={() => setActive(i)}
              className="group relative aspect-[4/3] overflow-hidden bg-varnish focus:outline-none focus:ring-2 focus:ring-iron"
              aria-label={`View ${p.caption}`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                loading={p.src === "/gallery/gallery-02.png" ? undefined : "eager"}
                priority={p.src === "/gallery/gallery-02.png"}
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover contrast-105 saturate-[0.9] sepia-[0.08] transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-basalt/80 to-transparent p-3 text-left font-mono text-[11px] uppercase tracking-[0.14em] text-sand opacity-0 transition group-hover:opacity-100">
                {p.caption}
              </div>
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="absolute right-4 top-4 bg-white/10 px-3 py-1 font-mono text-white hover:bg-white/20"
            onClick={close}
            aria-label="Close"
          >
            ✕
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 px-4 py-2 text-2xl text-white hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 px-4 py-2 text-2xl text-white hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next"
          >
            ›
          </button>
          <div
            className="relative max-h-[85vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={photos[active].src}
                alt={photos[active].alt}
                fill
                loading="eager"
                className="object-contain"
                sizes="90vw"
              />
            </div>
            <p className="mt-3 text-center font-mono text-[13px] uppercase tracking-[0.12em] text-sand">
              {photos[active].caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
