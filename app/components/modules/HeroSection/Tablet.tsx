"use client";

import { useTranslation } from "@/app/i18n/client";
import { cn } from "@/utils/cn";
import React from "react";
import Image from "next/image";
import MainHeroImage from "@/assets/images/main-cover-image.png";
import { ReactComponent as FullLogo } from "@/assets/images/logo-large.svg";
import Button, { BUTTON_COLOR } from "../../base/Button";

type TabletProps = {
  className?: string;
};

const Tablet = ({ className }: TabletProps) => {
  const { t } = useTranslation();
  return (
    <div className={cn("relative w-full", className)}>
      <div className="w-full relative h-[744px] 2xl:h-[720px]">
        <div className="w-full relative h-[744px] 2xl:h-[720px]">
          <Image
            src={MainHeroImage}
            alt="home-cozy-image"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full h-full z-[1] flex justify-center items-center top-0 left-0 absolute flex-col gap-y-6 2xl:w-[660px] 2xl:left-4 ">
          <FullLogo className="w-full h-[87px]" />
          <div className="w-full flex justify-center gap-x-8 2xl:gap-x-4">
            <a
              href="https://www.nmoss.com/exclusieve-tuinmeubelen/"
              target="_blank"
            >
              <Button>{t("common_bekijk_onze_tuinmeubelen")}</Button>
            </a>
            <a
              href="https://www.nmoss.com/luxe-loungemeubelen/"
              target="_blank"
            >
              <Button color={BUTTON_COLOR.SECONDARY}>
                {t("common_bekijk_onze_loungemeubelen")}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tablet;
