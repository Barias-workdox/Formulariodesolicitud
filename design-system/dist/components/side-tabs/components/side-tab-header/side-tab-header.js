import { jsxs as e, jsx as o } from "react/jsx-runtime";
import { Close as p } from "@carbon/icons-react";
import "../../../button/button.js";
import { IconButton as s } from "../../../button/variants/icon-button/icon-button.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import { useCss as d } from "../../../utils/hooks/use-css.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../modal/regular-modal.js";
import "../../../modal/sectioned-modal.js";
import "../../../spinner/full-spinner/full-spinner-context.js";
import { styles as a } from "./side-tab-header.styles.js";
const z = ({
  "data-testid": r,
  children: i,
  onClose: t
}) => {
  const { tabHeaderStyles: m } = d(a);
  return /* @__PURE__ */ e("div", { className: m, children: [
    i,
    t !== void 0 && /* @__PURE__ */ o(
      s,
      {
        "data-testid": `${r}--close`,
        size: "32px",
        onClick: t,
        children: /* @__PURE__ */ o(p, {})
      }
    )
  ] });
};
export {
  z as SideTabHeader
};
//# sourceMappingURL=side-tab-header.js.map
