"use client";

import { cn } from "@/utils/cn";
import React from "react";
import Tablet from "./Tablet";
import Chair from "@/assets/images/chair.png";
import Image from "next/image";
import SofaImage from "@/assets/images/products/luxe-loungeset-tuin-KOEN-1.png";
import MarkerWithCard from "../MarkerWithCard";

type DesktopProps = {
  className?: string;
};

const Desktop = ({ className }: DesktopProps) => {
  const productData = {
    image: SofaImage,
    name: "Luxe loungeset teak KOEN",
    price: "6.225,-",
  };
  return (
    <div className={cn("flex h-[720px] gap-x-2 relative", className)}>
      <div className="w-[489px] h-full relative">
        <MarkerWithCard
          className="left-[150px] top-[290px] absolute z-10"
          product={productData}
        />
        <div className="w-[489px] h-[720px] relative z-0">
          <Image
            src={Chair}
            alt="chaLuxe loungeset teak KOEN"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="w-[calc(100%-497px)] relative h-[720px]">
        <div className="bottom-0 -translate-y-[172px] left-[32%] absolute z-10">
          <MarkerWithCard
            className="relative"
            offset={[null, 8]}
            placement="top-start"
            product={productData}
          />
        </div>
        <div className="bottom-0 -translate-y-[234px] left-[58%] absolute z-10">
          <MarkerWithCard
            className="relative"
            offset={[null, 8]}
            placement="top-start"
            product={productData}
          />
        </div>

        <Tablet className="z-0 relative" />
      </div>
    </div>
  );
};

export default Desktop;
