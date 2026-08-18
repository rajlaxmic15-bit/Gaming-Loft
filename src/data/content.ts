export const LOGO = "/images/logo.jpg";

export const HERO_VIDEO = {
  src: "https://videos.pexels.com/video-files/7849222/7849222-uhd_4096_2160_25fps.mp4",
  poster:
    "https://images.pexels.com/videos/7849222/pexels-photo-7849222.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200",
};

export const IMG = {
  pool: "https://images.pexels.com/photos/10627152/pexels-photo-10627152.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
  snooker:
    "https://images.pexels.com/photos/11354500/pexels-photo-11354500.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
  tableTennis:
    "https://images.pexels.com/photos/3771083/pexels-photo-3771083.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
  foosball:
    "https://images.pexels.com/photos/1445651/pexels-photo-1445651.png?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
  ps5: "https://images.pexels.com/photos/13189290/pexels-photo-13189290.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
  arena: "https://images.pexels.com/photos/7915277/pexels-photo-7915277.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1400",
  billiardRoom:
    "https://images.pexels.com/photos/36709087/pexels-photo-36709087.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1400",
  lounge1: "https://images.pexels.com/photos/7915247/pexels-photo-7915247.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
  lounge2: "https://images.pexels.com/photos/7915255/pexels-photo-7915255.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
  keyboard:
    "https://images.pexels.com/photos/7915356/pexels-photo-7915356.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
  controller2:
    "https://images.pexels.com/photos/29028118/pexels-photo-29028118.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
  foosball2:
    "https://images.pexels.com/photos/5453906/pexels-photo-5453906.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
};

export type Game = {
  id: string;
  num: string;
  name: string;
  tag: string;
  desc: string;
  img: string;
  color: string;
};

export const GAMES: Game[] = [
  {
    id: "pool",
    num: "01",
    name: "POOL",
    tag: "8-BALL ARENA",
    desc: "Tournament-grade 8-ball tables with pro cues and perfect lighting. Rack 'em, break 'em, own the felt.",
    img: IMG.pool,
    color: "#22f2ff",
  },
  {
    id: "snooker",
    num: "02",
    name: "SNOOKER",
    tag: "PRO BAIZE",
    desc: "Full-size snooker tables with the smoothest baize in town. Precision play for the serious shot-makers.",
    img: IMG.snooker,
    color: "#b4ff39",
  },
  {
    id: "tt",
    num: "03",
    name: "TABLE TENNIS",
    tag: "SPIN ZONE",
    desc: "ITTF-standard tables and lightning-fast rallies. Bring your serve — we'll bring the adrenaline.",
    img: IMG.tableTennis,
    color: "#ff5c1a",
  },
  {
    id: "foosball",
    num: "04",
    name: "FOOSBALL",
    tag: "2V2 WAR",
    desc: "Pro-grade rods, zero dead spins. The loudest corner of the loft — winner stays, loser rotates.",
    img: IMG.foosball,
    color: "#8a5cff",
  },
  {
    id: "ps5",
    num: "05",
    name: "PS5",
    tag: "NEXT-GEN LOUNGE",
    desc: "4K OLED screens, DualSense controllers and a library of 100+ titles. Squad up or go solo in style.",
    img: IMG.ps5,
    color: "#22f2ff",
  },
];

export type Stat = {
  value: number;
  suffix: string;
  label: string;
  sub: string;
};

export const STATS: Stat[] = [
  { value: 5, suffix: "+", label: "GAMES", sub: "Five arenas under one roof" },
  { value: 100, suffix: "%", label: "PREMIUM SETUP", sub: "Pro-grade gear, always" },
  { value: 40, suffix: "+", label: "MATCHES / WEEK", sub: "Competitive leagues & ladders" },
  { value: 12, suffix: "+", label: "PRO TABLES", sub: "Championship setups" },
];

export type Plan = {
  name: string;
  level: string;
  price: string;
  per: string;
  players: string;
  desc: string;
  features: string[];
  color: string;
  popular?: boolean;
};

