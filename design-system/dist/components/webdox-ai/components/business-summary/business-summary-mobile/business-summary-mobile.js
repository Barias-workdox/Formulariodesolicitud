import { jsx as r } from "react/jsx-runtime";
import { Drawer as t } from "../../../../drawer/drawer.js";
import "@carbon/icons-react";
import "baseui/header-navigation";
import "../../../../../themes/v3/light/theme.js";
import "../../../../../themes/v3/dark/theme.js";
import "../../../../../themes/v3/tokens/typography.js";
import "../../../../../themes/v3/tokens/breakpoints.js";
import "../../../../../themes/utilities.js";
import "../../../../button/variants/icon-button/icon-button.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../modal/regular-modal.js";
import "../../../../modal/sectioned-modal.js";
import "../../../../spinner/full-spinner/full-spinner-context.js";
import { DrawerBody as p } from "../../../../drawer/components/drawer-body.js";
import { BusinessSummary as e } from "../business-summary.js";
import { summaryDrawerOverrides as s } from "./business-summary-mobile.style.js";
const k = ({
  isOpen: m,
  summary: i,
  toggleOpen: o
}) => /* @__PURE__ */ r(
  t,
  {
    isOpen: m,
    onClose: o,
    anchor: "bottom",
    size: "80vh",
    overrides: s,
    children: /* @__PURE__ */ r(p, { padding: "0", children: /* @__PURE__ */ r(
      e,
      {
        summary: i,
        toggleOpen: o
      }
    ) })
  }
);
export {
  k as BusinessSummaryMobile
};
//# sourceMappingURL=business-summary-mobile.js.map
