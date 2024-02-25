import React from "react";
import { IconEnum } from "../Icon/viewmodel";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Icon from "../Icon";

export type IconLinkProps = {
  icon: IconEnum;
  href: string;
  text: string;
  className?: string;
};

const IconLink = ({ icon, href, text, className }: IconLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "w-fit flex items-center gap-x-2 text-primary hover:text-primary/60",
        className
      )}
    >
      <Icon icon={icon} size="large" />
      <p className="text-sm">{text}</p>
    </Link>
  );
};

export default IconLink;
