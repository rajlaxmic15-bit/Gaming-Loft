import { WHY_US } from "../data/content";
import { Reveal, SectionHead } from "./ui";

export default function WhyUs() {
  return (
    <section id="why-us" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute top-1/3 -left-40 h-[500px] w-[500px] rounded-full bg-vio/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          kicker="SEC.06 — WHY US"
          lines={["Not just a game."]}
          outline
        />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_1.4fr] lg:gap-20">
          {/* sticky giant statement */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <p className="font-display text-[13vw] leading-[0.9] text-white uppercase sm:text-6xl md:text-7xl">
                It's an <span className="text-outline">experience.</span>
              </p>
              <p className="font-hud mt-6 max-w-sm text-sm leading-relaxed text-white/50">
                Anyone can put a pool table in a room. We built a place that makes you
                want to come back every night. Here's what separates the Loft from the rest.
              </p>

              {/* mini stat chips */}
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  ["4.9★", "RATED"],
                  ["12K+", "SESSIONS"],
                  ["98%", "RETURN RATE"],
                ].map(([v, l]) => (
                  <div key={l} className="border border-white/10 bg-void/70 px-4 py-3">
                    <p className="font-display text-xl text-neon">{v}</p>
                    <p className="font-hud text-[8px] tracking-[0.3em] text-white/40 uppercase">{l}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* point list */}
          <div className="flex flex-col">
            {WHY_US.map((w, i) => (
              <Reveal key={w.num} delay={0.06 * i}>
                <div className="group relative flex gap-5 border-b border-white/10 py-7 transition-all duration-500 hover:border-neon/40 hover:pl-4 md:gap-8 md:py-8">
                  <span className="font-display text-3xl text-white/15 transition-colors duration-500 group-hover:text-neon md:text-5xl">
                    {w.num}
                  </span>
                  <div>
                    <h3 className="font-display flex items-center gap-3 text-2xl tracking-wide text-white uppercase transition-colors duration-500 group-hover:text-neon md:text-3xl">
                      {w.title}
                      <span className="hidden h-px w-10 bg-neon/40 transition-all duration-500 group-hover:w-20 group-hover:bg-neon md:block" />
                    </h3>
                    <p className="font-hud mt-2 max-w-lg text-sm leading-relaxed text-white/50 transition-colors duration-500 group-hover:text-white/70">
                      {w.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
