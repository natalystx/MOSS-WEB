"use client";

import { cn } from "@/utils/cn";
import React from "react";

export enum BUTTON_COLOR {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
}

type ButtonProps = {
  color?: BUTTON_COLOR;
  className?: string;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = ({
  color = BUTTON_COLOR.PRIMARY,
  className,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      className={cn(
        "px-6 py-2 h-[50px] rounded-lg text-primary text-base font-semibold text-center",
        { "bg-white hover:bg-gray-100": color === BUTTON_COLOR.PRIMARY },
        {
          "bg-white/70 hover:bg-gray-100/70": color === BUTTON_COLOR.SECONDARY,
        },
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
