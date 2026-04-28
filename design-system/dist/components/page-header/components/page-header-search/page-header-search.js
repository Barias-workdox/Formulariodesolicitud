import { jsx as r, jsxs as i, Fragment as p } from "react/jsx-runtime";
import { useState as s } from "react";
import { SuggestionInput as c } from "../../../suggestion-input/suggestion-input.js";
import { noop as d } from "../../../../utils/noop.js";
import { SearchIconButtonWithModal as h } from "../search-icon-button-with-modal/search-icon-button-with-modal.js";
import { MobileStyledWrapper as m, DesktopStyledWrapper as l } from "./page-header-search.styles.js";
function f(e) {
  return /* @__PURE__ */ r(m, { children: /* @__PURE__ */ r(h, { ...e }) });
}
function u({
  onIsOpenChange: e = d,
  ...o
}) {
  const [t, a] = s(!1);
  return /* @__PURE__ */ r(l, { $isOpen: t, children: /* @__PURE__ */ r(
    c,
    {
      ...o,
      delayRenderContent: 250,
      onIsOpenChange: (n) => {
        a(n), e(n);
      }
    }
  ) });
}
function M(e) {
  return /* @__PURE__ */ i(p, { children: [
    /* @__PURE__ */ r(f, { ...e }),
    /* @__PURE__ */ r(u, { ...e })
  ] });
}
export {
  u as DesktopPageHeaderSearch,
  f as MobilePageHeaderSearch,
  M as PageHeaderSearch
};
//# sourceMappingURL=page-header-search.js.map
