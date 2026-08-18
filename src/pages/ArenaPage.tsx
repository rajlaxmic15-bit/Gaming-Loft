import { useState } from "react";
import PageHeader from "../components/PageHeader";
import RedirectBanner from "../components/RedirectBanner";
import { Corners, Counter, Reveal } from "../components/ui";
import { IMG, STATS } from "../data/content";
import { useRouter } from "../context/RouterContext";

const ARENA_ZONES = [
  {
    id: "zone-a",
    name: "ZONE A: POOL & SNOOKER HALL",
    area: "1,800 SQ FT",
    capacity: "35 Players",
    equipment: "4 Tournament Pool Tables + 2 Championship 12ft Snooker Tables",
    lighting: "Overhead 6000K daylight LED canopies + perimeter blue ambient glow",
    image: IMG.billiardRoom,
    status: "OPEN • 4 TABLES AVAILABLE",
  },
  {
    id: "zone-b",
    name: "ZONE B: SPEED TT & FOOSBALL COMBAT",
    area: "1,200 SQ FT",
    capacity: "24 Players",
    equipment: "3 ITTF-standard Table Tennis Tables + 2 Tornado T-3000 Foosball Units",
    lighting: "High-contrast dynamic arena glow with safety netting and cushioned perimeter",
    image: IMG.foosball2,
    status: "OPEN • 2 TABLES AVAILABLE",
  },
  {
    id: "zone-c",
    name: "ZONE C: PS5 NEXT-GEN LOUNGE",
    area: "1,000 SQ FT",
    capacity: "20 Players",
    equipment: "5x 65-inch 4K 120Hz OLED Stations with DualSense Edge & Surround Domes",
    lighting: "Deep dark mode illumination with individualized RGB sync bias backlights",
    image: IMG.lounge1,
    status: "OPEN • 3 STATIONS AVAILABLE",
  },
];

const ARENA_COMPARISON = [
  { feature: "Floor Space", loft: "4,000 Sq. Ft. Dedicated Layout", standard: "Cramped 800-1200 Sq. Ft." },
  { feature: "Air Conditioning", loft: "Central High-CFM Industrial Chillers", standard: "Wall split ACs / Stuffy" },
  { feature: "Operating Hours", loft: "Daily Extended Hours", standard: "Closes at 10 PM - 11 PM" },
  { feature: "Cue & Gear Quality", loft: "Aramith Pro Balls & Carbon Shafts", standard: "Warped house cues & cheap felt" },
  { feature: "Display Calibrations", loft: "65\" OLED 120Hz Low Latency", standard: "60Hz basic consumer TVs" },
  { feature: "Food & Drinks", loft: "Craft cafe with table service", standard: "Only bottled water / vending" },
];

