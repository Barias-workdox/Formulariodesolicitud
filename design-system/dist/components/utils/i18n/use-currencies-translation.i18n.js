import { useTranslation as r } from "react-i18next";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import { CURRENCIES_NAMESPACE as o } from "./i18n.constants.js";
const E = () => r(o);
export {
  E as useCurrenciesTranslation
};
//# sourceMappingURL=use-currencies-translation.i18n.js.map
