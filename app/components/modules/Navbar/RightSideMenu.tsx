import React from "react";
import Icon from "../../base/Icon";
import { IconEnum } from "../../base/Icon/viewmodel";
import { useTranslation } from "@/app/i18n/client";

const RightSideMenu = () => {
  const { t } = useTranslation();
  return (
    <div className="flex gap-x-3 text-primary sm:gap-x-4">
      <div className="hidden 2xl:flex items-center gap-x-1">
        <p className="text-sm font-medium">{t("common_nl")}</p>
        <button>
          <Icon icon={IconEnum.ARROW_DOWN} size="large" />
        </button>
      </div>
      <button className="hidden 2xl:block hover:text-primary/60">
        <Icon icon={IconEnum.SEARCH} size="large" />
      </button>
      <button className="hover:text-primary/60">
        <Icon icon={IconEnum.HEART} />
      </button>
      <button className="hover:text-primary/60">
        <Icon icon={IconEnum.CART} />
      </button>
      <button className="hover:text-primary/60">
        <Icon icon={IconEnum.USER} />
      </button>
    </div>
  );
};

export default RightSideMenu;
