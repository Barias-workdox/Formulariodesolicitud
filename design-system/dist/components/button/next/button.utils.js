import { jsx as a } from "react/jsx-runtime";
import { ENHANCER_SIZE as r } from "./button.constants.js";
import { contrastGhost as d, contrastOutlined as s, contrastFilled as n, negativeFilled as e, positiveFilled as o, neutralGhost as u, neutralOutlined as c, neutralTonal as h, neutralFilled as f, brandGhost as g, brandOutlined as b, brandTonal as p, brandFilled as m } from "./styles/button.variants.js";
const v = {
  brand: {
    filled: m,
    tonal: p,
    outlined: b,
    ghost: g
  },
  neutral: {
    filled: f,
    tonal: h,
    outlined: c,
    ghost: u
  },
  positive: {
    filled: o,
    tonal: o,
    outlined: o,
    ghost: o
  },
  negative: {
    filled: e,
    tonal: e,
    outlined: e,
    ghost: e
  },
  contrast: {
    filled: n,
    tonal: n,
    outlined: s,
    ghost: d
  }
}, G = (t, l = "brand", i = "filled") => v[l][i](t.colors), N = (t, l) => ({
  ...t && { "aria-busy": !0, "aria-live": "polite" },
  ...l && { "aria-disabled": !0 }
}), O = (t, l) => /* @__PURE__ */ a(
  t,
  {
    "aria-hidden": "true",
    size: r[l]
  }
);
export {
  N as getAriaProps,
  G as getButtonStyles,
  O as renderEnhancer
};
//# sourceMappingURL=button.utils.js.map
