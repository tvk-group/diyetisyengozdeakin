import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { BRAND_IMAGES } from "@/lib/brand";
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
  const src = variant === "full" ? BRAND_IMAGES.logo : BRAND_IMAGES.logoMark;
  const size = variant === "full" ? { w: 160, h: 174 } : { w: 40, h: 40 };

  const content = (
    <div className={cn("flex items-center gap-3", className)}>
      <Image
        src={src}
        alt="Gözde Akın"
        width={size.w}
        height={size.h}
        className={cn(variant === "mark" ? "h-10 w-10 shrink-0" : "h-auto w-36", imageClassName)}
        priority
        unoptimized
      />
      {showName && variant === "mark" && (
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
