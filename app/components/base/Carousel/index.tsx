"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { forwardRef, useEffect, useMemo, useRef, useState } from "react";
import Slider from "react-slick";
import { css } from "@emotion/css";
import { cn } from "@/utils/cn";
import Icon from "../Icon";
import { IconEnum } from "../Icon/viewmodel";
import { useMediaSize } from "@/hooks/useMediaSize";

type CarouselProps = {
  children: React.ReactNode;
  slidesToShow?: number;
  gap?: string;
  className?: string;
  carouselClassName?: string;
  dotsWrapperClassName?: string;
  slideHight?: string;
  wrapperClassName?: string;
  setActiveIndex?: (index: number) => void;
  onSwipe?: (direction?: string) => void;
  infinite?: boolean;
  centerMode?: boolean;
  autoPlay?: boolean;
};

const DummyButton = forwardRef<HTMLButtonElement, any>(
  ({ slideCount, onClick }, ref) => {
    return (
      <button
        ref={ref}
        aria-hidden="true"
        aria-disabled={slideCount === 0 ? true : false}
        onClick={onClick}
        className="absolute"
      ></button>
    );
  }
);
DummyButton.displayName = "DummyButton";

const Carousel = ({
  slidesToShow,
  children,
  gap,
  className,
  carouselClassName,
  dotsWrapperClassName,
  slideHight,
  wrapperClassName,
  onSwipe,
  infinite,
  centerMode,
  autoPlay,
}: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { isMobile, isDesktop, isTablet } = useMediaSize();
  const nextButton = useRef<HTMLButtonElement>(null);
  const prevButton = useRef<HTMLButtonElement>(null);
  const ref = useRef<any>();

    useEffect(() => {
      ref.current?.innerSlider?.resizeWindow();
    }, [isMobile, isDesktop, isTablet]);

  const settings = useMemo(
    () => ({
      dots: true,
      infinite: infinite ?? true,
      speed: 500,
      slidesToShow: slidesToShow || 1,
      slidesToScroll: 1,
      autoplay: autoPlay,
      className: cn(
        "slider variable-width",
        css`
          .slick-list > {
            .slick-track {               
              column-gap: ${gap || "0px"};        
              > div {                        
                height: ${slideHight || "526px"};
                      
                &:focus{
                  border: 0px !important;
                }
                 > div{    
                 
                  ${
                    centerMode &&
                    `
                  display: flex;
                  justify-content: center;
                  `
                  }                  
                  overflow: hidden;
                 }
              }
            }
          }
        }
      `,
        className
      ),

      appendDots: (dots: any) => (
        <div>
          <ul
            className={cn(
              dotsWrapperClassName,
              css`
                max-height: 0px;
              `
            )}
          >
            {dots}
          </ul>
        </div>
      ),
      customPaging: () => <div className="h-1 w-full bg-transparent"></div>,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      className,
      dotsWrapperClassName,
      gap,
      slideHight,
      slidesToShow,
      infinite,
      isMobile,
    ]
  );

  return (
    <div className={cn("flex w-full flex-col gap-y-8", wrapperClassName)}>
      <Slider
        {...settings}
        ref={ref}
        className={cn(settings.className, carouselClassName)}
        nextArrow={<DummyButton ref={nextButton} />}
        variableWidth
        onSwipe={onSwipe}
        afterChange={setActiveIndex}
        prevArrow={<DummyButton ref={prevButton} />}
      >
        {children}
      </Slider>
      <div className="flex mt-6 px-4 justify-end items-center sm:mt-10 sm:px-8">
        <div className="flex gap-x-8 items-center">
          <p className="text-primary text-sm">
            {activeIndex + 1}{" "}
            <span className="text-secondary">
              / {React.Children.toArray(children).length}
            </span>
          </p>
          <div className="flex gap-x-4">
            <button
              onClick={() => {
                prevButton.current?.click();
              }}
            >
              <Icon
                icon={IconEnum.ARROW_RIGHT}
                className="text-primary size-10 hover:text-primary/70"
              />
            </button>
            <button
              className="rotate-180"
              onClick={() => {
                nextButton.current?.click();
              }}
            >
              <Icon
                icon={IconEnum.ARROW_RIGHT}
                className="text-primary size-10 hover:text-primary/70"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
