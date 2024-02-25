import { cn } from "@/utils/cn";
import React from "react";

type BadgeProps = {
  className?: string;
  children: React.ReactNode;
};

const Badge = ({ className, children }: BadgeProps) => {
  return (
    <div
      className={cn(
        "px-3 py-2 rounded-lg bg-surfaceBrown text-white text-xs text-center",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Badge;
