import { jsxs as a, jsx as o } from "react/jsx-runtime";
import { forwardRef as l } from "react";
import { StyledDropdownContainer as c } from "baseui/select";
import { Text as d } from "../../../text/text.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as g } from "../../../utils/i18n/utils.js";
import { useCss as f } from "../../../utils/hooks/use-css.js";
const u = {
  rootStyles: (r) => ({
    backgroundColor: r.colors.bgBase
  })
}, B = l(function(t, e) {
  const { t: s } = g(), { theme: i, rootStyles: m } = f(u), { children: { props: { items: { __ungrouped: n = [] } = {} } = {} } = {} } = t, p = n.length === 1 && n[0].isCreatable;
  return /* @__PURE__ */ a("div", { ref: e, children: [
    p && /* @__PURE__ */ o("div", { className: m, children: /* @__PURE__ */ o(
      d,
      {
        variant: "bodySmall",
        margin: 0,
        padding: `${i.spacing.spacingSm} ${i.spacing.spacingMd}`,
        color: "neutralSubdued",
        children: s("general.empty2")
      }
    ) }),
    /* @__PURE__ */ o(c, { ...t })
  ] });
});
export {
  B as SelectDropdownContainer
};
//# sourceMappingURL=select-dropdown-container.js.map
