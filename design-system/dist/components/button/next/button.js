import { jsx as G } from "react/jsx-runtime";
import { useMemo as n } from "react";
import { Button as I } from "baseui/button";
import { ariaKeyDownHandler as N } from "../../utils/accessibility.utils.js";
import { mergeOverridesDeep as $ } from "../../utils/baseui/helpers.js";
import { COMMON_HEIGHT_44 as l } from "../../../constants/common.constants.js";
import { getAriaProps as q, renderEnhancer as a } from "./button.utils.js";
import { getOverrides as D } from "./styles/button.styles.js";
const X = ({
  dataTestId: u = "button",
  kind: m = "brand",
  appearance: v = "filled",
  type: h = "button",
  fullWidth: c = !1,
  disabled: r = !1,
  isLoading: t = !1,
  size: e = l,
  startEnhancer: s,
  endEnhancer: O,
  children: x,
  overrides: B,
  onClick: f,
  onKeyDown: p,
  ...E
}) => {
  const H = r || t, M = n(
    () => D({ kind: m, appearance: v, size: e, fullWidth: c, disabled: r, isLoading: t, dataTestId: u }),
    [m, v, e, c, r, t, u]
  ), _ = n(
    () => $(M, B),
    [M, B]
  ), j = n(() => q(t, r), [t, r]), P = (o) => {
    H || f == null || f(o);
  }, A = (o) => {
    H || (p == null || p(o), o.defaultPrevented || N(
      () => P(o)
    )(o));
  };
  return /* @__PURE__ */ G(
    I,
    {
      isLoading: t,
      disabled: r,
      type: h,
      kind: m,
      size: e,
      overrides: _,
      startEnhancer: s ? a(s, e) : void 0,
      endEnhancer: O ? a(O, e) : void 0,
      onClick: P,
      onKeyDown: A,
      ...j,
      ...E,
      children: x
    }
  );
};
export {
  X as Button
};
//# sourceMappingURL=button.js.map
