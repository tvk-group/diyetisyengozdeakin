import {
  Activity,
  Apple,
  Baby,
  Brain,
  Building2,
  ClipboardList,
  Dumbbell,
  Flame,
  FlaskConical,
  Globe,
  Heart,
  HeartHandshake,
  Leaf,
  LineChart,
  Mail,
  MapPin,
  MessageCircle,
  Microscope,
  Phone,
  Scale,
  ShieldCheck,
  Sparkles,
  Sun,
  Target,
  TrendingDown,
  TrendingUp,
  Users,
  Video,
  type LucideIcon,
} from "lucide-react";
import type { ServiceSlug } from "@/content/services/services";
import { EXPERTISE_SERVICE_SLUGS } from "@/lib/expertise";
import { EXPERTISE_AREAS } from "@/lib/constants";
import { SERVICE_THEMES, type ServiceTheme } from "@/lib/service-themes";

export type CardTheme = ServiceTheme;

export type ExpertiseArea = (typeof EXPERTISE_AREAS)[number];
export type WhyChooseKey =
  | "scienceBased"
  | "personalized"
  | "psychologyNutrition"
  | "medicalAnalysis"
  | "longTerm"
  | "noCrashDiets";
export type JourneyStepKey = "step1" | "step2" | "step3" | "step4" | "step5" | "step6";
export type OnlineFeatureKey = "videoCall" | "worldwide" | "personalized" | "followUp";
export type SuccessMetricKey = "weightLoss" | "fatRatio" | "teamSupport";
export type BlogCategoryKey = "nutrition" | "psychology" | "insulinResistance";
export type ContactRowKey =
  | "whatsapp"
  | "email"
  | "phone"
  | "hours"
  | "hospital"
  | "memorial"
  | "instagram"
  | "linkedin";
export type AboutStatKey = "stat1" | "stat2" | "stat3" | "stat4";

const WHY_CHOOSE_THEMES: Record<WhyChooseKey, CardTheme> = {
  scienceBased: {
    gradient: "from-teal/25 via-white to-emerald/10",
    iconBg: "bg-teal/15",
    iconColor: "text-teal-700",
    decorColor: "text-teal/15",
    Icon: FlaskConical,
  },
  personalized: {
    gradient: "from-rose/25 via-white to-pink/10",
    iconBg: "bg-rose/15",
    iconColor: "text-rose-600",
    decorColor: "text-rose/15",
    Icon: HeartHandshake,
  },
  psychologyNutrition: {
    gradient: "from-violet/25 via-white to-purple/10",
    iconBg: "bg-violet/15",
    iconColor: "text-violet-700",
    decorColor: "text-violet/15",
    Icon: Brain,
  },
  medicalAnalysis: {
    gradient: "from-sky/25 via-white to-blue/10",
    iconBg: "bg-sky/15",
    iconColor: "text-sky-700",
    decorColor: "text-sky/15",
    Icon: Microscope,
  },
  longTerm: {
    gradient: "from-emerald/30 via-white to-teal/10",
    iconBg: "bg-emerald/15",
    iconColor: "text-emerald",
    decorColor: "text-emerald/15",
    Icon: TrendingUp,
  },
  noCrashDiets: {
    gradient: "from-amber/25 via-white to-orange/10",
    iconBg: "bg-amber/15",
    iconColor: "text-amber-700",
    decorColor: "text-amber/15",
    Icon: ShieldCheck,
  },
};

