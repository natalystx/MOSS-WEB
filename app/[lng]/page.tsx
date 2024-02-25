import HeroSection from "../components/modules/HeroSection";
import ProductCarouselSection from "../components/modules/ProductCarouselSection";
import { LangProps } from "../i18n/type";

export default function Home({ params: { lng } }: LangProps) {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection.Mobile lng={lng} className="mb-10 sm:hidden" />
      <HeroSection.Tablet className="hidden sm:flex 2xl:hidden mb-16" />
      <HeroSection.Desktop className="hidden 2xl:flex mb-24" />
      <ProductCarouselSection className="mb-10 sm:mb-16 2xl:mb-24 2xl:mx-auto 2xl:max-w-[1424px]" />
    </div>
  );
}
