import { useTranslation as o } from "react-i18next";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import { COUNTRIES_NAMESPACE as r } from "./i18n.constants.js";
const C = () => o(r);
export {
  C as useCountriesTranslation
};
//# sourceMappingURL=use-countries-translation.i18n.js.map
