import { jsx as s } from "react/jsx-runtime";
import { ToasterContainer as a } from "baseui/toast";
import "react";
import { PLACEMENT as n } from "baseui/popover";
import "baseui";
import "../../popover/popover.styles.js";
import "../../clear-button/clear-button.js";
import "react-router-dom";
import "../../../themes/v3/light/theme.js";
import "../../../themes/v3/dark/theme.js";
import "../../../themes/v3/tokens/typography.js";
import "../../../themes/v3/tokens/breakpoints.js";
import "../../../themes/utilities.js";
import { StyledToastBody as T } from "../components/toast-body/toast-body.js";
import { CloseIconToast as d } from "../components/toast-close-icon/toast-close-icon.js";
import { DEFAULT_TOAST_DURATION_MS as f } from "./toast.constants.js";
import { toastOverrides as c } from "./toaster-container.styles.js";
const N = ({
  children: o,
  placement: t = n.bottomRight,
  zIndex: r,
  marginX: m,
  marginY: i,
  width: p,
  duration: e = f
}) => /* @__PURE__ */ s(
  a,
  {
    placement: t,
    autoHideDuration: e,
    overrides: {
      ...c({ zIndex: r, marginX: m, marginY: i }),
      ToastCloseIcon: {
        props: {
          "data-testid": "toaster__close-button"
        },
        component: d
      },
      ToastBody: {
        component: T,
        props: { width: p }
      }
    },
    children: o
  }
);
export {
  N as ToasterContainer
};
//# sourceMappingURL=toaster-container.js.map
