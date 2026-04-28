import { jsx as o } from "react/jsx-runtime";
import { ChevronUp as e, ChevronDown as p } from "@carbon/icons-react";
import "../../../../../../../../button/button.js";
import { IconButton as n } from "../../../../../../../../button/variants/icon-button/icon-button.js";
import "../../../../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../../../../themes/v3/tokens/breakpoints.js";
import "../../../../../../../../../themes/v3/light/theme.js";
import "../../../../../../../../../themes/v3/dark/theme.js";
import "../../../../../../../../../themes/utilities.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../../../../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../../../../../modal/regular-modal.js";
import "../../../../../../../../modal/sectioned-modal.js";
import "../../../../../../../../spinner/full-spinner/full-spinner-context.js";
import { ELEMENT_SIZE_BY_COLLAPSIBLE_BOX_SIZE as s } from "../../../../../../collapsible-box.constants.js";
import { useCollapsibleBoxContext as c } from "../../../../../../collapsible-box.context.js";
import { iconButtonOverrides as d } from "./toggle-icon.overrides.js";
const b = ({
  $expanded: t,
  "data-testid": r
}) => {
  const { size: i } = c(), m = s[i];
  return /* @__PURE__ */ o(
    n,
    {
      size: m,
      responsive: !1,
      "data-testid": r,
      overrides: d(),
      children: t ? /* @__PURE__ */ o(e, {}) : /* @__PURE__ */ o(p, {})
    }
  );
};
export {
  b as ToggleIcon
};
//# sourceMappingURL=toggle-icon.js.map
