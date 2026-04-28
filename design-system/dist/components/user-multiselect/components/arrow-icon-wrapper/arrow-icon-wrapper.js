import { jsx as r } from "react/jsx-runtime";
import "../../../button/button.js";
import { IconButton as m } from "../../../button/variants/icon-button/icon-button.js";
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
import { ArrowIcon as e } from "../../../select/components/arrow-icon.js";
const C = ({
  dataTestId: o,
  isOpen: t,
  toggleIsOpen: p,
  disabled: i
}) => /* @__PURE__ */ r(
  m,
  {
    "data-testid": o,
    onClick: p,
    children: /* @__PURE__ */ r(
      e,
      {
        isOpen: t,
        color: i ? "neutralDepressed" : "neutralSubdued"
      }
    )
  }
);
export {
  C as ArrowIconWrapper
};
//# sourceMappingURL=arrow-icon-wrapper.js.map
