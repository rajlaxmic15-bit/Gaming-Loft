import { PLANS } from "../data/content";
import { cn } from "../utils/cn";
import { Corners, Reveal, SectionHead } from "./ui";

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute top-0 right-0 h-[400px] w-[600px] rounded-full bg-neon/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          kicker="SEC.04 — PRICING"
          lines={["Choose your", "battle pass."]}
          right={
            <p className="font-hud max-w-sm text-sm leading-relaxed text-white/50">
              HUD-style rates, zero hidden fees. Every plan includes full locker access,
              pro-grade gear and instant table availability.
            </p>
          }
        />

        {/* HUD status strip */}
        <Reveal>
          <div className="scanlines relative mb-10 overflow-hidden border border-neon/25 bg-void/80">
            <div className="grid grid-cols-2 divide-x divide-white/5 md:grid-cols-4">
              {[
                ["PLAYERS ONLINE", "12", "text-neon"],
                ["TABLES FREE", "03", "text-mint"],
                ["TOURNAMENT", "FRI 8PM", "text-neon"],
                ["HAPPY HOUR", "2–5 PM", "text-ember"],
              ].map(([label, val, color]) => (
                <div key={label} className="flex items-center justify-between gap-3 px-4 py-3.5 md:px-6">
                  <span className="font-hud text-[9px] tracking-[0.3em] text-white/40 uppercase md:text-[10px]">
                    {label}
                  </span>
                  <span className={cn("font-display text-lg md:text-xl", color)}>{val}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* plan cards */}
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={0.08 * i} className="h-full">
              <div
                className={cn(
                  "group relative flex h-full flex-col border bg-void/80 p-7 transition-all duration-500 hover:-translate-y-2",
                  p.popular
                    ? "border-neon/60 bg-panel glow-box-cyan xl:scale-[1.04]"
                    : "border-white/10 hover:border-white/30"
                )}
              >
                <Corners color={p.popular ? "rgba(34,242,255,0.9)" : "rgba(255,255,255,0.15)"} size={16} />

                {p.popular && (
                  <span className="font-hud absolute -top-3 left-1/2 -translate-x-1/2 bg-neon px-4 py-1 text-[9px] font-bold tracking-[0.3em] whitespace-nowrap text-[#03161c] uppercase shadow-[0_0_18px_rgba(34,242,255,0.7)]">
                    ★ Most Popular
                  </span>
                )}

                {/* header */}
                <div className="flex items-center justify-between">
                  <span className="font-hud text-[9px] tracking-[0.35em] text-white/35 uppercase">{p.level}</span>
                  <span className="font-hud border border-white/15 px-2 py-0.5 text-[9px] tracking-[0.25em] text-white/50 uppercase">
                    {p.players}
                  </span>
                </div>

                <h3
                  className="font-display mt-4 text-3xl tracking-wide text-white uppercase md:text-4xl"
                  style={p.popular ? { color: "#22f2ff", textShadow: "0 0 24px rgba(34,242,255,0.4)" } : undefined}
                >
                  {p.name}
                </h3>
                <p className="font-hud mt-2 min-h-[42px] text-xs leading-relaxed text-white/45">{p.desc}</p>

                {/* price */}
                <div className="mt-5 flex items-end gap-1.5">
                  <span className="font-display text-5xl text-white transition-colors duration-500 group-hover:text-neon md:text-6xl">
                    {p.price}
                  </span>
                  <span className="font-hud mb-2 text-[10px] tracking-[0.25em] text-white/40 uppercase">{p.per}</span>
                </div>

                {/* HP-style meter */}
                <div className="mt-5">
                  <div className="flex justify-between font-hud text-[8px] tracking-[0.3em] text-white/35 uppercase">
                    <span>Value</span>
                    <span>{i + 1}/4</span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full border border-white/10 bg-white/5">
                    <div
                      className="h-full transition-all duration-700 group-hover:brightness-125"
                      style={{
                        width: `${(i + 1) * 25}%`,
                        background: `linear-gradient(90deg, ${p.color}, ${p.color}66)`,
                        boxShadow: `0 0 10px ${p.color}`,
                      }}
                    />
                  </div>
                </div>

                {/* features */}
                <ul className="mt-6 flex-1 space-y-2.5 border-t border-white/10 pt-6">
                  {p.features.map((f) => (
                    <li key={f} className="font-hud flex items-center gap-2.5 text-xs text-white/60 md:text-[13px]">
                      <span className="text-neon">▸</span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#book"
                  className={cn(
                    "clip-btn font-hud mt-7 block py-3.5 text-center text-[10px] font-bold tracking-[0.35em] uppercase transition-all duration-300",
                    p.popular
                      ? "bg-neon text-[#03161c] hover:bg-white"
                      : "border text-white/70 hover:border-neon hover:text-neon"
                  )}
                  style={p.popular ? undefined : { borderColor: `${p.color}55` }}
                >
                  Select {p.name}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
