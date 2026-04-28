import { jsx as o, jsxs as x, Fragment as O } from "react/jsx-runtime";
import _, { forwardRef as b, useState as w } from "react";
import { BackgroundIcon as A } from "../../../background-icon/background-icon.js";
import { Text as N } from "../../../text/text.js";
import { SIZE_MAPPING as P, ICON_SIZE_MAPPING as c } from "./account-menu-button.constants.js";
import { getBackgroundIconOverrides as $, textOverrides as H } from "./account-menu-button.overrides.js";
import { StyledAccountMenuButton as K, StyledEndEnhancer as j } from "./account-menu-button.styles.js";
const f = (e, r) => _.isValidElement(e) ? e : /* @__PURE__ */ o(e, { size: r }), G = b(
  ({
    startEnhancer: e,
    text: r,
    endEnhancer: a,
    onClick: n,
    isActive: s = !1,
    isDisabled: t = !1,
    isTriggerButton: m = !1,
    variant: d = "large",
    ariaLabel: p,
    role: h = "button",
    dataRole: M,
    ariaHasPopup: y,
    ariaExpanded: I,
    ariaControls: g,
    tabIndex: v = 0,
    ariaSelected: B
  }, E) => {
    const [S, u] = w(!1);
    return /* @__PURE__ */ o(
      K,
      {
        ref: E,
        type: "button",
        onClick: n,
        onKeyDown: (l) => {
          if (t) return;
          const { key: i } = l;
          (i === "Enter" || i === " ") && (l.preventDefault(), n == null || n());
        },
        disabled: t,
        onMouseOver: () => {
          u(!0);
        },
        onMouseOut: () => {
          u(!1);
        },
        $isActive: s,
        $isHovered: S,
        $isDisabled: t,
        $isTriggerButton: m,
        role: h,
        "aria-label": p,
        "aria-haspopup": y,
        "aria-expanded": I,
        "aria-controls": g,
        "aria-selected": B,
        tabIndex: t ? -1 : v,
        "data-role": M,
        "aria-disabled": t,
        "aria-pressed": s,
        children: /* @__PURE__ */ x(O, { children: [
          /* @__PURE__ */ o(
            A,
            {
              shape: "square",
              size: P[d],
              overrides: $({ isActive: s }),
              children: f(e, c[d])
            }
          ),
          typeof r == "string" ? /* @__PURE__ */ o(
            N,
            {
              variant: "bodySmall",
              overrides: H,
              children: r
            }
          ) : r,
          a && /* @__PURE__ */ o(j, { children: f(a, c[d]) })
        ] })
      }
    );
  }
);
G.displayName = "AccountMenuButton";
export {
  G as AccountMenuButton
};
//# sourceMappingURL=account-menu-button.js.map
