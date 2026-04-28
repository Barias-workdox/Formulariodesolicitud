import { jsxs as s, jsx as e } from "react/jsx-runtime";
import { Information as u } from "@carbon/icons-react";
import { REQUIRED_FIELD_INDICATOR as y } from "../../form-control.constants.js";
import { Text as r } from "../../../text/text.js";
import { StatefulTooltipNext as v } from "../../../tooltip-next/stateful-tooltip-next/stateful-tooltip-next.js";
import { useCss as C } from "../../../utils/hooks/use-css.js";
import { styles as I, labelFontStyle as n } from "./form-control-label.styles.js";
const E = ({
  label: i,
  showCharacterCounter: m,
  maxLength: t,
  currentCharactersQuantity: l,
  infoTooltip: a,
  zIndex: c,
  required: d
}) => {
  const { theme: o, customLabelContainerStyles: h, infoTooltipWrapperStyles: p, labelTextContainerStyles: f } = C(I), b = m && (t && l) !== void 0;
  return /* @__PURE__ */ s("div", { className: h, children: [
    /* @__PURE__ */ s("div", { className: f, children: [
      /* @__PURE__ */ e(
        r,
        {
          variant: "body",
          $style: n({
            $theme: o,
            labelWithHorizontalPadding: !1,
            hasMargin: !1
          }),
          as: "span",
          children: i
        }
      ),
      d && /* @__PURE__ */ e(
        r,
        {
          variant: "h2",
          margin: 0,
          color: "neutral",
          as: "span",
          children: y
        }
      ),
      a && /* @__PURE__ */ e(
        v,
        {
          placement: "auto",
          showArrow: !0,
          content: a,
          zIndex: c,
          children: /* @__PURE__ */ e("div", { className: p, children: /* @__PURE__ */ e(
            u,
            {
              title: "Info",
              size: 16,
              color: o.colors.brand
            }
          ) })
        }
      )
    ] }),
    b && /* @__PURE__ */ e(
      r,
      {
        variant: "body",
        $style: {
          ...n({ $theme: o, isCharacterLabel: !0 })
        },
        children: `${l} / ${t}`
      }
    )
  ] });
};
export {
  E as FormControlLabel
};
//# sourceMappingURL=form-control-label.js.map
