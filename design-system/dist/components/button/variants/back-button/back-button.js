import { jsx as t } from "react/jsx-runtime";
import { ChevronLeft as i } from "@carbon/icons-react";
import { IconButton as m } from "../icon-button/icon-button.js";
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
function z({ dataTestId: o = "back-button", ...r }) {
  return /* @__PURE__ */ t(
    m,
    {
      "data-testid": o,
      kind: "control",
      size: "32px",
      type: "button",
      ...r,
      children: /* @__PURE__ */ t(
        i,
        {
          "aria-label": "Back",
          size: 16
        }
      )
    }
  );
}
export {
  z as BackButton
};
//# sourceMappingURL=back-button.js.map
