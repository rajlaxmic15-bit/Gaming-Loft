import { GALLERY } from "../data/content";
import { cn } from "../utils/cn";
import { Reveal, SectionHead } from "./ui";

export default function Gallery() {
  return (
    <section id="gallery" className="relative overflow-hidden bg-panel py-24 md:py-32">
      <div className="grid-bg absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          kicker="SEC.05 — GALLERY"
          lines={["Inside the loft."]}
          outline
          right={
            <p className="font-hud max-w-sm text-sm leading-relaxed text-white/50">
              No renders. No stock fantasy. This is the actual venue — shot on an average
              Saturday, mid-competition.
            </p>
          }
        />

        {/* asymmetric grid */}
        <div className="grid grid-cols-2 auto-rows-[160px] gap-3 md:auto-rows-[230px] md:grid-cols-4 md:gap-4">
          {GALLERY.map((g, i) => (
            <Reveal key={g.src} delay={0.06 * i} className={cn("group relative overflow-hidden border border-white/10", g.span)}>
              <img
                src={g.src}
                alt={g.caption}
                loading="lazy"
                className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
              />
              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-void/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
              {/* cyan frame on hover */}
              <span className="pointer-events-none absolute inset-0 border border-neon/0 transition-all duration-500 group-hover:border-neon/60" />
              {/* caption */}
              <div className="absolute right-0 bottom-0 left-0 translate-y-2 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 md:p-5">
                <p className="font-hud text-[9px] tracking-[0.35em] text-neon uppercase md:text-[10px]">
                  SHOT.{String(i + 1).padStart(2, "0")}
                </p>
                <p className="font-display mt-1 text-lg text-white uppercase md:text-xl">{g.caption}</p>
              </div>
              {/* plus icon */}
              <span className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center border border-white/20 bg-void/60 text-lg text-white backdrop-blur-sm transition-all duration-500 group-hover:rotate-90 group-hover:border-neon group-hover:text-neon">
                +
              </span>
            </Reveal>
          ))}
        </div>

        {/* marquee quote strip */}
        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-col items-center gap-3 border-y border-white/10 py-6 text-center md:flex-row md:justify-center md:gap-8">
            {["#THEGAMINGLOFT", "#PLAYCOMPETEWIN", "#ONEPLACEFIVEWAYS"].map((tag) => (
              <span key={tag} className="font-hud text-xs tracking-[0.35em] text-white/40 uppercase transition-colors hover:text-neon md:text-sm">
                <span className="text-neon/50">//</span> {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
