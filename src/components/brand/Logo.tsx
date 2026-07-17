import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { BRAND_DIMENSIONS, BRAND_IMAGES, BRAND_IMAGE_QUALITY } from "@/lib/brand";
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
  nav: "brand-image-crisp h-16 w-auto max-w-[240px] object-contain sm:h-[88px] sm:max-w-[320px]",
  default: "brand-image-crisp h-10 w-auto max-w-[160px] object-contain",
  full: "brand-image-crisp h-auto w-48 max-w-full sm:w-56",
};

const SIZE_SIZES: Record<LogoSize, string> = {
  nav: "(max-width: 640px) 240px, 320px",
  default: "160px",
  full: "(max-width: 640px) 192px, 224px",
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
        quality={BRAND_IMAGE_QUALITY}
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
