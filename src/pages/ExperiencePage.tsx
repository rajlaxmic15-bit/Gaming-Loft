import { useState } from "react";
import PageHeader from "../components/PageHeader";
import RedirectBanner from "../components/RedirectBanner";
import { Corners, Reveal } from "../components/ui";
import { GAMES, IMG } from "../data/content";
import { useRouter } from "../context/RouterContext";
import { cn } from "../utils/cn";

const EXPERIENCE_DETAILS = [
  {
    id: "pool",
    name: "8-BALL & 9-BALL POOL",
    tagline: "Tournament Felt & Pro Grade Cues",
    specs: [
      "Tournament-grade English 8-Ball tables",
      "Shadowless 6000K overhead daylight canopy",
      "Aramith Pro Cup tournament ball sets",
      "Peradon and Predator carbon-core cues",
      "Automated digital triangle racking & electronic timer",
    ],
    vibe: "High focus, crisp break sounds, neon ambient lighting, drinks holder at every table.",
    img: IMG.pool,
    color: "#22f2ff",
  },
  {
    id: "snooker",
    name: "CHAMPIONSHIP SNOOKER",
    tagline: "12-Foot Pro Baize for Serious Shot-Makers",
    specs: [
      "Full-sized 12ft tournament specification slate",
      "Strachan 6811 32oz championship pure wool cloth",
      "Solid brass spider, cross, and swan-neck rests",
      "Precision laser-leveled slate bed",
      "Dedicated chalk station with Taom V10 chalks",
    ],
    vibe: "Silent arena protocol, gentleman's sport etiquette, championship atmosphere.",
    img: IMG.snooker,
    color: "#b4ff39",
  },
  {
    id: "tt",
    name: "SPEED TABLE TENNIS",
    tagline: "Spin Zone & Fast Rallies",
    specs: [
      "ITTF-approved 25mm tournament top surface",
      "DHS 3-Star seamless competition balls",
      "Butterfly Timo Boll and Stiga pro spin paddles",
      "Shock-absorbing anti-slip sports flooring",
      "Surround barrier netting for continuous play",
    ],
    vibe: "High octane, rapid reflex battles, energetic crowd cheering.",
    img: IMG.tableTennis,
    color: "#ff5c1a",
  },
  {
    id: "foosball",
    name: "2V2 FOOSBALL WAR",
    tagline: "Tornado Competition Rods & High Chaos",
    specs: [
      "Heavyweight Tornado T-3000 competition tables",
      "Counterbalanced men for true horizontal stops",
      "Dual split bearings for lightning fast spin shots",
      "Side ball returns with sound-dampened impact cups",
      "Magnetic scoring beads and match stats board",
    ],
    vibe: "The loudest arena in the loft — banter, screamers, 2v2 tactical battles.",
    img: IMG.foosball,
    color: "#8a5cff",
  },
  {
    id: "ps5",
    name: "NEXT-GEN PS5 ARENA",
    tagline: "4K 120Hz OLEDs & 100+ Title Vault",
    specs: [
      "Sony Bravia 65-inch 4K OLED 120Hz HDR screens",
      "PlayStation 5 Disc Edition with ultra-fast NVMe storage",
      "DualSense Wireless & DualSense Edge pro controllers",
      "Sony Pulse 3D spatial surround headphones",
      "Loaded library: EA FC 25, Tekken 8, Mortal Kombat 1, NBA 2K, Gran Turismo 7, Call of Duty",
    ],
    vibe: "Plush leather recliners, personal sound domes, tournament couch co-op.",
    img: IMG.ps5,
    color: "#22f2ff",
  },
];

const LOUNGE_AMENITIES = [
  {
    title: "100% Power Backup",
    desc: "Uninterrupted gaming with instant automatic power backup — your match never stops mid-frame or mid-game.",
    icon: "⚡",
  },
  {
    title: "Dedicated Parking & Easy Access",
    desc: "Convenient parking for bikes and cars right at Khamla Main Road, directly opposite Apollo Pharmacy.",
    icon: "🚗",
  },
  {
    title: "Chilled Refreshments & Snacks",
    desc: "Energy drinks, cold sodas, packaged beverages, and hot snacks delivered straight to your playing station.",
    icon: "🥤",
  },
  {
    title: "Clean Facilities & Pure Water",
    desc: "Spotless hygienic washrooms, air-conditioned comfort, and purified drinking water available for all guests.",
    icon: "💧",
  },
];

