import { useMemo as r } from "react";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as m } from "../../../utils/i18n/utils.js";
import { linkValidationSchema as n } from "../link.validation.js";
const V = () => {
  const { t: o } = m(), i = r(() => o("forms.validations.noLink"), [o]);
  return {
    containsLinkErrorMessage: i,
    linkValidationSchema: (t) => n({ ...t, containsLinkErrorMessage: i })
  };
};
export {
  V as useLinkValidation
};
//# sourceMappingURL=use-link-validation.js.map
