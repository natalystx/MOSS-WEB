"use client";
import { useTranslation } from "@/app/i18n/client";
import { cn } from "@/utils/cn";
import React from "react";
import Carousel from "../../base/Carousel";
import { mockProducts } from "@/mock/product";
import ProductCard from "../../base/ProductCard";
import { useMediaSize } from "@/hooks/useMediaSize";

type ProductCarouselSectionProps = {
  className?: string;
};

const ProductCarouselSection = ({ className }: ProductCarouselSectionProps) => {
  const { t } = useTranslation();
  const { isDesktop, isTablet } = useMediaSize();
  return (
    <div
      className={cn("w-full flex flex-col gap-y-10 items-center", className)}
    >
      <div className="w-full flex flex-col items-center justify-center text-primary">
        <p className="text-base ">{t("common_een_greep_uit_onze")}</p>
        <p className="text-[22px] leading-6">{t("common_moss_collectie")}</p>
        <hr className="mt-4 w-20 h-[1px] bg-surfaceBrown" />
      </div>
      <Carousel
        slideHight={isDesktop ? "404px" : isTablet ? "404px" : "284px"}
        gap="32px"
        slidesToShow={isDesktop ? 4 : isTablet ? 2 : 1}
        className="pl-4"
      >
        {mockProducts.map((product, index) => (
          <ProductCard
            imageClassName="size-[200px]  sm:size-[332px]"
            className="min-w-[200px] p-0 shrink-0 sm:min-w-[332px]"
            key={`${product.name}-${index}`}
            image={product.image}
            name={product.name}
            price={product.price}
            promoText={product.tag}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ProductCarouselSection;
