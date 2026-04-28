import { jsx as t, Fragment as p } from "react/jsx-runtime";
import { StatefulTooltipNext as i } from "../../../tooltip-next/stateful-tooltip-next/stateful-tooltip-next.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as n } from "../../../utils/i18n/utils.js";
const b = ({
  children: o,
  isBlocked: r,
  zIndex: e
}) => {
  const { t: m } = n();
  return r ? /* @__PURE__ */ t(
    i,
    {
      content: m("webdoxAI.chat.blockedFeatureInfo"),
      showArrow: !0,
      placement: "top",
      zIndex: e,
      children: /* @__PURE__ */ t("div", { children: o })
    }
  ) : /* @__PURE__ */ t(p, { children: o });
};
export {
  b as BlockedFeatureTooltip
};
//# sourceMappingURL=blocked-feature-tooltip.js.map