const JOURNEY_THEMES: Record<JourneyStepKey, CardTheme> = {
  step1: {
    gradient: "from-sky/20 via-white to-blue/10",
    iconBg: "bg-sky/15",
    iconColor: "text-sky-700",
    decorColor: "text-sky/15",
    Icon: MessageCircle,
  },
  step2: {
    gradient: "from-teal/20 via-white to-emerald/10",
    iconBg: "bg-teal/15",
    iconColor: "text-teal-700",
    decorColor: "text-teal/15",
    Icon: FlaskConical,
  },
  step3: {
    gradient: "from-violet/20 via-white to-purple/10",
    iconBg: "bg-violet/15",
    iconColor: "text-violet-700",
    decorColor: "text-violet/15",
    Icon: ClipboardList,
  },
  step4: {
    gradient: "from-rose/20 via-white to-amber/10",
    iconBg: "bg-rose/15",
    iconColor: "text-rose-600",
    decorColor: "text-rose/15",
    Icon: Target,
  },
  step5: {
    gradient: "from-emerald/25 via-white to-teal/10",
    iconBg: "bg-emerald/15",
    iconColor: "text-emerald",
    decorColor: "text-emerald/15",
    Icon: LineChart,
  },
  step6: {
    gradient: "from-amber/20 via-white to-emerald/15",
    iconBg: "bg-amber/15",
    iconColor: "text-amber-700",
    decorColor: "text-amber/15",
    Icon: Activity,
  },
};

const ONLINE_FEATURE_THEMES: Record<OnlineFeatureKey, CardTheme> = {
  videoCall: {
    gradient: "from-sky/25 via-white to-blue/10",
    iconBg: "bg-sky/15",
    iconColor: "text-sky-700",
    decorColor: "text-sky/15",
    Icon: Video,
  },
  worldwide: {
    gradient: "from-emerald/25 via-white to-teal/10",
    iconBg: "bg-emerald/15",
    iconColor: "text-emerald",
    decorColor: "text-emerald/15",
    Icon: Globe,
  },
  personalized: {
    gradient: "from-rose/25 via-white to-pink/10",
    iconBg: "bg-rose/15",
    iconColor: "text-rose-600",
    decorColor: "text-rose/15",
    Icon: Heart,
  },
  followUp: {
    gradient: "from-teal/25 via-white to-emerald/10",
    iconBg: "bg-teal/15",
    iconColor: "text-teal-700",
    decorColor: "text-teal/15",
    Icon: LineChart,
  },
};

const SUCCESS_METRIC_THEMES: Record<SuccessMetricKey, CardTheme> = {
  weightLoss: {
    gradient: "from-emerald/25 via-white to-teal/10",
    iconBg: "bg-emerald/15",
    iconColor: "text-emerald",
    decorColor: "text-emerald/15",
    Icon: Scale,
  },
  fatRatio: {
    gradient: "from-amber/25 via-white to-orange/10",
    iconBg: "bg-amber/15",
    iconColor: "text-amber-700",
    decorColor: "text-amber/15",
    Icon: TrendingDown,
  },
  teamSupport: {
    gradient: "from-sky/25 via-white to-blue/10",
    iconBg: "bg-sky/15",
    iconColor: "text-sky-700",
    decorColor: "text-sky/15",
    Icon: Users,
  },
};

const BLOG_CATEGORY_THEMES: Record<BlogCategoryKey, CardTheme> = {
  nutrition: {
    gradient: "from-emerald/30 via-white to-teal/10",
    iconBg: "bg-emerald/15",
    iconColor: "text-emerald",
    decorColor: "text-emerald/15",
    Icon: Leaf,
  },
  psychology: {
    gradient: "from-violet/25 via-white to-purple/10",
    iconBg: "bg-violet/15",
    iconColor: "text-violet-700",
    decorColor: "text-violet/15",
    Icon: Brain,
  },
  insulinResistance: {
    gradient: "from-amber/25 via-white to-orange/10",
    iconBg: "bg-amber/15",
    iconColor: "text-amber-700",
    decorColor: "text-amber/15",
    Icon: Flame,
  },
};