export const PLANS: Plan[] = [
  {
    name: "CASUAL",
    level: "LVL.01",
    price: "₹149",
    per: "/ HOUR",
    players: "1 PLAYER",
    desc: "Solo warm-up session. Pick a table, lock in, zone out.",
    features: [
      "01 hour access",
      "1 player slot",
      "Choice of 1 game",
      "Standard setup",
      "Locker access",
    ],
    color: "#22f2ff",
  },
  {
    name: "DUO",
    level: "LVL.02",
    price: "₹249",
    per: "/ HOUR",
    players: "2 PLAYERS",
    desc: "1v1 energy. Bring your rival, settle the score.",
    features: [
      "01 hour access",
      "2 player slots",
      "Switch between 2 games",
      "Complimentary snacks",
      "Locker access",
    ],
    color: "#8a5cff",
  },
  {
    name: "SQUAD",
    level: "LVL.03",
    price: "₹399",
    per: "/ HOUR",
    players: "4 PLAYERS",
    desc: "The classic crew plan. Maximum chaos, minimum cost.",
    features: [
      "01 hour access",
      "4 player slots",
      "All 5 games unlocked",
      "Priority booking",
      "2 drink passes",
      "Locker access",
    ],
    color: "#22f2ff",
    popular: true,
  },
  {
    name: "ULTIMATE",
    level: "LVL.04",
    price: "₹599",
    per: "/ HOUR",
    players: "8 PLAYERS",
    desc: "Full-lounge takeover. Your crew, your rules, your night.",
    features: [
      "01 hour access",
      "Up to 8 player slots",
      "Entire loft — private zone",
      "Host + dedicated setup",
      "Tournament entry (auto)",
      "Party snack combo",
    ],
    color: "#ff5c1a",
  },
];

export type GalleryItem = {
  src: string;
  caption: string;
  span: string;
};

export const GALLERY: GalleryItem[] = [
  { src: IMG.billiardRoom, caption: "THE BILLIARD HALL", span: "md:col-span-2 md:row-span-2" },
  { src: IMG.lounge1, caption: "SQUAD NIGHTS", span: "" },
  { src: IMG.foosball, caption: "2V2 FOOSBALL WARS", span: "md:row-span-2" },
  { src: IMG.pool, caption: "CUE CORNER", span: "" },
  { src: IMG.lounge2, caption: "THE ARENA FLOOR", span: "" },
  { src: IMG.controller2, caption: "NEXT-GEN STATION", span: "" },
  { src: IMG.keyboard, caption: "WEEKEND LEAGUES", span: "md:col-span-2" },
];

export const WHY_US = [
  {
    num: "01",
    title: "Premium Setup",
    desc: "Tournament-grade tables, pro cues, ITTF-standard ping-pong and brand-new PS5 stations — nothing rented, nothing worn out.",
  },
  {
    num: "02",
    title: "Comfortable Environment",
    desc: "Fully air-conditioned lounge with ambient lighting, a chill cafe corner and mood music engineered for long sessions.",
  },
  {
    num: "03",
    title: "Multiple Games",
    desc: "Pool, snooker, table tennis, foosball and PS5 — five completely different arenas. Never the same night twice.",
  },
  {
    num: "04",
    title: "Competitive Atmosphere",
    desc: "Weekly leagues, live leaderboards and an energy that turns a friendly match into a story you'll retell for months.",
  },
  {
    num: "05",
    title: "Perfect for Friends & Groups",
    desc: "Squad plans, private zones and group discounts built for birthdays, offices and everything in between.",
  },
];

export const NAV_LINKS = [
  { label: "EXPERIENCE", href: "#experience" },
  { label: "ARENA", href: "#arena" },
  { label: "PRICING", href: "#pricing" },
  { label: "GALLERY", href: "#gallery" },
  { label: "WHY US", href: "#why-us" },
];

export const CONTACT_INFO = {
  name: "The Gaming Loft",
  tagline: "Play · Compete · Win",
  address: "2nd Floor, Beside Kamal Medicos, Opposite Apollo Pharmacy, Khamla Main Road, Nagpur, Maharashtra – 440025",
  shortAddress: "Khamla Main Road, Opposite Apollo Pharmacy, Nagpur",
  city: "Nagpur, Maharashtra",
  phone: "+91 82628 59258",
  phoneRaw: "+918262859258",
  timings: "10:30 AM – 11:30 PM (Daily)",
  email: "thegamingloft.nagpur@gmail.com",
  instagram: "@thegamingloft",
  kheloMoreUrl: "https://www.khelomore.com/sports-venues/nagpur/the-gaming-loft--khamla-main-road/3270",
};
