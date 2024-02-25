import { cn } from "@/utils/cn";
import Image, { StaticImageData } from "next/image";
import React from "react";
import Badge from "../Badge";

type ProductCardProps = {
  className?: string;
  image: string | StaticImageData;
  name: string;
  price: string;
  promoText?: string;
  imageClassName?: string;
};

const ProductCard = ({
  className,
  image,
  name,
  price,
  promoText,
  imageClassName,
}: ProductCardProps) => {
  return (
    <div
      className={cn(
        "p-4 bg-white rounded-lg flex-col items-center gap-y-2 relative",
        className
      )}
    >
      {promoText && (
        <Badge className="absolute top-0 left-0 z-10">{promoText}</Badge>
      )}
      <div className={cn("size-[188px] relative mx-auto", imageClassName)}>
        <Image src={image} alt={name} fill className="object-contains" />
      </div>
      <div className="w-full text-center text-primary text-base">
        <p>{name}</p>
        <p className="font-medium">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
