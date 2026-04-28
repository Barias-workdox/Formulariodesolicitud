import { jsx as o } from "react/jsx-runtime";
import { forwardRef as a } from "react";
import { Checkbox as h, LABEL_PLACEMENT as p } from "baseui/checkbox";
import { useSyncedRef as b } from "../../hooks/use-synced-ref.hook.js";
import { checkboxOverridesStyles as d } from "./checkbox.styles.js";
const y = a(function({
  "data-testid": r = "design-system__checkbox--component",
  id: t,
  labelPlacement: c = p.right,
  children: i,
  className: n,
  labelAsFormControl: m = !1,
  overrides: e = {},
  ...f
}, s) {
  const x = b({ externalRef: s });
  return /* @__PURE__ */ o("div", { className: n, children: /* @__PURE__ */ o(
    h,
    {
      ...f,
      ...e,
      id: t,
      labelPlacement: c,
      ariaLabel: "checkbox",
      inputRef: x,
      overrides: d({ dataTestId: r, labelAsFormControl: m, overrides: e }),
      children: i
    }
  ) });
});
export {
  y as Checkbox
};
//# sourceMappingURL=checkbox.js.map
