import { Link } from "@/i18n/navigation";
import type { CardTheme } from "@/lib/card-themes";
import { cn } from "@/lib/utils";

type ShellOptions = {
  theme: CardTheme;
  className?: string;
  showDecor?: boolean;
  decorSize?: "sm" | "md" | "lg";
};

type ThemedCardProps = ShellOptions & {
  children: React.ReactNode;
  href?: string;
  external?: boolean;
};

const decorSizes = {
  sm: "h-16 w-16 -right-3 -top-3",
  md: "h-24 w-24 -right-4 -top-4",
  lg: "h-28 w-28 -right-5 -top-5",
};

function CardShell({
  theme,
  children,
  className,
  showDecor = true,
  decorSize = "md",
  href,
  external,
}: ThemedCardProps) {
  const DecorIcon = theme.Icon;
  const classes = cn(
    "group relative overflow-hidden rounded-2xl border border-white/70 shadow-sm transition-all duration-300",
    href && "hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald/10",
    className
  );

  const inner = (
    <>
      <div className={cn("absolute inset-0 bg-gradient-to-br", theme.gradient)} aria-hidden />
      {showDecor && (
        <DecorIcon
          className={cn(
            "pointer-events-none absolute transition-transform duration-300 group-hover:scale-110",
            decorSizes[decorSize],
            theme.decorColor
          )}
          strokeWidth={1.25}
          aria-hidden
        />
      )}
      <div className="relative z-10">{children}</div>
    </>
  );

  if (href) {
    if (external || href.startsWith("http")) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    );
  }

  return <div className={classes}>{inner}</div>;
}

type FeatureCardProps = ShellOptions & {
  title: string;
  description?: string;
  href?: string;
  external?: boolean;
  centered?: boolean;
};

export function FeatureCard({
  theme,
  title,
  description,
  href,
  external,
  centered = true,
  className,
  showDecor = true,
  decorSize = "md",
}: FeatureCardProps) {
  const Icon = theme.Icon;

  return (
    <CardShell
      theme={theme}
      href={href}
      external={external}
      showDecor={showDecor}
      decorSize={decorSize}
      className={cn(centered ? "p-8 text-center" : "p-8", className)}
    >
      <div
        className={cn(
          "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-colors group-hover:bg-white/80",
          theme.iconBg,
          theme.iconColor,
          centered && "mx-auto"
        )}
      >
        <Icon className="h-6 w-6" strokeWidth={1.75} />
      </div>
      <h3 className="font-heading mb-2 text-lg font-semibold text-navy">{title}</h3>
      {description && <p className="text-sm text-navy/60">{description}</p>}
    </CardShell>
  );
}

type CompactCardProps = ShellOptions & {
  title: string;
  href?: string;
};

export function CompactThemedCard({
  theme,
  title,
  href,
  className,
  showDecor = true,
}: CompactCardProps) {
  const Icon = theme.Icon;

  return (
    <CardShell
      theme={theme}
      href={href}
      showDecor={showDecor}
      decorSize="sm"
      className={cn("flex items-center gap-4 p-5", className)}
    >
      <div
        className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors group-hover:bg-white/80",
          theme.iconBg,
          theme.iconColor
        )}
      >
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </div>
      <span className="text-sm font-medium text-navy">{title}</span>
    </CardShell>
  );
}

type MetricCardProps = ShellOptions & {
  value: string;
  label: string;
};

export function MetricCard({ theme, value, label, className }: MetricCardProps) {
  const Icon = theme.Icon;

  return (
    <CardShell theme={theme} showDecor decorSize="sm" className={cn("p-4 text-center", className)}>
      <Icon className={cn("mx-auto mb-2 h-6 w-6", theme.iconColor)} strokeWidth={1.75} />
      <p className="font-heading text-xl font-bold text-navy">{value}</p>
      <p className="mt-1 text-xs text-navy/60">{label}</p>
    </CardShell>
  );
}

type ContactRowProps = ShellOptions & {
  children: React.ReactNode;
  href?: string;
  external?: boolean;
};

export function ThemedContactRow({
  theme,
  children,
  href,
  external,
  className,
}: ContactRowProps) {
  const Icon = theme.Icon;
  const content = (
    <>
      <div
        className={cn(
          "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl",
          theme.iconBg,
          theme.iconColor
        )}
      >
        <Icon className="h-6 w-6" strokeWidth={1.75} />
      </div>
      <div className="min-w-0 flex-1">{children}</div>
    </>
  );

  return (
    <CardShell
      theme={theme}
      href={href}
      external={external}
      showDecor={false}
      className={cn("flex items-center gap-4 p-6", href && "cursor-pointer", className)}
    >
      {content}
    </CardShell>
  );
}

export { CardShell as ThemedCard };
