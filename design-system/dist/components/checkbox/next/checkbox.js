import { jsxs as g, Fragment as T, jsx as p } from "react/jsx-runtime";
import { useState as _, useCallback as x, useMemo as c } from "react";
import { mergeOverrides as b } from "baseui";
import { Checkbox as k, LABEL_PLACEMENT as D } from "baseui/checkbox";
import { DEFAULT_DATA_TEST_ID as I, DEFAULT_SIZE as O } from "./checkbox.constants.js";
import { getCheckboxBaseOverrides as S } from "./checkbox.overrides.js";
import { StyledRequiredIndicator as F } from "./checkbox.styles.js";
const R = ({
  "data-testid": v,
  dataTestId: i = v ?? I,
  size: f = O,
  label: e,
  checked: o,
  indeterminate: r = !1,
  disabled: t = !1,
  required: s = !1,
  error: n = !1,
  value: C = "on",
  onChange: L,
  overrides: a,
  ...d
}) => {
  const [l, u] = _(!1), h = x(() => {
    u(!0);
  }, []), E = x(() => {
    u(!1);
  }, []), m = c(
    () => S({
      size: f,
      isHovered: l,
      checked: o,
      indeterminate: r,
      disabled: t,
      error: n,
      dataTestId: i,
      onMouseEnter: h,
      onMouseLeave: E
    }),
    [
      f,
      l,
      o,
      r,
      t,
      n,
      i,
      h,
      E
    ]
  ), A = c(
    () => a ? b(m, a) : m,
    [m, a]
  ), M = c(() => e ? s ? /* @__PURE__ */ g(T, { children: [
    e,
    /* @__PURE__ */ p(F, { children: "*" })
  ] }) : e : null, [e, s]);
  return /* @__PURE__ */ p(
    k,
    {
      ...d,
      checked: o,
      isIndeterminate: r,
      disabled: t,
      error: n,
      value: C,
      onChange: L,
      labelPlacement: D.right,
      overrides: A,
      "aria-label": e || "checkbox",
      "aria-required": s,
      children: M
    }
  );
};
export {
  R as Checkbox
};
//# sourceMappingURL=checkbox.js.map
