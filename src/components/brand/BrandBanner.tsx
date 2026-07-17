import Image from "next/image";
import { BRAND_IMAGES } from "@/lib/brand";
import { cn } from "@/lib/utils";

type BrandBannerProps = {
  className?: string;
  priority?: boolean;
};

export function BrandBanner({ className, priority }: BrandBannerProps) {
  return (
    <div className={cn("mx-auto max-w-4xl", className)}>
      <Image
        src={BRAND_IMAGES.banner}
        alt="Gözde Akın — Bilimsel beslenme, metabolik iyileşme, hormonal denge"
        width={1200}
        height={900}
        className="h-auto w-full rounded-3xl shadow-lg shadow-navy/5"
        priority={priority}
        unoptimized
      />
    </div>
  );
}
