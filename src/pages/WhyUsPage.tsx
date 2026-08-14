import { useState } from "react";
import PageHeader from "../components/PageHeader";
import RedirectBanner from "../components/RedirectBanner";
import { Corners, Reveal } from "../components/ui";
import { WHY_US } from "../data/content";

const EXPANDED_PILLARS = [
  {
    num: "01",
    title: "100% PRO-GRADE TOURNAMENT GEAR",
    badge: "PRECISION & INTEGRITY",
    desc: "We never cut corners with consumer-grade recreational equipment. Every cue stick is balanced, every snooker table is laser-leveled with Strachan cloth, every TT table meets ITTF championship bounce criteria, and our PS5 stations run on ultra low-latency 120Hz OLED displays.",
    highlight: "Zero bent cues, zero dead cushions, zero screen lag.",
  },
  {
    num: "02",
    title: "24/7 OPEN NON-STOP TIMINGS",
    badge: "ROUND THE CLOCK",
    desc: "Gaming has no curfew. Whether you're wrapping up a late-night work shift at 2 AM, looking for an intense weekend midnight duel, or getting morning practice rounds before work, The Gaming Loft is fully operational 24 hours a day, 365 days a year.",
    highlight: "Security, cafe service, and tables always staffed.",
  },
  {
    num: "03",
    title: "FIVE DISTINCT GAMING WORLDS",
    badge: "VARIETY IN ONE SPOT",
    desc: "Why settle for just pool or just video games? Seamlessly transition from an intense 8-ball break to a 2v2 foosball shouting match, then cool off with EA FC 25 on the 65\" OLEDs, all without ever leaving our 4,000 sq. ft. lounge.",
    highlight: "One pass unlocks Pool, Snooker, TT, Foosball & PS5.",
  },
  {
    num: "04",
    title: "ELECTRIC TOURNAMENT COMMUNITY",
    badge: "LEAGUES & LEADERBOARDS",
    desc: "We host weekly Friday Night Shootouts, FIFA weekend brackets, and monthly corporate leagues with actual trophies, cash prize pools, and ranking boards.",
    highlight: "Over 40 competitive tournaments hosted every month.",
  },
  {
    num: "05",
    title: "HOSPITALITY, CAFE & SQUAD ZONES",
    badge: "GROUP FRIENDLY",
    desc: "Clean air-conditioned luxury with ergonomic seating, personal drink holders, high-speed WiFi, and a craft fuel cafe serving artisanal iced lattes, milkshakes, and hot loaded snacks.",
    highlight: "Rated 4.9/5 by over 1,200 verified Google reviews.",
  },
];

const FAQS = [
  {
    q: "Do I need to book in advance or can I walk in?",
    a: "Walk-ins are always welcome 24/7! However, during peak hours (Friday evenings and weekends 6 PM - 11 PM), tables fill up fast, so we strongly recommend reserving your slot online or via WhatsApp to guarantee zero waiting time.",
  },
  {
    q: "Can we bring our own cue sticks or controllers?",
    a: "Yes! Players are welcome to bring their personal tournament cues or pro controllers (DualSense Edge, fight sticks). We also provide secure cue lockers for monthly pass holders.",
  },
  {
    q: "Are outside food and drinks allowed?",
    a: "Outside food is not permitted, but our in-house Fuel Bar offers freshly prepared snacks, gourmet nachos, artisan coffee, mocktails, and energy refreshments directly to your table.",
  },
  {
    q: "Can I host a birthday party or corporate team outing?",
    a: "Absolutely. Our 'Ultimate LVL.04' package and private VIP lounge booking options give your group private zone access, dedicated tournament organizers, and custom catering menus.",
  },
  {
    q: "Is there an age restriction at the lounge?",
    a: "All ages are welcome! Gamers of all skill levels, from beginners looking to learn basic cue physics to seasoned league champions, enjoy our welcoming and competitive atmosphere.",
  },
];

