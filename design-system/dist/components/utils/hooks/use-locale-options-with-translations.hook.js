import { useMemo as i } from "react";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { allLocaleOptions as m } from "../i18n/i18n.constants.js";
import { useTranslation as p } from "../i18n/utils.js";
const d = () => {
  const { t: o } = p();
  return { options: i(
    () => m.map((t) => {
      const { id: r } = t;
      return { ...t, label: o(`locales.${r}`) };
    }),
    [o]
  ) };
};
export {
  d as useLocaleOptionsWithTranslations
};
//# sourceMappingURL=use-locale-options-with-translations.hook.js.map
