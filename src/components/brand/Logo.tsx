import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { BRAND_DIMENSIONS, BRAND_IMAGES } from "@/lib/brand";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "mark" | "full";
  href?: string;
  className?: string;
  imageClassName?: string;
  showName?: boolean;
  nameClassName?: string;
  titleClassName?: string;
  subtitle?: string;
  subtitleClassName?: string;
  dark?: boolean;
};

export function Logo({
  variant = "mark",
  href = "/",
  className,
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

  const content = (
    <div className={cn("flex items-center gap-3", className)}>
      <Image
        src={BRAND_IMAGES.logo}
        alt="Gözde Akın"
        width={width}
        height={height}
        className={cn(
          isFull ? "h-auto w-44 max-w-full sm:w-52" : "h-10 w-auto max-w-[140px] object-contain",
          imageClassName
        )}
        priority
        sizes={isFull ? "(max-width: 640px) 176px, 208px" : "140px"}
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
      <Link href={href} className="mb-4 inline-flex shrink-0">
        {content}
      </Link>
    );
  }

  return content;
}
