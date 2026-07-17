import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { BRAND_DIMENSIONS, BRAND_IMAGES } from "@/lib/brand";
import { cn } from "@/lib/utils";

type LogoSize = "nav" | "default" | "full";

type LogoProps = {
  variant?: "mark" | "full";
  size?: LogoSize;
  href?: string;
  className?: string;
  linkClassName?: string;
  imageClassName?: string;
  showName?: boolean;
  nameClassName?: string;
  titleClassName?: string;
  subtitle?: string;
  subtitleClassName?: string;
  dark?: boolean;
};

const SIZE_CLASSES: Record<LogoSize, string> = {
  nav: "h-16 w-auto max-w-[220px] object-contain sm:h-20 sm:max-w-[280px]",
  default: "h-10 w-auto max-w-[140px] object-contain",
  full: "h-auto w-44 max-w-full sm:w-52",
};

const SIZE_SIZES: Record<LogoSize, string> = {
  nav: "(max-width: 640px) 220px, 280px",
  default: "140px",
  full: "(max-width: 640px) 176px, 208px",
};

export function Logo({
  variant = "mark",
  size = "default",
  href = "/",
  className,
  linkClassName,
  imageClassName,
  showName = true,
  nameClassName,
  titleClassName,
  subtitle,
  subtitleClassName,
  dark = false,
}: LogoProps) {
  const { width, height } = BRAND_DIMENSIONS.logo;
  const isFull = variant === "full";
  const resolvedSize = isFull ? "full" : size;

  const content = (
    <div className={cn("flex items-center gap-3", className)}>
      <Image
        src={BRAND_IMAGES.logo}
        alt="Gözde Akın"
        width={width}
        height={height}
        className={cn(SIZE_CLASSES[resolvedSize], imageClassName)}
        priority={resolvedSize === "nav"}
        sizes={SIZE_SIZES[resolvedSize]}
      />
      {showName && !isFull && (
        <div className={cn("min-w-0", nameClassName)}>
          <p
            className={cn(
              "font-heading text-sm font-bold",
              dark ? "text-white" : "text-navy",
              titleClassName
            )}
          >
            Gözde Akın
          </p>
          {subtitle && (
            <p className={cn("text-xs", dark ? "text-white/60" : "text-navy/50", subtitleClassName)}>
              {subtitle}
            </p>
          )}
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className={cn("inline-flex shrink-0", linkClassName)}>
        {content}
      </Link>
    );
  }

  return content;
}
