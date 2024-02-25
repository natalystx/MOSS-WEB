import { useMedia } from "react-use";

export const useMediaSize = () => {
  const isMobile = useMedia("(max-width: 639px)", false);
  const isTablet = useMedia(
    "(min-width: 640px) and (max-width: 1365px)",
    false
  );
  const isDesktop = useMedia("(min-width: 1366px)", false);

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
};
