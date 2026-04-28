import { jsx as o, Fragment as a } from "react/jsx-runtime";
import { OverflowMenuHorizontal as c } from "@carbon/icons-react";
import { StatefulPopover as f } from "baseui/popover";
import "../../button/button.js";
import { IconButton as l } from "../../button/variants/icon-button/icon-button.js";
import "../../../themes/v3/tokens/typography.js";
import "../../../themes/v3/tokens/breakpoints.js";
import "../../../themes/v3/light/theme.js";
import "../../../themes/v3/dark/theme.js";
import "../../../themes/utilities.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../modal/components/modal-close-button/modal-close-button.js";
import "../../modal/regular-modal.js";
import "../../modal/sectioned-modal.js";
import "../../spinner/full-spinner/full-spinner-context.js";
import { MessageOptions as d } from "../message-options/message-options.js";
const k = ({
  "data-testid": t = "message-options",
  canUpdate: r,
  canDelete: e,
  isLoading: i,
  message: p,
  onEditClick: m,
  onDeleteClick: n,
  isAuthor: s
}) => s ? /* @__PURE__ */ o(
  f,
  {
    content: ({ close: u }) => /* @__PURE__ */ o(
      d,
      {
        dataTestId: t,
        canUpdate: r,
        canDelete: e,
        message: p,
        close: u,
        onEditClick: m,
        onDeleteClick: n
      }
    ),
    showArrow: !0,
    returnFocus: !0,
    autoFocus: !0,
    placement: "left",
    ignoreBoundary: !0,
    children: /* @__PURE__ */ o(
      l,
      {
        "data-testid": `${t}--options-button`,
        size: "auto",
        type: "button",
        disabled: i,
        children: /* @__PURE__ */ o(c, { size: 16 })
      }
    )
  }
) : /* @__PURE__ */ o(a, {});
export {
  k as MessageOptionsPopover
};
//# sourceMappingURL=message-options-popover.js.map
