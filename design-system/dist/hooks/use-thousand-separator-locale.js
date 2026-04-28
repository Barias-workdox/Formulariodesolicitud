import { useLocale as a } from "../contexts/locale-provider/locale-provider.js";
const r = {
  base: ",",
  es: ".",
  en: ",",
  pt: "."
}, s = (e) => {
  const { locale: o } = a();
  return e.toLocaleString().replace(/,/g, r[o]);
};
export {
  s as useThousandSeparatorLocale
};
//# sourceMappingURL=use-thousand-separator-locale.js.map
