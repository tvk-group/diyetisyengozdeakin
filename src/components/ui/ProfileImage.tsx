"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProfileImageProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
}

export function ProfileImage({
  src,
  alt,
  className,
  fill,
  width,
  height,
  priority,
  sizes,
}: ProfileImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-gradient-to-br from-emerald/20 via-navy/10 to-memorial-red/10",
          fill ? "absolute inset-0" : "",
          className
        )}
      >
        <div className="text-center">
          <div className="mx-auto mb-3 flex h-24 w-24 items-center justify-center rounded-full bg-white/90 text-3xl font-bold text-navy shadow-lg">
            GA
          </div>
          <p className="font-heading text-lg font-bold text-navy">Gözde Akın</p>
          <p className="text-sm text-navy/60">Uzman Diyetisyen & Psikolog</p>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      priority={priority}
      sizes={sizes}
      className={cn("object-cover object-top", className)}
      onError={() => setError(true)}
    />
  );
}
