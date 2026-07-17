import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "light" | "gradient";
}

export function Section({ children, className, id, variant = "default" }: SectionProps) {
  const bg = {
    default: "bg-white",
    light: "bg-light-gray",
    gradient: "gradient-hero",
  };

  return (
    <section id={id} className={cn("py-20 md:py-28", bg[variant], className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({ badge, title, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <div className={cn("mb-16", centered && "text-center")}>
      {badge && (
        <span className="mb-4 inline-block rounded-full bg-memorial-red/10 px-4 py-1.5 text-sm font-medium text-memorial-red">
          {badge}
        </span>
      )}
      <h2 className="font-heading text-3xl font-bold tracking-tight text-navy md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-navy/60">{subtitle}</p>
      )}
    </div>
  );
}
