import { cn } from "@/utils/cn";
import Image, { StaticImageData } from "next/image";
import React from "react";

type FilteredImageProps = {
  className: string;
  image: string | StaticImageData;
  alt: string;
  imageClassName?: string;
};

const FilteredImage = ({
  className,
  image,
  alt,
  imageClassName,
}: FilteredImageProps) => {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="z-[1] absolute top-0 left-0 bg-bwOverlay/40 w-full h-full pointer-events-none" />
      <div className="w-full relative h-full z-0">
        <Image
          src={image}
          alt={alt}
          fill
          className={cn("object-cover", imageClassName)}
        />
      </div>
    </div>
  );
};

export default FilteredImage;
