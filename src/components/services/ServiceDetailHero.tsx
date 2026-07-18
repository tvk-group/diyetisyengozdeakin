import type { CardTheme } from "@/lib/card-themes";
import { cn } from "@/lib/utils";

type Props = {
  theme: CardTheme;
  title: string;
  subtitle: string;
};

export function ServiceDetailHero({ theme, title, subtitle }: Props) {
  const Icon = theme.Icon;

  return (
    <section className="relative overflow-hidden">
      <div className={cn("absolute inset-0 bg-gradient-to-br", theme.gradient)} aria-hidden />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/40 via-transparent to-transparent"
        aria-hidden
      />
      <Icon
        className={cn(
          "pointer-events-none absolute -right-8 top-1/2 h-48 w-48 -translate-y-1/2 opacity-80 md:-right-4 md:h-64 md:w-64 lg:h-72 lg:w-72",
          theme.decorColor
        )}
        strokeWidth={1}
        aria-hidden
      />
      <Icon
        className={cn(
          "pointer-events-none absolute -left-10 bottom-0 h-32 w-32 opacity-40 md:h-40 md:w-40",
          theme.decorColor
        )}
        strokeWidth={1}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div
            className={cn(
              "mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm",
              theme.iconBg,
              theme.iconColor
            )}
          >
            <Icon className="h-7 w-7" strokeWidth={1.75} />
          </div>
          <h1 className="font-heading text-3xl font-bold tracking-tight text-navy md:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-navy/60">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
