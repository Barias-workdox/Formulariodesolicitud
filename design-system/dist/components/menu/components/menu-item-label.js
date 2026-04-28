import { jsxs as a, jsx as t } from "react/jsx-runtime";
import { Checkmark as n } from "@carbon/icons-react";
import { TruncatedText as l } from "../../truncated-text/truncated-text.js";
import { Spinner as c } from "../../spinner/spinner.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../modal/components/modal-close-button/modal-close-button.js";
import "../../modal/regular-modal.js";
import "../../modal/sectioned-modal.js";
import "../../spinner/full-spinner/full-spinner-context.js";
import { useCss as u } from "../../utils/hooks/use-css.js";
const d = {
  wrapperStyles: (r, { disabled: o }) => ({
    display: "flex",
    alignItems: "center",
    gap: r.spacing.spacingXs,
    color: o ? r.colors.neutralDepressed : r.colors.neutralSubdued
  })
}, I = ({
  children: r,
  isLoading: o,
  disabled: s,
  startEnhancer: e,
  endEnhancer: p,
  selected: i
}) => {
  const { wrapperStyles: m } = u(d, { disabled: s });
  return /* @__PURE__ */ a("div", { className: m, children: [
    e,
    /* @__PURE__ */ t(
      l,
      {
        textProps: {
          variant: "bodySmall",
          margin: 0,
          color: "inherit",
          flex: 1,
          as: "span"
        },
        tooltipProps: {
          content: r,
          showArrow: !0
        },
        children: r
      }
    ),
    o ? /* @__PURE__ */ t(c, { size: "sm" }) : i ? /* @__PURE__ */ t(n, { size: 16 }) : p
  ] });
};
export {
  I as MenuItemLabel
};
//# sourceMappingURL=menu-item-label.js.map
