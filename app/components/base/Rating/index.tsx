import { cn } from "@/utils/cn";
import React from "react";
import Icon from "../Icon";
import { IconEnum } from "../Icon/viewmodel";

type RatingProps = {
  rating?: number;
  className?: string;
};

const Rating = ({ rating = 5, className }: RatingProps) => {
  return (
    <div className={cn("flex items-center gap-x-0.5", className)}>
      {new Array(rating).fill(null).map((_, index) => (
        <Icon
          icon={IconEnum.STAR}
          className="size-2 text-surfaceBrown 2xl:size-4"
          key={`star-${index}`}
        />
      ))}
    </div>
  );
};

export default Rating;
