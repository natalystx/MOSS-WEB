import { useTranslation } from "@/app/i18n/client";
import { cn } from "@/utils/cn";
import Link from "next/link";
import React from "react";

type Menu = {
  text: string;
  href: string;
};

type DesktopMenuProps = {
  className?: string;
};

const DesktopMenu = ({ className }: DesktopMenuProps) => {
  const { t } = useTranslation();
  const menus: Menu[] = [
    {
      text: t("common_exclusive_tuinmeubelen"),
      href: "#",
    },
    {
      text: t("common_luxe_loungemeubelen"),
      href: "#",
    },
    {
      text: t("common_materialen"),
      href: "#",
    },
    {
      text: t("common_tuinaccessoires"),
      href: "#",
    },
    {
      text: t("common_over_ons"),
      href: "#",
    },
  ];
  return (
    <div className={cn("flex gap-x-6 items-center", className)}>
      {menus.map((menu) => (
        <Link
          key={menu.text}
          href={menu.href}
          className="text-sm font-medium text-primary hover:text-primary/60"
        >
          {menu.text}
        </Link>
      ))}
    </div>
  );
};

export default DesktopMenu;
