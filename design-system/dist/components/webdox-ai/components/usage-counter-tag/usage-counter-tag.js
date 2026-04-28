import { jsx as p } from "react/jsx-runtime";
import { Tag as m } from "../../../tag/next/tag.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as d } from "../../../utils/i18n/utils.js";
const l = {
  exhausted: "negative",
  low: "warning",
  active: "positive",
  unlimited: "positive"
}, h = ({
  dataTestId: i,
  icon: o,
  usageStatus: t,
  remainingRequests: r,
  totalRequests: n
}) => {
  const { t: e } = d(), a = t ? l[t] : "neutral";
  return /* @__PURE__ */ p(
    m,
    {
      "data-testid": `${i}__counter-tag`,
      kind: a,
      variant: "outlined",
      icon: o,
      children: t === "unlimited" ? e("webdoxAI.planUsage.popovers.planTrial.unlimitedTitle") : `${r}/${n}`
    }
  );
};
export {
  h as UsageCounterTag
};
//# sourceMappingURL=usage-counter-tag.js.map
