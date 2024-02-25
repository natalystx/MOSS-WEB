import { usePopover } from "@/hooks/usePopover";
import { Placement } from "@popperjs/core";
import { Fragment } from "react";
import Marker from "../../base/Marker";
import ProductCard from "../../base/ProductCard";
import { StaticImageData } from "next/image";
import { cn } from "@/utils/cn";

type Product = {
  image: string | StaticImageData;
  name: string;
  price: string;
};

type MarkerWithCardProps = {
  className: string;
  offset?: [number | null, number | null];
  placement?: Placement;
  product: Product;
};

const MarkerWithCard = ({
  className,
  offset,
  placement,
  product,
}: MarkerWithCardProps) => {
  const {
    setIsOpen,
    isOpen,
    setPopperElement,
    setRefElement,
    attributes,
    styles,
  } = usePopover({
    offset: offset || [190, 50],
    placement: placement,
  });
  return (
    <Fragment>
      <div
        className={cn(!isOpen && "invisible", "z-40")}
        ref={setPopperElement}
        {...attributes.popper}
        style={{ ...styles.popper }}
      >
        <ProductCard
          image={product.image}
          name={product.name}
          price={product.price}
          className="w-[220px] h-[276px]"
        />
      </div>
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        ref={setRefElement}
      >
        <Marker className={className} />
      </div>
    </Fragment>
  );
};

export default MarkerWithCard;
