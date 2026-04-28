import { jsxs as n, jsx as t } from "react/jsx-runtime";
import { Checkbox as x, STYLE_TYPE as L, LABEL_PLACEMENT as S } from "baseui/checkbox";
import { LABEL_PLACEMENT as C, STYLE_TYPE as M } from "baseui/checkbox";
import { useSyncedRef as u } from "../../hooks/use-synced-ref.hook.js";
import { Spinner as y } from "../spinner/spinner.js";
import { Text as T } from "../text/text.js";
import { useCss as v } from "../utils/hooks/use-css.js";
import { styles as _, checkboxOverridesStyles as A } from "./switch.styles.js";
const k = ({
  "data-testid": s = "design-system-switch",
  name: l,
  inputRef: a,
  description: i,
  checked: e = !1,
  children: d,
  loading: o = !1,
  disabled: m = !1,
  labelPlacement: f = S.right,
  onChange: r
}) => {
  const { theme: c, containerStyles: p } = v(_), E = u({ externalRef: a }), h = () => r == null ? void 0 : r(!e);
  return /* @__PURE__ */ n(
    "div",
    {
      "data-testid": s,
      className: p,
      children: [
        o && /* @__PURE__ */ t("div", { "data-testid": `${s}--spinner`, children: /* @__PURE__ */ t(y, { size: "sm" }) }),
        /* @__PURE__ */ n(
          x,
          {
            checked: e,
            disabled: m || o,
            name: l,
            inputRef: E,
            labelPlacement: f,
            checkmarkType: L.toggle_round,
            overrides: A(c, e, m),
            onChange: h,
            children: [
              d,
              i !== void 0 && /* @__PURE__ */ t(
                T,
                {
                  variant: "bodySmall",
                  margin: 0,
                  color: "neutralDepressed",
                  children: i
                }
              )
            ]
          }
        )
      ]
    }
  );
};
export {
  C as LABEL_PLACEMENT,
  M as STYLE_TYPE,
  k as Switch
};
//# sourceMappingURL=switch.js.map
