import { jsxs as S, jsx as E } from "react/jsx-runtime";
import { useCallback as T, useMemo as _ } from "react";
import { LABEL_PLACEMENT as j, Checkbox as v, STYLE_TYPE as A } from "baseui/checkbox";
import { SwitchDescription as M } from "./components/switch-description.js";
import { SwitchTitle as N } from "./components/switch-title.js";
import { switchOverrides as O } from "./switch.styles.js";
const G = ({
  dataTestId: m = "switch",
  description: f,
  checked: r = !1,
  title: s,
  disabled: o = !1,
  labelPlacement: i = j.right,
  variant: w = "16px",
  ariaLabel: u,
  ariaLabelledBy: x = "switch-label",
  ariaDescribedBy: p = "switch-description",
  onChange: t
}) => {
  const h = u || s, c = T(() => {
    o || t == null || t(!r);
  }, [r, o, t]), L = _(
    () => O({
      checked: r,
      disabled: o,
      handleToggle: c,
      ariaDescribedBy: p,
      ariaLabelledBy: x,
      ariaLabel: h,
      dataTestId: m,
      labelPlacement: i
    }),
    [
      r,
      o,
      c,
      p,
      x,
      h,
      m,
      i
    ]
  );
  return /* @__PURE__ */ S(
    v,
    {
      "data-testid": m,
      checked: r,
      disabled: o,
      labelPlacement: i,
      checkmarkType: A.toggle_round,
      overrides: L,
      onChange: c,
      children: [
        s && /* @__PURE__ */ E(
          N,
          {
            title: s,
            variant: w,
            disabled: o
          }
        ),
        f && /* @__PURE__ */ E(
          M,
          {
            description: f,
            variant: w,
            disabled: o,
            ariaDescribedBy: p
          }
        )
      ]
    }
  );
};
export {
  G as Switch
};
//# sourceMappingURL=switch.js.map
