import { jsx as m } from "react/jsx-runtime";
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
import "@carbon/icons-react";
import { ELEMENT_SIZE_BY_COLLAPSIBLE_BOX_SIZE as e } from "../../../../collapsible-box.constants.js";
import { useCollapsibleBoxContext as n } from "../../../../collapsible-box.context.js";
const P = ({
  dataTestId: o = "panel-icon-button",
  ...t
}) => {
  const { size: r } = n(), i = e[r];
  return /* @__PURE__ */ m(
    p,
    {
      "data-testid": o,
      ...t,
      size: i,
      responsive: !1
    }
  );
};
export {
  P as PanelIconButton
};
//# sourceMappingURL=panel-icon-button.js.map
