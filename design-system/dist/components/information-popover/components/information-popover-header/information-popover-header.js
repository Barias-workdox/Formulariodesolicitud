import { jsxs as f, jsx as o } from "react/jsx-runtime";
import { Close as h } from "@carbon/icons-react";
import "../../../button/button.js";
import { IconButton as v } from "../../../button/variants/icon-button/icon-button.js";
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
import { Text as u } from "../../../text/text.js";
import { getOverride as t, getOverrideProps as r } from "../../../../utils/overrides.utils.js";
import { StyledRoot as g } from "./information-popover-header.styles.js";
const A = ({
  "data-testid": n,
  title: p,
  onClose: d,
  overrides: s
}) => {
  const {
    Root: i,
    Title: e,
    CloseButton: m
  } = s || {}, l = t(i) || g, a = t(e) || u, c = t(m) || v;
  return /* @__PURE__ */ f(l, { ...r(i), children: [
    /* @__PURE__ */ o(
      a,
      {
        variant: "bodySmall",
        fontWeight: "500",
        margin: 0,
        as: "span",
        overflow: "hidden",
        ...r(e),
        children: p
      }
    ),
    /* @__PURE__ */ o(
      c,
      {
        "data-testid": `${n}--close`,
        onClick: d,
        size: "auto",
        kind: "link-tertiary",
        ...r(m),
        children: /* @__PURE__ */ o(
          h,
          {
            height: 20,
            width: 20
          }
        )
      }
    )
  ] });
};
export {
  A as InformationPopoverHeader
};
//# sourceMappingURL=information-popover-header.js.map
