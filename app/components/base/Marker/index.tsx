import { cn } from "@/utils/cn";
import React from "react";

type MarkerProps = {
  className?: string;
};

const Marker = ({ className }: MarkerProps) => {
  return (
    <div
      className={cn(
        "size-6 rounded-full border border-white flex justify-center items-center cursor-pointer hover:scale-[110%] transition-transform duration-300",
        className
      )}
    >
      <div className="size-4 rounded-full bg-white" />
    </div>
  );
};

export default Marker;