export default function ExperiencePage() {
  const [selectedGame, setSelectedGame] = useState(0);
  const { navigateTo } = useRouter();
  const currentGame = EXPERIENCE_DETAILS[selectedGame];

  return (
    <div className="relative min-h-screen bg-void text-white">
      <PageHeader
        tag="THE EXPERIENCE"
        title="Immerse In The"
        highlight="Loft Culture"
        description="We didn't just assemble tables — we crafted a dedicated entertainment sanctuary. Premium gear, dark neon aesthetics, high energy music, and an atmosphere built for players."
      />

      {/* Main Game Showcase */}
      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          {/* Quick Tab Selector */}
          <Reveal>
            <div className="flex flex-wrap gap-2 md:gap-3 border-b border-white/10 pb-6 mb-12">
              {EXPERIENCE_DETAILS.map((g, idx) => (
                <button
                  key={g.id}
                  onClick={() => setSelectedGame(idx)}
                  className={cn(
                    "clip-btn px-5 py-3 font-hud text-xs font-bold tracking-[0.25em] uppercase transition-all duration-300",
                    selectedGame === idx
                      ? "bg-neon text-[#03161c] glow-box-cyan"
                      : "border border-white/15 bg-void text-white/60 hover:border-neon hover:text-white"
                  )}
                >
                  <span className="opacity-60 mr-1.5">0{idx + 1}.</span>
                  {g.name.split(" ")[0]}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Active Game Feature Panel */}
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Visual Screen */}
            <Reveal className="relative">
              <div className="relative h-[360px] md:h-[500px] overflow-hidden border border-white/15 bg-panel">
                <img
                  src={currentGame.img}
                  alt={currentGame.name}
                  className="h-full w-full object-cover transition-all duration-700 hover:scale-105"
                />
                <div className="scanlines absolute inset-0 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-transparent to-void/30" />
                <Corners color={currentGame.color} size={20} />

                {/* Badge Overlay */}
                <div className="absolute top-5 left-5 border border-white/20 bg-void/80 px-3.5 py-1.5 backdrop-blur-md">
                  <span className="font-hud text-[10px] tracking-[0.3em] uppercase" style={{ color: currentGame.color }}>
                    ARENA // 0{selectedGame + 1}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-hud text-xs tracking-[0.3em] uppercase text-white/60">{currentGame.tagline}</p>
                  <h3 className="font-display text-3xl md:text-5xl text-white uppercase mt-1">
                    {currentGame.name}
                  </h3>
                </div>
              </div>
            </Reveal>

            {/* Specifications & Vibe Breakdown */}
            <Reveal delay={0.15}>
              <div className="flex flex-col">
                <div className="border-l-2 pl-4" style={{ borderColor: currentGame.color }}>
                  <span className="font-hud text-xs tracking-[0.3em] uppercase text-white/40">ARENA BLUEPRINT</span>
                  <h3 className="font-display text-3xl md:text-4xl text-white uppercase mt-1">
                    Pro Specifications
                  </h3>
                </div>

                <div className="mt-8 space-y-3">
                  {currentGame.specs.map((spec, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 border border-white/10 bg-void/60 p-3.5 transition-colors hover:border-neon/40"
                    >
                      <span className="font-display text-base" style={{ color: currentGame.color }}>
                        ✓
                      </span>
                      <span className="font-hud text-xs md:text-sm text-white/80 leading-relaxed">
                        {spec}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 border border-white/10 bg-panel/70 p-5">
                  <span className="font-hud text-[10px] tracking-[0.3em] text-white/40 uppercase">ARENA AMBIANCE //</span>
                  <p className="font-hud text-xs md:text-sm text-white/80 mt-1 italic">
                    "{currentGame.vibe}"
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <button
                    onClick={() => navigateTo("book")}
                    className="clip-btn bg-neon px-8 py-4 font-hud text-xs font-bold tracking-[0.3em] text-[#03161c] uppercase transition-all duration-300 glow-box-cyan hover:bg-white"
                  >
                    Book This Arena
                  </button>
                  <button
                    onClick={() => navigateTo("home")}
                    className="clip-btn border border-white/30 px-8 py-4 font-hud text-xs font-bold tracking-[0.3em] text-white uppercase transition-all duration-300 hover:border-neon hover:text-neon"
                  >
                    ← Back to Main Page
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Lounge Amenities Grid */}
      <section className="border-t border-white/10 bg-panel/50 py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="font-hud text-neon text-xs tracking-[0.4em] uppercase">[ AMENITIES & VIBE ]</span>
              <h2 className="font-display text-4xl md:text-6xl text-white uppercase mt-2">
                Engineered for <span className="text-neon">Endless Play</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {LOUNGE_AMENITIES.map((item, i) => (
              <Reveal key={item.title} delay={0.08 * i} className="h-full">
                <div className="group relative h-full border border-white/10 bg-void/80 p-7 transition-all duration-500 hover:border-neon/50 hover:-translate-y-1">
                  <Corners color="rgba(255,255,255,0.12)" size={14} />
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="font-display text-2xl text-white uppercase group-hover:text-neon transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-hud text-xs md:text-sm text-white/55 mt-2.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <RedirectBanner currentPage="experience" />
    </div>
  );
}
