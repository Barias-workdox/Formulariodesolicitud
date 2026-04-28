import { jsx as e } from "react/jsx-runtime";
import { Close as d, ChevronDown as l } from "@carbon/icons-react";
import { themedStyled as c } from "../../../themes/utilities.js";
const s = c(
  "span",
  ({ $disabled: o }) => ({
    height: "100%",
    alignItems: "center",
    background: "none",
    border: "none",
    outline: "none",
    boxShadow: "none",
    padding: 0,
    color: "inherit",
    display: "flex",
    cursor: "pointer",
    ...o && {
      cursor: "not-allowed"
    }
  })
), u = ({
  "data-testid": o,
  isActive: r,
  disabled: t,
  onClear: a
}) => {
  const i = (n) => {
    n.stopPropagation(), a();
  };
  return r ? /* @__PURE__ */ e(
    s,
    {
      "data-testid": `${o}-clear`,
      $disabled: t,
      role: "button",
      onClick: t ? void 0 : (n) => i(n),
      children: /* @__PURE__ */ e(d, {})
    }
  ) : /* @__PURE__ */ e(l, { "data-testid": `${o}-chevron` });
};
export {
  u as FilterEndEnhancer
};
//# sourceMappingURL=filter-end-enhancer.js.map
