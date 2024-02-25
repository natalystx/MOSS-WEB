export const fallbackLng = "nl";
export const languages = [fallbackLng];
export const cookieName = "lang";

export function getOptions(lng = fallbackLng) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
  };
}
