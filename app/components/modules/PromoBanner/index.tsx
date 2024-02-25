"use client";
import React from "react";
import Rating from "../../base/Rating";
import { useTranslation } from "@/app/i18n/client";
import IconLink, { IconLinkProps } from "../../base/IconLink";
import { cn } from "@/utils/cn";
import { IconEnum } from "../../base/Icon/viewmodel";

const PromoBanner = () => {
  const { t } = useTranslation();
  const links: IconLinkProps[] = [
    {
      icon: IconEnum.DELIVERY,
      text: t("promo_banner_delivery_link"),
      href: "#",
    },
    {
      icon: IconEnum.SHOP,
      text: t("promo_banner_shop_link"),
      href: "#",
    },
  ];
  return (
    <div className="h-6 flex justify-center w-full items-center sm:h-7 2xl:h-14 2xl:gap-x-8 bg-white">
      <div className="w-fit flex gap-x-2 items-center 2xl:gap-x-4 h-4 2xl:h-6">
        <Rating />
        <p className="text-xs h-4 text-primary 2xl:text-sm">
          {t("promo_banner_ads_text")}
        </p>
      </div>

      {links.map((item) => (
        <IconLink
          {...item}
          key={item.text}
          className={cn(item.className, "hidden 2xl:flex 2xl:h-6")}
        />
      ))}
    </div>
  );
};

export default PromoBanner;
