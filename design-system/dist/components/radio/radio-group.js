import { jsx as e } from "react/jsx-runtime";
import { forwardRef as g, useMemo as G } from "react";
import { RadioGroup as $, ALIGN as h } from "baseui/radio";
import { ALIGN as q } from "baseui/radio";
import { mergeOverridesDeep as l } from "../utils/baseui/helpers.js";
import { Radio as _ } from "./radio.js";
import { getRadioGroupOverrides as x } from "./radio-group.styles.js";
const D = g(function({
  "data-testid": i = "design-system__radio-group--component",
  options: d,
  valueKey: o = "id",
  labelKey: p = "label",
  align: f = h.vertical,
  className: c,
  children: n,
  rowGap: m,
  columnGap: t,
  overrides: { Radio: R, ...s } = {},
  ...v
}, a) {
  const u = G(
    () => l(x({ rowGap: m, columnGap: t, dataTestId: i, ref: a }), s),
    [m, t, i, a, s]
  );
  return /* @__PURE__ */ e("div", { className: c, children: /* @__PURE__ */ e(
    $,
    {
      overrides: u,
      align: f,
      ...v,
      children: d !== void 0 ? d.map((r) => /* @__PURE__ */ e(
        _,
        {
          "data-testid": `${i}__radio-${r[o]}`,
          value: r[o],
          overrides: R,
          children: /* @__PURE__ */ e("div", { "data-testid": `${i}-radio-item-${r[o]}`, children: r[p] })
        },
        r[o]
      )) : n
    }
  ) });
});
export {
  q as ALIGN,
  D as RadioGroup
};
//# sourceMappingURL=radio-group.js.map
