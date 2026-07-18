import {
  Activity,
  Apple,
  Baby,
  Building2,
  Dumbbell,
  Flame,
  Leaf,
  Scale,
  Sparkles,
  Sun,
  type LucideIcon,
} from "lucide-react";
import type { ServiceSlug } from "@/content/services/services";

export type ServiceTheme = {
  gradient: string;
  iconBg: string;
  iconColor: string;
  decorColor: string;
  Icon: LucideIcon;
};

export const SERVICE_THEMES: Record<ServiceSlug, ServiceTheme> = {
  "kilo-yonetimi": {
    gradient: "from-emerald/30 via-white to-teal/10",
    iconBg: "bg-emerald/15",
    iconColor: "text-emerald",
    decorColor: "text-emerald/15",
    Icon: Scale,
  },
  pcos: {
    gradient: "from-fuchsia/25 via-white to-pink/10",
    iconBg: "bg-fuchsia/15",
    iconColor: "text-fuchsia-700",
    decorColor: "text-fuchsia-200",
    Icon: Sparkles,
  },
  "gebelikte-beslenme": {
    gradient: "from-rose/25 via-white to-amber/10",
    iconBg: "bg-rose/15",
    iconColor: "text-rose-600",
    decorColor: "text-rose-200",
    Icon: Baby,
  },
  diyabet: {
    gradient: "from-sky/25 via-white to-blue/10",
    iconBg: "bg-sky/15",
    iconColor: "text-sky-700",
    decorColor: "text-sky-200",
    Icon: Activity,
  },
  "insulin-direnci": {
    gradient: "from-amber/25 via-white to-orange/10",
    iconBg: "bg-amber/15",
    iconColor: "text-amber-700",
    decorColor: "text-amber-200",
    Icon: Flame,
  },
  obezite: {
    gradient: "from-navy/10 via-white to-emerald/15",
    iconBg: "bg-navy/10",
    iconColor: "text-navy",
    decorColor: "text-navy/10",
    Icon: Scale,
  },
  "fonksiyonel-tip": {
    gradient: "from-teal/25 via-white to-emerald/10",
    iconBg: "bg-teal/15",
    iconColor: "text-teal-700",
    decorColor: "text-teal/15",
    Icon: Leaf,
  },
  "kurumsal-beslenme": {
    gradient: "from-slate/20 via-white to-zinc/10",
    iconBg: "bg-slate/15",
    iconColor: "text-slate-700",
    decorColor: "text-slate/15",
    Icon: Building2,
  },
  "sporcu-beslenmesi": {
    gradient: "from-orange/25 via-white to-red/10",
    iconBg: "bg-orange/15",
    iconColor: "text-orange-700",
    decorColor: "text-orange/15",
    Icon: Dumbbell,
  },
  "cocuk-beslenmesi": {
    gradient: "from-lime/25 via-white to-yellow/10",
    iconBg: "bg-lime/20",
    iconColor: "text-lime-800",
    decorColor: "text-lime-200",
    Icon: Apple,
  },
  "hormon-dengesi": {
    gradient: "from-violet/25 via-white to-purple/10",
    iconBg: "bg-violet/15",
    iconColor: "text-violet-700",
    decorColor: "text-violet/15",
    Icon: Activity,
  },
  menopoz: {
    gradient: "from-amber/20 via-white to-rose/15",
    iconBg: "bg-amber/15",
    iconColor: "text-amber-800",
    decorColor: "text-amber/15",
    Icon: Sun,
  },
};
