import { jsx as u } from "react/jsx-runtime";
import { forwardRef as a, useMemo as c } from "react";
import { Button as v } from "baseui/button";
import { mergeOverridesDeep as B } from "../utils/baseui/helpers.js";
import { getOverrides as O } from "./button.styles.js";
const D = a(function({
  "data-testid": e,
  dataTestId: o,
  paddingLeft: m,
  paddingRight: n,
  fullWidth: s,
  overrides: t,
  responsive: i,
  ...d
}, f) {
  const r = O({
    "data-testid": e || o,
    paddingLeft: m,
    paddingRight: n,
    fullWidth: s,
    responsive: i
  }), p = c(
    () => B(r, t),
    [r, t]
  );
  return /* @__PURE__ */ u(
    v,
    {
      ref: f,
      type: "button",
      overrides: p,
      ...d
    }
  );
});
export {
  D as Button
};
//# sourceMappingURL=button.js.map