export default function ArenaPage() {
  const [activeZone, setActiveZone] = useState(0);
  const { navigateTo } = useRouter();

  return (
    <div className="relative min-h-screen bg-void text-white">
      <PageHeader
        tag="THE ARENA FLOOR"
        title="4,000 Sq. Ft. Of"
        highlight="Pure Combat"
        description="Every square inch of the Loft was engineered for competitive integrity. Laser-leveled slate, tournament cloth, calibrated screens, and spacious zones designed so players never bump elbows."
      />

      {/* Live Floor Stats */}
      <section className="border-b border-white/10 bg-panel/60 py-12">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={0.07 * i}>
                <div className="relative border border-white/10 bg-void/80 p-6">
                  <Corners color="rgba(34,242,255,0.4)" size={12} />
                  <div className="font-display text-4xl md:text-5xl text-neon">
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <p className="font-hud text-[10px] md:text-xs font-bold tracking-[0.25em] text-white uppercase mt-2">
                    {s.label}
                  </p>
                  <p className="font-hud text-xs text-white/50 mt-1">{s.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Arena Zones Explorer */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
              <div>
                <span className="font-hud text-neon text-xs tracking-[0.4em] uppercase">[ ZONE BLUEPRINTS ]</span>
                <h2 className="font-display text-4xl md:text-6xl text-white uppercase mt-2">
                  Explore The <span className="text-neon">3 Battle Zones</span>
                </h2>
              </div>
              <p className="font-hud text-xs md:text-sm text-white/50 max-w-md">
                Select a zone to inspect real-time capacity, floor coverage, and hardware configurations.
              </p>
            </div>
          </Reveal>

          {/* Zone Selector Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {ARENA_ZONES.map((zone, idx) => (
              <button
                key={zone.id}
                onClick={() => setActiveZone(idx)}
                className={`relative p-5 text-left border transition-all duration-300 ${
                  activeZone === idx
                    ? "border-neon bg-neon/10 glow-box-cyan"
                    : "border-white/10 bg-void/70 hover:border-white/30"
                }`}
              >
                <Corners color={activeZone === idx ? "#22f2ff" : "rgba(255,255,255,0.15)"} size={14} />
                <span className="font-hud text-[9px] tracking-[0.3em] text-white/40 uppercase">ZONE 0{idx + 1}</span>
                <h3 className="font-display text-xl text-white uppercase mt-1">
                  {zone.name.split(":")[1] || zone.name}
                </h3>
                <div className="mt-3 flex items-center justify-between text-[11px] font-hud text-white/60">
                  <span>{zone.area}</span>
                  <span className="text-mint font-semibold">{zone.capacity}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Selected Zone Deep Dive Card */}
          <Reveal>
            <div className="grid lg:grid-cols-2 gap-8 border border-white/15 bg-panel/70 p-6 md:p-10 relative">
              <Corners color="rgba(34,242,255,0.8)" size={20} />

              <div className="relative h-[300px] md:h-[420px] overflow-hidden border border-white/10">
                <img
                  src={ARENA_ZONES[activeZone].image}
                  alt={ARENA_ZONES[activeZone].name}
                  className="h-full w-full object-cover"
                />
                <div className="scanlines absolute inset-0" />
                <div className="absolute top-4 left-4 bg-void/90 border border-mint/60 px-3 py-1 text-mint font-hud text-[10px] tracking-[0.2em] uppercase">
                  ● {ARENA_ZONES[activeZone].status}
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <span className="font-hud text-neon text-xs tracking-[0.3em] uppercase">
                    ZONE BREAKDOWN //
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl text-white uppercase mt-1">
                    {ARENA_ZONES[activeZone].name}
                  </h3>

                  <div className="mt-6 space-y-4 font-hud text-xs md:text-sm">
                    <div className="border-l-2 border-neon/50 pl-3">
                      <p className="text-white/40 text-[10px] tracking-[0.2em] uppercase">EQUIPMENT ALLOCATION</p>
                      <p className="text-white mt-1">{ARENA_ZONES[activeZone].equipment}</p>
                    </div>

                    <div className="border-l-2 border-mint/50 pl-3">
                      <p className="text-white/40 text-[10px] tracking-[0.2em] uppercase">ACOUSTICS & LIGHTING</p>
                      <p className="text-white mt-1">{ARENA_ZONES[activeZone].lighting}</p>
                    </div>

                    <div className="border-l-2 border-ember/50 pl-3">
                      <p className="text-white/40 text-[10px] tracking-[0.2em] uppercase">TOTAL CAPACITY</p>
                      <p className="text-white mt-1">{ARENA_ZONES[activeZone].capacity} max simultaneous gamers</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <button
                    onClick={() => navigateTo("book")}
                    className="clip-btn bg-neon px-8 py-3.5 font-hud text-xs font-bold tracking-[0.3em] text-[#03161c] uppercase glow-box-cyan hover:bg-white transition-all"
                  >
                    Reserve Table in This Zone
                  </button>
                  <button
                    onClick={() => navigateTo("home")}
                    className="clip-btn border border-white/30 px-6 py-3.5 font-hud text-xs font-bold tracking-[0.25em] text-white uppercase hover:border-neon hover:text-neon transition-all"
                  >
                    ← Back to Main Page
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="border-t border-white/10 bg-void/80 py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="font-hud text-neon text-xs tracking-[0.4em] uppercase">[ HARDWARE BENCHMARK ]</span>
              <h2 className="font-display text-4xl md:text-6xl text-white uppercase mt-2">
                The Loft vs <span className="text-outline">Standard Parlors</span>
              </h2>
            </div>
          </Reveal>

          <Reveal>
            <div className="overflow-x-auto border border-white/10 bg-panel/40">
              <table className="w-full text-left font-hud text-xs md:text-sm">
                <thead>
                  <tr className="border-b border-white/15 bg-void/90 text-white/50 text-[10px] md:text-xs tracking-[0.25em] uppercase">
                    <th className="py-4 px-6">METRIC</th>
                    <th className="py-4 px-6 text-neon font-bold">THE GAMING LOFT</th>
                    <th className="py-4 px-6 text-white/40">TYPICAL GAMING ROOMS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {ARENA_COMPARISON.map((row, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="py-4 px-6 font-bold text-white uppercase tracking-wider">{row.feature}</td>
                      <td className="py-4 px-6 text-white font-medium flex items-center gap-2">
                        <span className="text-neon">✦</span>
                        {row.loft}
                      </td>
                      <td className="py-4 px-6 text-white/40">{row.standard}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <RedirectBanner currentPage="arena" />
    </div>
  );
}
