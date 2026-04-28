import { jsx as r } from "react/jsx-runtime";
import { useState as d } from "react";
import { noop as p } from "../../../../utils/noop.js";
import { ItemLabel as F } from "./components/item-label/item-label.js";
import { StyledLink as $ } from "./menu-item.styles.js";
const L = ({
  "data-testid": o = "menu-item",
  counter: s,
  disabled: t = !1,
  label: n,
  size: m = "default",
  startEnhancer: i,
  href: u = "#",
  onClick: a
}) => {
  const [c, e] = d(!1), l = () => {
    t || e(!0);
  }, f = () => e(!1);
  return /* @__PURE__ */ r(
    $,
    {
      to: u,
      $disabled: t,
      $isFocused: c,
      $size: m,
      "data-testid": `${o}--root`,
      tabIndex: t ? -1 : 0,
      onBlur: f,
      onFocus: l,
      onClick: t ? p : a,
      children: /* @__PURE__ */ r(
        F,
        {
          "data-testid": `${o}_label`,
          counter: s,
          disabled: t,
          label: n,
          startEnhancer: i
        }
      )
    }
  );
};
export {
  L as MenuItem
};
//# sourceMappingURL=menu-item.js.map
