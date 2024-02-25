import React from "react";
import { IconEnum, useViewModel } from "./viewmodel";
import { cn } from "@/utils/cn";

type IconProps = {
  icon: IconEnum;
  className?: string;
  size?: "small" | "large";
};
const Icon = ({ icon, className, size = "small" }: IconProps) => {
  const { Icon } = useViewModel(icon);
  return (
    <Icon
      className={cn(
        size === "small" ? "size-5" : "size-6",
        "aspect-square",
        className
      )}
    />
  );
};

export default Icon;
