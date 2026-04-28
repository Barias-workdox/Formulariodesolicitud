import { jsx as r } from "react/jsx-runtime";
import { Text as t } from "../../../text/text.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as i } from "../../../utils/i18n/utils.js";
import { StyledContainer as m, StyledInner as n } from "./group-resolutions.styles.js";
const S = () => {
  const { t: o } = i();
  return /* @__PURE__ */ r(m, { children: /* @__PURE__ */ r(n, { children: /* @__PURE__ */ r(
    t,
    {
      variant: "bodySmall",
      margin: 0,
      children: o("decisionTree.then")
    }
  ) }) });
};
export {
  S as GroupResolutions
};
//# sourceMappingURL=group-resolutions.js.map
