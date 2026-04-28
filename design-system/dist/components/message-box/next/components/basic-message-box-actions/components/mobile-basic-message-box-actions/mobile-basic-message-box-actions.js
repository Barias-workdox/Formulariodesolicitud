import { jsxs as f, jsx as r } from "react/jsx-runtime";
import { SendAltFilled as c } from "@carbon/icons-react";
import "../../../../../../button/button.js";
import { IconButton as p } from "../../../../../../button/variants/icon-button/icon-button.js";
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
import { useMessageBoxContext as g } from "../../../../hooks/use-message-box-context.hook.js";
import "@tiptap/react";
import { composeMessageBoxActionsTestId as m } from "../../../../utils/compose-message-box-test-id.utils.js";
import "../../styled-components/styled-desktop-wrapper.js";
import { MobileStyledWrapper as M } from "../../styled-components/styled-mobile-wrapper.js";
const J = ({
  onSecondaryButtonClick: i,
  primaryButtonIcon: s,
  primaryButtonProps: e,
  primaryButtonText: a,
  secondaryButtonIcon: d,
  secondaryButtonProps: l,
  secondaryButtonText: t
}) => {
  const { disabled: b, isEmpty: n, handleSubmit: x } = g();
  return /* @__PURE__ */ f(M, { children: [
    t && /* @__PURE__ */ r(
      p,
      {
        "aria-label": t,
        dataTestId: m("__secondary-button"),
        kind: "secondary",
        size: "32px",
        ...l,
        onClick: (o) => {
          o.stopPropagation(), i == null || i();
        },
        children: d
      }
    ),
    /* @__PURE__ */ r(
      p,
      {
        "aria-label": a,
        dataTestId: m("__primary-button"),
        kind: "primary",
        size: "32px",
        disabled: b || n,
        ...e,
        onClick: (o) => {
          o.stopPropagation(), x();
        },
        children: s ?? /* @__PURE__ */ r(c, {})
      }
    )
  ] });
};
export {
  J as MobileBasicMessageBoxActions
};
//# sourceMappingURL=mobile-basic-message-box-actions.js.map
