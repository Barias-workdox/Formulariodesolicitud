import { jsx as t } from "react/jsx-runtime";
import "../../../button/button.js";
import { IconButton as l } from "../../../button/variants/icon-button/icon-button.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import "../../../../themes/v3/light/theme.js";
import "../../../../themes/v3/dark/theme.js";
import "../../../../themes/utilities.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../modal/regular-modal.js";
import "../../../modal/sectioned-modal.js";
import "../../../spinner/full-spinner/full-spinner-context.js";
import "@carbon/icons-react";
import { StatefulTooltipNext as f } from "../../../tooltip-next/stateful-tooltip-next/stateful-tooltip-next.js";
const N = ({
  dataTestId: o,
  disabled: r = !1,
  isLoading: i = !1,
  tooltipContent: m,
  zIndex: p,
  showTooltip: e = !0,
  Icon: n,
  onClick: c
}) => /* @__PURE__ */ t(
  f,
  {
    showArrow: !0,
    placement: "bottomRight",
    zIndex: p,
    content: e ? m : void 0,
    children: /* @__PURE__ */ t(
      l,
      {
        dataTestId: o,
        size: "32px",
        disabled: r,
        isLoading: i,
        kind: "tertiary",
        onClick: c,
        children: n
      }
    )
  }
);
export {
  N as ActionIconButton
};
//# sourceMappingURL=action-icon-button.js.map
