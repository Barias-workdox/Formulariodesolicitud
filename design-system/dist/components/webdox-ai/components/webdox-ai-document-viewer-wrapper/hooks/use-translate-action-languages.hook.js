import { useLocaleOptionsWithTranslations as r } from "../../../../utils/hooks/use-locale-options-with-translations.hook.js";
import { useLocale as a } from "../../../../../contexts/locale-provider/locale-provider.js";
const u = () => {
  const { options: s } = r(), { locale: l } = a(), n = s.sort((e, o) => e.label < o.label ? -1 : e.label > o.label ? 1 : 0), t = n.findIndex((e) => e.id === l);
  if (t !== -1) {
    const [e] = n.splice(t, 1);
    n.unshift(e);
  }
  return {
    languages: n
  };
};
export {
  u as useTranslateActionLanguages
};
//# sourceMappingURL=use-translate-action-languages.hook.js.map
