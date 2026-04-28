import { useLocale as c } from "../../../contexts/locale-provider/locale-provider.js";
const i = (t) => {
  const { locale: o } = c(), e = t.split("."), n = e.slice(0, e.length - 1).join("."), s = e[e.length - 1];
  return `${n}_${o ?? "es"}.${s}`;
};
export {
  i as useImageWithLocale
};
//# sourceMappingURL=use-image-with-locale.js.map
