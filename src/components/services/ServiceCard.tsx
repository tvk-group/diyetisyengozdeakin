import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import type { ServiceSlug } from "@/content/services/services";
import { getServiceTheme } from "@/lib/card-themes";
import { ThemedCard } from "@/components/ui/ThemedCard";

type Props = {
  slug: ServiceSlug;
  name: string;
  cta: string;
};

export function ServiceCard({ slug, name, cta }: Props) {
  const theme = getServiceTheme(slug);
  const Icon = theme.Icon;

  return (
    <Link href={`/hizmetler/${slug}`} className="block">
      <ThemedCard theme={theme} showDecor decorSize="lg" className="p-8 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald/10">
        <div
          className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${theme.iconBg} ${theme.iconColor} transition-colors group-hover:bg-white/80`}
        >
          <Icon className="h-6 w-6" strokeWidth={1.75} />
        </div>
        <h3 className="font-heading mb-3 text-lg font-semibold text-navy transition-colors group-hover:text-emerald">
          {name}
        </h3>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-memorial-red">
          {cta}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </ThemedCard>
    </Link>
  );
}