const TESTIMONIALS = [
  {
    quote: "Hands down the best gaming lounge in the city. The snooker baize is immaculate and the 24/7 vibe is unmatched.",
    author: "Rohan V.",
    tag: "Verified Member • 8-Ball League Champ",
  },
  {
    quote: "We hosted our tech team's Friday night showdown here. The foosball tables and PS5 setups kept all 25 of us hyped for 4 hours straight.",
    author: "Aditi S.",
    tag: "Corporate Booking",
  },
  {
    quote: "The OLED screens with FIFA 25 and low latency controllers are pure heaven. Super clean and great coffee too.",
    author: "Karan M.",
    tag: "Regular Weekend Squad",
  },
];

export default function WhyUsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="relative min-h-screen bg-void text-white">
      <PageHeader
        sectionNum="SEC.06"
        tag="WHY THE GAMING LOFT"
        title="Why We Stand"
        highlight="Unrivaled"
        description="Anyone can buy a cheap billiard table. We engineered a premier sports and gaming institution built on pro equipment, spotless hospitality, and non-stop 24/7 energy."
      />

      {/* 5 Expanded Pillars */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="space-y-8">
            {EXPANDED_PILLARS.map((p, i) => (
              <Reveal key={p.num} delay={0.06 * i}>
                <div className="relative border border-white/10 bg-panel/70 p-8 md:p-10 transition-all duration-500 hover:border-neon">
                  <Corners color="rgba(34,242,255,0.7)" size={16} />

                  <div className="grid lg:grid-cols-[100px_1fr_300px] gap-6 items-start">
                    <span className="font-display text-5xl md:text-6xl text-neon">
                      {p.num}
                    </span>

                    <div>
                      <span className="font-hud text-[10px] tracking-[0.3em] uppercase text-neon/80 bg-neon/10 px-3 py-1 border border-neon/30">
                        {p.badge}
                      </span>
                      <h3 className="font-display text-2xl md:text-4xl text-white uppercase mt-3">
                        {p.title}
                      </h3>
                      <p className="font-hud text-xs md:text-sm text-white/70 mt-3 leading-relaxed">
                        {p.desc}
                      </p>
                    </div>

                    <div className="border border-white/15 bg-void/80 p-5 lg:self-center">
                      <span className="font-hud text-[9px] tracking-[0.25em] text-white/40 uppercase">THE LOFT PROMISE //</span>
                      <p className="font-hud text-xs font-semibold text-mint mt-1">
                        {p.highlight}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Player Reviews */}
      <section className="border-y border-white/10 bg-panel/40 py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="font-hud text-neon text-xs tracking-[0.4em] uppercase">[ PLAYER VERDICTS ]</span>
              <h2 className="font-display text-4xl md:text-6xl text-white uppercase mt-2">
                Rated <span className="text-neon">4.9 / 5.0</span> Stars
              </h2>
              <p className="font-hud text-xs text-white/50 mt-2">By 1,200+ verified competitive players and casual crews</p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.author} delay={0.08 * i}>
                <div className="border border-white/10 bg-void/80 p-7 h-full flex flex-col justify-between">
                  <div>
                    <div className="text-neon font-display text-3xl mb-2">★★★★★</div>
                    <p className="font-hud text-xs md:text-sm text-white/80 leading-relaxed italic">
                      "{t.quote}"
                    </p>
                  </div>
                  <div className="mt-6 border-t border-white/10 pt-4">
                    <p className="font-display text-lg text-white uppercase">{t.author}</p>
                    <p className="font-hud text-[10px] text-white/40 tracking-wider uppercase mt-0.5">{t.tag}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <span className="font-hud text-neon text-xs tracking-[0.4em] uppercase">[ FREQUENTLY ASKED ]</span>
              <h2 className="font-display text-4xl md:text-6xl text-white uppercase mt-2">
                Everything You <span className="text-neon">Need To Know</span>
              </h2>
            </div>
          </Reveal>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="border border-white/10 bg-panel/70 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-display text-lg md:text-xl text-white uppercase">
                    {faq.q}
                  </span>
                  <span className="font-display text-2xl text-neon">
                    {openFaq === idx ? "−" : "+"}
                  </span>
                </button>

                {openFaq === idx && (
                  <div className="px-6 pb-6 pt-1 border-t border-white/10">
                    <p className="font-hud text-xs md:text-sm text-white/70 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <RedirectBanner currentPage="why-us" />
    </div>
  );
}
