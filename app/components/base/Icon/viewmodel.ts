import { ReactComponent as HamburgerMenuIcon } from "@/assets/icons/hamburger-menu.svg";
import { ReactComponent as ArrowDownIcon } from "@/assets/icons/arrow-down.svg";
import { ReactComponent as SearchIcon } from "@/assets/icons/search.svg";
import { ReactComponent as HeartIcon } from "@/assets/icons/heart.svg";
import { ReactComponent as CartIcon } from "@/assets/icons/cart.svg";
import { ReactComponent as UserIcon } from "@/assets/icons/user.svg";
import { ReactComponent as StarIcon } from "@/assets/icons/star.svg";
import { ReactComponent as DeliveryIcon } from "@/assets/icons/delivery.svg";
import { ReactComponent as ShopIcon } from "@/assets/icons/shop.svg";
import { ReactComponent as ArrowRight } from "@/assets/icons/arrow-right.svg";

export enum IconEnum {
  HAMBURGER_MENU = "HAMBURGER_MENU",
  ARROW_DOWN = "ARROW_DOWN",
  SEARCH = "SEARCH",
  HEART = "HEART",
  CART = "CART",
  USER = "USER",
  STAR = "STAR",
  DELIVERY = "DELIVERY",
  SHOP = "SHOP",
  ARROW_RIGHT = "ARROW_RIGHT",
}

export const useViewModel = (icon: IconEnum) => {
  const Icons = {
    [IconEnum.HAMBURGER_MENU]: HamburgerMenuIcon,
    [IconEnum.ARROW_DOWN]: ArrowDownIcon,
    [IconEnum.SEARCH]: SearchIcon,
    [IconEnum.HEART]: HeartIcon,
    [IconEnum.CART]: CartIcon,
    [IconEnum.USER]: UserIcon,
    [IconEnum.STAR]: StarIcon,
    [IconEnum.DELIVERY]: DeliveryIcon,
    [IconEnum.SHOP]: ShopIcon,
    [IconEnum.ARROW_RIGHT]: ArrowRight,
  };

  return {
    Icon: Icons[icon],
  };
};
