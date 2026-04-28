import { jsxs as f, jsx as e } from "react/jsx-runtime";
import { TruncatedText as p } from "../../../../../truncated-text/truncated-text.js";
import { ItemLabelCounter as d } from "../item-label-counter/item-label-counter.js";
import { getItemLabelTextStyles as c, StyledRoot as x, StyledLabelContainer as y } from "./item-label.styles.js";
const T = ({
  "data-testid": a = "item-label",
  counter: o,
  disabled: r = !1,
  isActive: n = !1,
  isSelected: m = !1,
  label: t,
  startEnhancer: i
}) => {
  const { color: s, fontWeight: l } = c({ disabled: r, isActive: n, isSelected: m });
  return /* @__PURE__ */ f(x, { children: [
    i,
    t && /* @__PURE__ */ e(y, { children: typeof t == "string" ? /* @__PURE__ */ e(
      p,
      {
        tooltipProps: {
          content: t,
          placement: "left"
        },
        textProps: {
          variant: "bodySmall",
          margin: 0,
          fontWeight: l,
          color: s
        },
        children: t
      }
    ) : t }),
    o !== void 0 && /* @__PURE__ */ e(
      d,
      {
        dataTestId: `${a}__counter`,
        isActive: n || m,
        disabled: r,
        counter: o
      }
    )
  ] });
};
export {
  T as ItemLabel
};
//# sourceMappingURL=item-label.js.map
