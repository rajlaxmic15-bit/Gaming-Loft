import { useState } from "react";
import PageHeader from "../components/PageHeader";
import RedirectBanner from "../components/RedirectBanner";
import { Corners, Reveal } from "../components/ui";
import { PLANS } from "../data/content";
import { useRouter } from "../context/RouterContext";
import { cn } from "../utils/cn";

const SPECIAL_PASSES = [
  {
    name: "NIGHT OWL PASS",
    tag: "12:00 AM – 6:00 AM",
    price: "₹799",
    per: "/ PERSON",
    desc: "Unlimited multi-game access for the graveyard squad. All 5 arenas open with free energy drink refills.",
    color: "#8a5cff",
    badge: "LATE NIGHT SPECIAL",
  },
  {
    name: "WEEKEND PASS",
    tag: "SATURDAY OR SUNDAY",
    price: "₹1,299",
    per: "/ FULL DAY",
    desc: "10 hours of unrestricted table access, tournament entry, and guaranteed locker allocation.",
    color: "#22f2ff",
    badge: "WEEKEND BRAWL",
  },
  {
    name: "VIP MONTHLY BLACK PASS",
    tag: "30-DAY ALL ACCESS",
    price: "₹4,999",
    per: "/ MONTH",
    desc: "Personal cue locker, VIP priority table reservations, 20% cafe discount, and free guest passes.",
    color: "#b4ff39",
    badge: "ELITE STATUS",
  },
];

const ADD_ONS = [
  { name: "Snack & Mocktail Combo", price: "₹199", desc: "Loaded nachos or gourmet sandwich + craft mocktail of choice" },
  { name: "Private Tournament Hosting", price: "₹999", desc: "Dedicated referee, bracket display, winner trophy & medal" },
  { name: "Pro Coaching Session (1 Hr)", price: "₹499", desc: "One-on-one snooker or pool cue ball physics and stance training" },
  { name: "Personal Dedicated Locker", price: "₹299/mo", desc: "Keep your personal cue, shoes, and gear securely at the loft" },
];

