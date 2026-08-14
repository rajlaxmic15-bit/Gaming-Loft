import { useState } from "react";
import { GAMES } from "../data/content";
import { cn } from "../utils/cn";
import { SectionHead, Reveal } from "./ui";

export default function Experience() {
  const [active, setActive] = useState(2);

  return (
    <section id="experience" className="relative overflow-hidden py-24 md:py-32">
      {/* backdrop glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-neon/5 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          kicker="SEC.02 — THE EXPERIENCE"
          lines={["One place.", "Five ways to play."]}
          outline
          right={
            <p className="font-hud max-w-sm text-sm leading-relaxed text-white/50">
              Hover or tap an arena to take over the screen. Five completely different
              battlegrounds — all under one roof, all running hot every single night.
            </p>
          }
        />

        {/* interactive expanding cards — desktop row / mobile stack */}
        <Reveal>
          <div
            className="relative flex flex-col gap-3 md:h-[560px] md:flex-row lg:h-[600px]"
            onMouseLeave={() => setActive(2)}
          >
            {GAMES.map((g, i) => {
              const isActive = active === i;
              return (
                <button
                  key={g.id}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(isActive ? 2 : i)}
                  aria-label={g.name}
                  className={cn(
                    "group relative block cursor-pointer overflow-hidden text-left transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    "h-[92px] md:h-full",
                    isActive ? "h-[320px] md:flex-[3.6]" : "md:flex-1"
                  )}
                >
                  {/* image */}
                  <img
                    src={g.img}
                    alt={g.name}
                    className={cn(
                      "absolute inset-0 h-full w-full object-cover transition-all duration-700",
                      isActive ? "scale-105" : "scale-125 grayscale-[35%] brightness-[0.55]"
                    )}
                  />
                  {/* tint overlay */}
                  <div
                    className="absolute inset-0 transition-opacity duration-700"
                    style={{
                      background: `linear-gradient(to top, rgba(5,6,10,0.95) 0%, rgba(5,6,10,0.35) 45%, rgba(5,6,10,0.15) 100%)`,
                      opacity: isActive ? 1 : 0.85,
                    }}
                  />
                  {/* accent bar */}
                  <span
                    className="absolute bottom-0 left-0 h-[3px] transition-all duration-700"
                    style={{
                      width: isActive ? "100%" : "0%",
                      background: g.color,
                      boxShadow: `0 0 16px ${g.color}`,
                    }}
                  />

                  {/* corner brackets on active */}
                  <span
                    className={cn(
                      "pointer-events-none absolute inset-3 transition-opacity duration-500",
                      isActive ? "opacity-100" : "opacity-0"
                    )}
                  >
                    <span className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2" style={{ borderColor: g.color }} />
                    <span className="absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2" style={{ borderColor: g.color }} />
                    <span className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2" style={{ borderColor: g.color }} />
                    <span className="absolute right-0 bottom-0 h-4 w-4 border-b-2 border-r-2" style={{ borderColor: g.color }} />
                  </span>

                  {/* content */}
                  <div className={cn("absolute inset-0 flex flex-col", isActive ? "justify-end p-5 md:p-9" : "justify-between p-4 md:p-5")}>
                    {/* number + tag */}
                    <div className="flex items-start justify-between">
                      <span
                        className={cn(
                          "font-display transition-all duration-700",
                          isActive ? "text-4xl md:text-5xl" : "text-xl md:text-2xl"
                        )}
                        style={{ color: g.color, textShadow: `0 0 18px ${g.color}66` }}
                      >
                        {g.num}
                      </span>
                      {isActive && (
                        <span className="font-hud border px-2.5 py-1 text-[9px] font-semibold tracking-[0.3em] uppercase md:text-[10px]"
                          style={{ borderColor: `${g.color}80`, color: g.color, background: "rgba(5,6,10,0.5)" }}
                        >
                          {g.tag}
                        </span>
                      )}
                    </div>

                    {/* title + desc */}
                    <div>
                      <h3
                        className={cn(
                          "font-display uppercase transition-all duration-700",
                          isActive
                            ? "text-4xl leading-none tracking-wide md:text-5xl lg:text-6xl"
                            : "text-2xl md:text-3xl md:writing-vertical md:rotate-180"
                        )}
                        style={isActive ? { color: "#fff" } : { color: "rgba(232,242,255,0.85)" }}
                      >
                        {g.name}
                      </h3>
                      <div
                        className={cn(
                          "grid transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                          isActive ? "mt-3 grid-rows-[1fr] opacity-100 md:max-w-md" : "grid-rows-[0fr] opacity-0"
                        )}
                      >
                        <p className="font-hud overflow-hidden text-xs leading-relaxed text-white/60 md:text-sm">
                          {g.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* strip below cards */}
        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border border-white/10 bg-panel/60 px-6 py-4">
            <p className="font-hud text-[10px] tracking-[0.35em] text-white/40 uppercase md:text-xs">
              <span className="text-neon">TIP //</span> Hover a card to expand the arena
            </p>
            <a
              href="#pricing"
              className="font-hud group flex items-center gap-2 text-[10px] font-bold tracking-[0.35em] text-neon uppercase md:text-xs"
            >
              View session rates
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