const CONTACT_THEMES: Record<ContactRowKey, CardTheme> = {
  whatsapp: {
    gradient: "from-emerald/20 via-white to-teal/10",
    iconBg: "bg-emerald/15",
    iconColor: "text-emerald",
    decorColor: "text-emerald/10",
    Icon: MessageCircle,
  },
  email: {
    gradient: "from-rose/15 via-white to-pink/10",
    iconBg: "bg-memorial-red/10",
    iconColor: "text-memorial-red",
    decorColor: "text-memorial-red/10",
    Icon: Mail,
  },
  phone: {
    gradient: "from-rose/15 via-white to-amber/10",
    iconBg: "bg-memorial-red/10",
    iconColor: "text-memorial-red",
    decorColor: "text-memorial-red/10",
    Icon: Phone,
  },
  hours: {
    gradient: "from-slate/15 via-white to-zinc/10",
    iconBg: "bg-slate/15",
    iconColor: "text-slate-700",
    decorColor: "text-slate/10",
    Icon: Activity,
  },
  hospital: {
    gradient: "from-emerald/20 via-white to-teal/10",
    iconBg: "bg-emerald/15",
    iconColor: "text-emerald",
    decorColor: "text-emerald/10",
    Icon: MapPin,
  },
  memorial: {
    gradient: "from-memorial-red/10 via-white to-rose/10",
    iconBg: "bg-memorial-red/10",
    iconColor: "text-memorial-red",
    decorColor: "text-memorial-red/10",
    Icon: Building2,
  },
  instagram: {
    gradient: "from-fuchsia/20 via-white to-pink/10",
    iconBg: "bg-fuchsia/15",
    iconColor: "text-fuchsia-700",
    decorColor: "text-fuchsia/10",
    Icon: Sparkles,
  },
  linkedin: {
    gradient: "from-sky/20 via-white to-blue/10",
    iconBg: "bg-sky/15",
    iconColor: "text-sky-700",
    decorColor: "text-sky/10",
    Icon: Users,
  },
};

const ABOUT_STAT_THEMES: Record<AboutStatKey, CardTheme> = {
  stat1: {
    gradient: "from-emerald/25 via-white to-teal/10",
    iconBg: "bg-emerald/15",
    iconColor: "text-emerald",
    decorColor: "text-emerald/15",
    Icon: Leaf,
  },
  stat2: {
    gradient: "from-sky/25 via-white to-blue/10",
    iconBg: "bg-sky/15",
    iconColor: "text-sky-700",
    decorColor: "text-sky/15",
    Icon: Activity,
  },
  stat3: {
    gradient: "from-amber/25 via-white to-orange/10",
    iconBg: "bg-amber/15",
    iconColor: "text-amber-700",
    decorColor: "text-amber/15",
    Icon: TrendingUp,
  },
  stat4: {
    gradient: "from-violet/25 via-white to-purple/10",
    iconBg: "bg-violet/15",
    iconColor: "text-violet-700",
    decorColor: "text-violet/15",
    Icon: Brain,
  },
};

const DEFAULT_THEME: CardTheme = {
  gradient: "from-emerald/20 via-white to-teal/10",
  iconBg: "bg-emerald/15",
  iconColor: "text-emerald",
  decorColor: "text-emerald/15",
  Icon: Leaf,
};

export function getServiceTheme(slug: ServiceSlug): CardTheme {
  return SERVICE_THEMES[slug];
}

export function getExpertiseTheme(area: ExpertiseArea): CardTheme {
  const slug = EXPERTISE_SERVICE_SLUGS[area];
  if (slug && slug in SERVICE_THEMES) {
    return SERVICE_THEMES[slug as ServiceSlug];
  }
  return DEFAULT_THEME;
}

export function getWhyChooseTheme(key: WhyChooseKey): CardTheme {
  return WHY_CHOOSE_THEMES[key];
}

export function getJourneyTheme(key: JourneyStepKey): CardTheme {
  return JOURNEY_THEMES[key];
}

export function getOnlineFeatureTheme(key: OnlineFeatureKey): CardTheme {
  return ONLINE_FEATURE_THEMES[key];
}

export function getSuccessMetricTheme(key: SuccessMetricKey): CardTheme {
  return SUCCESS_METRIC_THEMES[key];
}

export function getBlogCategoryTheme(category: string): CardTheme {
  if (category in BLOG_CATEGORY_THEMES) {
    return BLOG_CATEGORY_THEMES[category as BlogCategoryKey];
  }
  return DEFAULT_THEME;
}

export function getContactTheme(key: ContactRowKey): CardTheme {
  return CONTACT_THEMES[key];
}

export function getAboutStatTheme(key: AboutStatKey): CardTheme {
  return ABOUT_STAT_THEMES[key];
}

export type { LucideIcon };
