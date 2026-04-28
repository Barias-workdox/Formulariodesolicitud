import { jsx as r } from "react/jsx-runtime";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as m } from "../../../../utils/i18n/utils.js";
import { SimpleText as p } from "./simple-text.js";
const u = ({ value: o }) => {
  const { t } = m();
  return /* @__PURE__ */ r(p, { value: typeof o == "boolean" ? t(`boolean.${o}`) : "--" });
};
export {
  u as BooleanText
};
//# sourceMappingURL=boolean-text.js.map
