import Image from "next/image";
import { BRAND_DIMENSIONS, BRAND_IMAGES, BRAND_IMAGE_QUALITY } from "@/lib/brand";
import { cn } from "@/lib/utils";

type BrandBannerProps = {
  className?: string;
  priority?: boolean;
  variant?: "card" | "embedded";
};

export function BrandBanner({ className, priority, variant = "card" }: BrandBannerProps) {
  const { width, height } = BRAND_DIMENSIONS.banner;
  const embedded = variant === "embedded";

  return (
    <div
      className={cn(
        "mx-auto w-full",
        embedded ? "max-w-3xl" : "max-w-4xl",
        className
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden",
          embedded && "brand-banner-embed"
        )}
      >
        <Image
          src={BRAND_IMAGES.banner}
          alt="Gözde Akın — Bilimsel beslenme, metabolik iyileşme, hormonal denge"
          width={width}
          height={height}
          quality={BRAND_IMAGE_QUALITY}
          className={cn(
            "brand-image-crisp h-auto w-full",
            embedded ? "rounded-2xl" : "rounded-3xl shadow-lg shadow-navy/5"
          )}
          priority={priority}
          sizes={
            embedded
              ? "(max-width: 1024px) 100vw, 768px"
              : "(max-width: 1024px) 100vw, 896px"
          }
        />
      </div>
    </div>
  );
}
