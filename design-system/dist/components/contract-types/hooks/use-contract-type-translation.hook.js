import { useTranslation as o } from "react-i18next";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import { CONTRACT_TYPE_NAMESPACE as r } from "../../utils/i18n/i18n.constants.js";
const C = () => o(r);
export {
  C as useContractTypeTranslation
};
//# sourceMappingURL=use-contract-type-translation.hook.js.map
