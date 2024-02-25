import React from "react";
import Icon from "../../base/Icon";
import { IconEnum } from "../../base/Icon/viewmodel";

const MobileMenu = () => {
  return (
    <div className="flex gap-x-4 text-primary 2xl:hidden">
      <button className="hover:text-primary/60">
        <Icon icon={IconEnum.HAMBURGER_MENU} size="large" />
      </button>
      <button className="hover:text-primary/60">
        <Icon icon={IconEnum.SEARCH} size="large" />
      </button>
    </div>
  );
};

export default MobileMenu;
