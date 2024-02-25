"use client";

import { cn } from "@/utils/cn";
import React from "react";
import Logo from "@/assets/images/brand-logo.svg";
import MobileMenu from "./MobileMenu";
import RightSideMenu from "./RightSideMenu";
import DesktopMenu from "./DesktopMenu";
import Image from "next/image";

type NavbarProps = {
  className?: string;
  children?: React.ReactNode;
};

const Navbar = ({ className, children }: NavbarProps) => {
  return (
    <div className={cn("w-full", className)}>
      {children || null}
      <div
        className={cn(
          "bg-surfaceSecondary py-3 px-4 flex justify-between items-center h-12 sm:py-[10px] sm:px-8 sm:h-14 2xl:px-[128px] 2xl:py-9 2xl:h-[98px] w-full"
        )}
      >
        <MobileMenu />
        <div className="w-[84px] h-6 sm:w-[112px] sm:h-8 2xl:w-[147px] 2xl:h-[42px] relative">
          <Image src={Logo} fill alt="logo" className="object-contains" />
        </div>
        <DesktopMenu className="hidden 2xl:flex" />
        <RightSideMenu />
      </div>
    </div>
  );
};

export default Navbar;
