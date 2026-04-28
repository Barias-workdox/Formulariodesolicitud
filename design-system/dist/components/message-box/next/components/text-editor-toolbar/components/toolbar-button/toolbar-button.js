import { jsx as s } from "react/jsx-runtime";
import "../../../../../../button/button.js";
import { IconButton as e } from "../../../../../../button/variants/icon-button/icon-button.js";
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
const I = ({
  ariaLabel: r,
  children: t,
  dataTestId: i,
  onClick: p,
  disabled: m,
  isActive: a
}) => /* @__PURE__ */ s(
  e,
  {
    "aria-label": r,
    dataTestId: i,
    disabled: m,
    kind: "tertiary",
    onClick: p,
    size: "24px",
    overrides: {
      BaseButton: {
        style: ({ $theme: o }) => ({
          backgroundColor: a ? o.colors.brandWashed : o.colors.bgBase
        })
      }
    },
    children: t
  }
);
export {
  I as ToolbarButton
};
//# sourceMappingURL=toolbar-button.js.map
