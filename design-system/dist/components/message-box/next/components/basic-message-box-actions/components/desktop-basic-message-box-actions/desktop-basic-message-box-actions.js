import { jsxs as b, jsx as o } from "react/jsx-runtime";
import { Button as t } from "../../../../../../button/button.js";
import "../../../../../../button/variants/icon-button/icon-button.js";
import "../../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../../themes/v3/tokens/breakpoints.js";
import "../../../../../../../themes/v3/light/theme.js";
import "../../../../../../../themes/v3/dark/theme.js";
import "../../../../../../../themes/utilities.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../../../modal/regular-modal.js";
import "../../../../../../modal/sectioned-modal.js";
import "../../../../../../spinner/full-spinner/full-spinner-context.js";
import "@carbon/icons-react";
import { useMessageBoxContext as x } from "../../../../hooks/use-message-box-context.hook.js";
import "@tiptap/react";
import { DesktopStyledWrapper as f } from "../../styled-components/styled-desktop-wrapper.js";
import "../../styled-components/styled-mobile-wrapper.js";
const L = ({
  onSecondaryButtonClick: i,
  primaryButtonIcon: s,
  primaryButtonProps: e,
  primaryButtonText: m,
  secondaryButtonIcon: a,
  secondaryButtonProps: l,
  secondaryButtonText: r
}) => {
  const { disabled: d, isEmpty: h, handleSubmit: n } = x();
  return /* @__PURE__ */ b(f, { children: [
    r && /* @__PURE__ */ o(
      t,
      {
        "aria-label": r,
        kind: "secondary",
        size: "32px",
        ...l,
        endEnhancer: a,
        onClick: (p) => {
          p.stopPropagation(), i == null || i();
        },
        children: r
      }
    ),
    /* @__PURE__ */ o(
      t,
      {
        "aria-label": m,
        kind: "primary",
        size: "32px",
        disabled: d || h,
        ...e,
        endEnhancer: s,
        onClick: (p) => {
          p.stopPropagation(), n();
        },
        children: m
      }
    )
  ] });
};
export {
  L as DesktopBasicMessageBoxActions
};
//# sourceMappingURL=desktop-basic-message-box-actions.js.map
