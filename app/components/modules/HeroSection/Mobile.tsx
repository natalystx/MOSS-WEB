import { cn } from "@/utils/cn";
import React from "react";
import { ReactComponent as FullLogo } from "@/assets/images/logo-large.svg";
import FilteredImage from "../../base/FiltedImage";
import MainImage from "@/assets/images/main-cover-image.png";
import WoodChair from "@/assets/images/chair.png";
import Sofa from "@/assets/images/luxe-zitzak-tuin.jpeg";
import { useTranslation } from "@/app/i18n";

type MobileProps = {
  className?: string;
  lng: string;
};

const Mobile = async ({ className, lng }: MobileProps) => {
  const { t } = await useTranslation(lng);
  return (
    <div className={cn("w-full flex gap-2 flex-wrap", className)}>
      <div className="grow relative w-full">
        <div className="w-full h-full absolute z-[2] flex justify-center items-center top-0 left-0 pointer-events-none">
          <FullLogo className="w-[343px] h-20" />
        </div>
        <FilteredImage
          alt="cover-image"
          image={MainImage}
          className="w-full h-[255px]"
          imageClassName="object-cover object-top-center hover:scale-[110%]  transition-transform duration-500"
        />
      </div>
      <div className="basis-[calc(50%-4px)] relative w-full">
        <div className="w-full h-full absolute z-[2] flex p-2 items-end top-0 left-0 pointer-events-none">
          <div className="text-white text-left">
            <p className="text-xs">{t("common_bekijk_onze_collectie")}</p>
            <p className="text-sm">{t("common_tuinmeubelen")}</p>
          </div>
        </div>
        <FilteredImage
          alt="cover-image"
          image={WoodChair}
          className="min-h-[184px] aspect-square"
          imageClassName="object-cover object-top-center hover:scale-[110%]  transition-transform duration-500"
        />
      </div>
      <div className="basis-[calc(50%-4px)] relative w-full">
        <div className="w-full h-full absolute z-[2] flex p-2 items-end top-0 left-0 pointer-events-none">
          <div className="text-white text-left">
            <p className="text-xs">{t("common_bekijk_onze_collectie")}</p>
            <p className="text-sm">{t("common_tuinmeubelen")}</p>
          </div>
        </div>
        <FilteredImage
          alt="cover-image"
          image={Sofa}
          className="min-h-[184px] aspect-square"
          imageClassName="object-cover object-top-center hover:scale-[110%] transition-transform duration-500"
        />
      </div>
    </div>
  );
};

export default Mobile;
