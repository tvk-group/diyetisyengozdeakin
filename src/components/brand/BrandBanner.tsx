import Image from "next/image";
import { BRAND_DIMENSIONS, BRAND_IMAGES } from "@/lib/brand";
import { cn } from "@/lib/utils";

type BrandBannerProps = {
  className?: string;
  priority?: boolean;
};

export function BrandBanner({ className, priority }: BrandBannerProps) {
  const { width, height } = BRAND_DIMENSIONS.banner;

  return (
    <div className={cn("mx-auto max-w-4xl", className)}>
      <Image
        src={BRAND_IMAGES.banner}
        alt="Gözde Akın — Bilimsel beslenme, metabolik iyileşme, hormonal denge"
        width={width}
        height={height}
        className="h-auto w-full rounded-3xl shadow-lg shadow-navy/5"
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 896px"
      />
    </div>
  );
}
