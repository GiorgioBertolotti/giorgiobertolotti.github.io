import mangatimeScreens from "../assets/mangatime-screens.jpg";
import customerlyInbox from "../assets/customerly-inbox.webp";
import nursingShifts from "../assets/nursing-shifts.jpeg";
import safetravel from "../assets/safetravel.jpg";
import beelder from "../assets/beelder.jpg";

export const email = "giorgiobertol@gmail.com";

/** The one conversion action on the page. Same label everywhere. */
export const cta = {
  label: "Start a project",
  href: `mailto:${email}?subject=${encodeURIComponent("New project")}`,
};

export const socials = [
  { label: "GitHub", href: "https://github.com/GiorgioBertolotti", icon: "github-logo" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/giorgiobertolotti/", icon: "linkedin-logo" },
  { label: "Instagram", href: "https://www.instagram.com/giorgiozem/", icon: "instagram-logo" },
] as const;

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

export const facts = [
  { value: "80K+", label: "installs of MangaTime, the iOS and Android app I co-founded and build" },
  { value: "6+ years", label: "shipping React Native apps in production" },
  { value: "Since 2017", label: "writing software professionally, from embedded to web" },
  { value: "2 awards", label: "for best implementation at the Download Innovation Hackathon" },
];

export const services = {
  mobile: {
    title: "Mobile app development",
    body: "Cross-platform iOS and Android apps with React Native and Expo. One codebase, a native feel, and builds ready for the stores.",
    tags: [
      "React Native",
      "Expo & EAS",
      "TypeScript",
      "Push notifications",
      "Subscriptions",
      "Store release",
    ],
  },
  frontend: {
    title: "Frontend development",
    body: "React and TypeScript frontends for SaaS back offices, dashboards and internal tools, built on a consistent design system.",
  },
  mvp: {
    title: "MVPs for founders",
    body: "From rough idea to first release. Having co-founded a product myself, I care about scope, timing and what to leave out.",
  },
  upgrades: {
    title: "Upgrades and refactors",
    body: "Your app works but the codebase is slowing you down? I modernise React Native projects: dependency upgrades, cleaner architecture, shared components.",
  },
};

export const featured = {
  name: "MangaTime",
  href: "https://mangatime.net",
  role: "Co-founder, mobile development",
  body: "A manga tracker for iOS and Android with new-chapter alerts, reading stats and home screen widgets. I build and run the app end to end, from code to store releases.",
  stat: { value: "80K+", label: "installs worldwide" },
  stack: ["React Native", "Expo", "EAS", "RevenueCat", "OneSignal", "Sentry"],
  image: mangatimeScreens,
  imageAlt: "Three MangaTime screens: the To Read list, the reading library with stats, and AI recommendations",
};

export const projects: {
  name: string;
  kind: string;
  body: string;
  href: string;
  linkLabel: string;
  image: ImageMetadata;
  imageAlt: string;
  /** CSS object-position for the 4:3 crop. */
  focus?: string;
}[] = [
  {
    name: "Customerly",
    kind: "SaaS back office, frontend",
    body: "The back office SaaS teams use to run customer service: inbox, AI agent, help center and automations.",
    href: "https://www.customerly.io/",
    linkLabel: "Visit customerly.io",
    image: customerlyInbox,
    imageAlt: "Customerly inbox with team queues and a list of customer conversations",
    focus: "left top",
  },
  {
    name: "Nursing Shifts",
    kind: "Web app",
    body: "Imports nurses' shift schedules into Google Calendar in a couple of clicks.",
    href: "https://www.linkedin.com/posts/giorgiobertolotti_ciao-ragazzi-vi-racconto-una-storia-di-amore-activity-7234817233368023040-m-zJ",
    linkLabel: "Read the story",
    image: nursingShifts,
    imageAlt: "Nursing Shifts calendar with a monthly shift summary",
  },
  {
    name: "SafeTravel",
    kind: "React Native app, 48h hackathon",
    body: "Check COVID-19 rules by location and plan trips around them. Best implementation award, 2021.",
    href: "https://github.com/domenicogaeni/hackatomici",
    linkLabel: "View on GitHub",
    image: safetravel,
    imageAlt: "SafeTravel app showing active rules for Bergamo",
  },
  {
    name: "Beelder",
    kind: "Flutter app, 48h hackathon",
    body: "Find working groups nearby and recruit members for tasks. Best implementation award, 2020.",
    href: "https://github.com/ssh-impatici/download-hackathon-2020",
    linkLabel: "View on GitHub",
    image: beelder,
    imageAlt: "Beelder app map with nearby groups",
  },
];

export const experience: {
  company: string;
  href?: string;
  role: string;
  period: string;
  body: string;
}[] = [
  {
    company: "Customerly",
    href: "https://www.customerly.io/",
    role: "Freelance frontend developer",
    period: "2024 - now",
    body: "I develop the back office frontend that Customerly's customers use to run their customer service.",
  },
  {
    company: "Fatture in Cloud",
    href: "https://www.fattureincloud.it/",
    role: "Mobile developer",
    period: "2020 - 2022",
    body: "Two years on the React Native app: new features, a move to function components, dependency upgrades and a design system shared with a second app.",
  },
  {
    company: "Boffi Informatica",
    href: "https://www.boffi-informatica.com/",
    role: "Freelance software developer",
    period: "2023 - now",
    body: "Development and maintenance of C# software for Boffi's clients.",
  },
  {
    company: "Aretés",
    href: "https://aretes.net/",
    role: "Software developer",
    period: "2017 - 2020",
    body: "Embedded systems for remote monitoring of fire and intrusion control panels.",
  },
  {
    company: "Mastranet AI",
    href: "https://www.mastranet.ai/",
    role: "Freelance frontend developer",
    period: "2024 - 2025",
    body: "Frontend for Mira, an AI assistant that helps production-line staff troubleshoot industrial machines.",
  },
  {
    company: "SuperUrbanity",
    href: "https://www.superurbanity.com/",
    role: "Freelance frontend developer",
    period: "2023 - 2024",
    body: "Built the MVP of ForImpact, a tool for municipalities and companies to track their sustainability actions.",
  },
  {
    company: "GreenMod",
    role: "Co-founder and CTO",
    period: "2022",
    body: "Co-founded an early-stage building automation startup and led its product development.",
  },
];

export const process = [
  {
    verb: "Talk",
    icon: "chats-circle",
    body: "We start with a call about your product, your users and your deadline. You leave with a clear idea of what is realistic.",
  },
  {
    verb: "Plan",
    icon: "list-checks",
    body: "I turn it into a written plan with milestones and an estimate, so you know what you are paying for before any code is written.",
  },
  {
    verb: "Build",
    icon: "code",
    body: "Work ships in small increments. You get installable test builds early, so feedback happens on a real phone, not in a document.",
  },
  {
    verb: "Launch",
    icon: "rocket-launch",
    body: "I take care of App Store and Google Play submission, then stay available for fixes, updates and the next version.",
  },
];

export const education = [
  {
    title: "BSc in Computer Science",
    place: "University of Milano-Bicocca",
    period: "2017 - 2020",
    href: "https://drive.google.com/file/d/1TtaMvOREkd1Hk-J0g0Zy_r-0MdkxuLv5/view?usp=sharing",
    linkLabel: "Thesis (Italian)",
  },
  {
    title: "Diploma, computer expert",
    place: "ITIS G. Marconi, Dalmine",
    period: "2012 - 2017",
    href: "https://drive.google.com/file/d/0B9Zn87zyRr2WNmNzVDF6T1NjSTg/view?usp=sharing&resourcekey=0-1ODpGGN3N7xRwulyxxRn-Q",
    linkLabel: "Thesis (Italian)",
  },
];

export const awards = [
  { title: "Best implementation award", place: "Download Innovation Hackathon", period: "2021" },
  { title: "Best implementation award", place: "Download Innovation Hackathon", period: "2020" },
];
