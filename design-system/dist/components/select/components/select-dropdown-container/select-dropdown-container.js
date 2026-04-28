import { jsxs as s, jsx as o } from "react/jsx-runtime";
import { forwardRef as a } from "react";
import { StyledDropdownContainer as d } from "baseui/select";
import { Text as c } from "../../../text/text.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as l } from "../../../utils/i18n/utils.js";
import { useCss as f } from "../../../utils/hooks/use-css.js";
const B = a(function(r, n) {
  const { t: e } = l(), { theme: t, css: m } = f(), { children: { props: { items: { __ungrouped: i = [] } = {} } = {} } = {} } = r, p = i.length === 1 && i[0].isCreatable;
  return /* @__PURE__ */ s("div", { ref: n, children: [
    p && /* @__PURE__ */ o(
      "div",
      {
        className: m({
          backgroundColor: t.colors.bgBase
        }),
        children: /* @__PURE__ */ o(
          c,
          {
            variant: "bodySmall",
            margin: 0,
            padding: t.spacing.spacingMd,
            color: "neutralSubdued",
            children: e("general.empty2")
          }
        )
      }
    ),
    /* @__PURE__ */ o(d, { ...r })
  ] });
});
export {
  B as SelectDropdownContainer
};
//# sourceMappingURL=select-dropdown-container.js.map
