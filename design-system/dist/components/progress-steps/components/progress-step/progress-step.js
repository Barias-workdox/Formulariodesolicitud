import { jsxs as y, jsx as t } from "react/jsx-runtime";
import { useState as M } from "react";
import { Number_1 as E, Number_2 as w, Number_3 as x, Number_4 as C, Number_5 as I, Number_6 as B, Number_7 as H, Number_8 as R, Number_9 as j, Undefined as f, Warning as O, CheckmarkOutline as P } from "@carbon/icons-react";
import { useMedia as T } from "react-use";
import { Text as U } from "../../../text/text.js";
import { StatefulTooltipNext as W } from "../../../tooltip-next/stateful-tooltip-next/stateful-tooltip-next.js";
import { useCss as A } from "../../../utils/hooks/use-css.js";
import { mediaQueries as D } from "../../../../themes/v3/tokens/breakpoints.js";
import { StyledProgressStep as L, StyledIconWrapper as Q } from "./progress-step.styles.js";
const v = [
  E,
  w,
  x,
  C,
  I,
  B,
  H,
  R,
  j
], Z = ({
  "data-testid": s = "design-system__progress-step",
  size: n = "sm",
  kind: e,
  hideText: b = !1,
  responsiveBreakpoint: g = "medium",
  type: i = "default",
  title: m,
  index: o,
  $width: a,
  onClick: d
}) => {
  const { theme: c } = A(), [N, p] = M(!1), _ = !T(D[g]), u = !b || !_, r = e !== "pending" && !!d, h = a || (n === "sm" ? "160px" : "180px"), S = n === "sm" ? "microCopy" : "bodySmall", l = e !== "pending" ? c.colors.neutral : c.colors.neutralDepressed, $ = {
    default: o !== void 0 ? v[o] : f,
    checked: P,
    warning: O,
    pending: o !== void 0 ? v[o] : f
  }[e];
  return /* @__PURE__ */ y(
    L,
    {
      $type: i,
      $isEnabledMouseEvents: r,
      $width: h,
      role: "button",
      "data-testid": `${s}--${e}`,
      onMouseEnter: r ? () => p(!0) : void 0,
      onMouseLeave: r ? () => p(!1) : void 0,
      onClick: r ? () => d() : void 0,
      tabIndex: e === "pending" ? void 0 : o === void 0 ? 0 : o + 1,
      children: [
        /* @__PURE__ */ t(
          W,
          {
            ignoreBoundary: !0,
            size: "sm",
            popoverMargin: 8,
            placement: "bottom",
            content: !u && m,
            children: /* @__PURE__ */ t(
              Q,
              {
                "data-testid": `${s}--icon-wrapper`,
                $kind: e,
                $isHovered: N,
                children: /* @__PURE__ */ t($, { color: l })
              }
            )
          }
        ),
        u && /* @__PURE__ */ t(
          U,
          {
            variant: S,
            margin: 0,
            color: l,
            textAlign: "center",
            $style: i === "compressed" ? { whiteSpace: "nowrap" } : void 0,
            children: m
          }
        )
      ]
    }
  );
};
export {
  Z as ProgressStep
};
//# sourceMappingURL=progress-step.js.map