export default function PricingPage() {
  const { navigateTo } = useRouter();
  const [players, setPlayers] = useState(2);
  const [hours, setHours] = useState(2);

  // Dynamic pricing calculation
  const calculateEstimate = () => {
    let ratePerPersonHour = 149;
    if (players === 2) ratePerPersonHour = 125;
    if (players >= 4) ratePerPersonHour = 100;
    if (players >= 8) ratePerPersonHour = 75;

    const base = players * hours * ratePerPersonHour;
    return base;
  };

  return (
    <div className="relative min-h-screen bg-void text-white">
      <PageHeader
        tag="PRICING & MEMBERSHIP"
        title="Transparent HUD"
        highlight="Battle Passes"
        description="Zero hidden charges, zero sign-up friction. Choose your hourly session or pick an all-night unrestricted pass with pro locker access."
      />

      {/* Main Pricing Tiers */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="font-hud text-neon text-xs tracking-[0.4em] uppercase">[ STANDARD HOURLY RATES ]</span>
              <h2 className="font-display text-4xl md:text-6xl text-white uppercase mt-2">
                Level-Up Your <span className="text-neon">Session</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
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

                  <div className="mt-5 flex items-end gap-1.5">
                    <span className="font-display text-5xl text-white transition-colors duration-500 group-hover:text-neon md:text-6xl">
                      {p.price}
                    </span>
                    <span className="font-hud mb-2 text-[10px] tracking-[0.25em] text-white/40 uppercase">{p.per}</span>
                  </div>

                  <ul className="mt-6 flex-1 space-y-2.5 border-t border-white/10 pt-6">
                    {p.features.map((f) => (
                      <li key={f} className="font-hud flex items-center gap-2.5 text-xs text-white/60 md:text-[13px]">
                        <span className="text-neon">▸</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => navigateTo("book")}
                    className={cn(
                      "clip-btn font-hud mt-7 block w-full py-3.5 text-center text-[10px] font-bold tracking-[0.35em] uppercase transition-all duration-300",
                      p.popular
                        ? "bg-neon text-[#03161c] hover:bg-white"
                        : "border text-white/70 hover:border-neon hover:text-neon"
                    )}
                    style={p.popular ? undefined : { borderColor: `${p.color}55` }}
                  >
                    Lock In {p.name}
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Quick Price Calculator */}
      <section className="border-y border-white/10 bg-panel/60 py-20">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <Reveal>
            <div className="relative border border-neon/30 bg-void/90 p-8 md:p-12 backdrop-blur-xl">
              <Corners color="#22f2ff" size={20} />
              <div className="text-center max-w-xl mx-auto mb-10">
                <span className="font-hud text-neon text-xs tracking-[0.4em] uppercase">[ LIVE QUOTE CALCULATOR ]</span>
                <h3 className="font-display text-3xl md:text-5xl text-white uppercase mt-2">
                  Calculate Your <span className="text-neon">Session Total</span>
                </h3>
              </div>

              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between font-hud text-xs tracking-wider uppercase mb-2">
                      <span className="text-white/60">Number of Players</span>
                      <span className="text-neon font-bold">{players} Gamer{players > 1 ? "s" : ""}</span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={12}
                      value={players}
                      onChange={(e) => setPlayers(Number(e.target.value))}
                      className="w-full accent-[#22f2ff] cursor-pointer"
                    />
                    <div className="flex justify-between font-hud text-[9px] text-white/30 mt-1">
                      <span>1 (Solo)</span>
                      <span>4 (Squad)</span>
                      <span>8 (Crew)</span>
                      <span>12 (Party)</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between font-hud text-xs tracking-wider uppercase mb-2">
                      <span className="text-white/60">Session Duration</span>
                      <span className="text-neon font-bold">{hours} Hour{hours > 1 ? "s" : ""}</span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={6}
                      value={hours}
                      onChange={(e) => setHours(Number(e.target.value))}
                      className="w-full accent-[#22f2ff] cursor-pointer"
                    />
                    <div className="flex justify-between font-hud text-[9px] text-white/30 mt-1">
                      <span>1 Hr</span>
                      <span>2 Hrs</span>
                      <span>4 Hrs</span>
                      <span>6 Hrs</span>
                    </div>
                  </div>
                </div>

                {/* Estimate Result Box */}
                <div className="border border-white/15 bg-panel p-6 text-center flex flex-col items-center justify-center">
                  <span className="font-hud text-[10px] tracking-[0.3em] text-white/40 uppercase">ESTIMATED TOTAL</span>
                  <div className="font-display text-5xl md:text-6xl text-white mt-2">
                    ₹{calculateEstimate()}
                  </div>
                  <p className="font-hud text-xs text-mint mt-1">
                    ~₹{Math.round(calculateEstimate() / players)} per player for {hours} hrs
                  </p>
                  <button
                    onClick={() => navigateTo("book")}
                    className="clip-btn bg-neon px-8 py-3.5 font-hud text-xs font-bold tracking-[0.3em] text-[#03161c] uppercase mt-6 glow-box-cyan hover:bg-white transition-all w-full"
                  >
                    Reserve At This Rate
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Special Unlimited & Membership Passes */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="font-hud text-neon text-xs tracking-[0.4em] uppercase">[ SPECIAL ACCESS PASSES ]</span>
              <h2 className="font-display text-4xl md:text-6xl text-white uppercase mt-2">
                All-Night & <span className="text-neon">Monthly VIP</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {SPECIAL_PASSES.map((pass, i) => (
              <Reveal key={pass.name} delay={0.08 * i}>
                <div className="relative border border-white/15 bg-void/80 p-8 h-full flex flex-col justify-between hover:border-neon transition-all duration-300">
                  <Corners color={pass.color} size={16} />
                  <div>
                    <span className="font-hud text-[9px] tracking-[0.3em] uppercase px-2.5 py-1 border"
                      style={{ borderColor: pass.color, color: pass.color }}
                    >
                      {pass.badge}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl text-white uppercase mt-4">
                      {pass.name}
                    </h3>
                    <p className="font-hud text-xs text-white/40 tracking-wider mt-1">{pass.tag}</p>
                    <div className="my-6 flex items-baseline gap-2">
                      <span className="font-display text-5xl" style={{ color: pass.color }}>
                        {pass.price}
                      </span>
                      <span className="font-hud text-xs text-white/40">{pass.per}</span>
                    </div>
                    <p className="font-hud text-xs md:text-sm text-white/60 leading-relaxed">
                      {pass.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => navigateTo("book")}
                    className="clip-btn font-hud mt-8 block w-full py-3.5 text-center text-xs font-bold tracking-[0.3em] uppercase border hover:bg-white hover:text-black transition-all"
                    style={{ borderColor: pass.color, color: "#fff" }}
                  >
                    Claim Pass
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons List */}
      <section className="border-t border-white/10 bg-panel/40 py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="max-w-xl mb-12">
              <span className="font-hud text-neon text-xs tracking-[0.4em] uppercase">[ CUSTOM EXTRAS ]</span>
              <h3 className="font-display text-3xl md:text-5xl text-white uppercase mt-2">
                Session Add-Ons
              </h3>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {ADD_ONS.map((addon) => (
              <div key={addon.name} className="border border-white/10 bg-void/70 p-6 flex justify-between items-center">
                <div>
                  <h4 className="font-display text-xl text-white uppercase">{addon.name}</h4>
                  <p className="font-hud text-xs text-white/50 mt-1">{addon.desc}</p>
                </div>
                <span className="font-display text-2xl text-neon pl-4">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RedirectBanner currentPage="pricing" />
    </div>
  );
}
