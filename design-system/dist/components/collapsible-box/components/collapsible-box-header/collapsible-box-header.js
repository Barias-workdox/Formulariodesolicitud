import { jsxs as e, jsx as o, Fragment as h } from "react/jsx-runtime";
import { forwardRef as C } from "react";
import { ChevronUp as b, ChevronDown as f } from "@carbon/icons-react";
import "../../../button/button.js";
import { IconButton as x } from "../../../button/variants/icon-button/icon-button.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import "../../../../themes/v3/light/theme.js";
import "../../../../themes/v3/dark/theme.js";
import "../../../../themes/utilities.js";
import "baseui/modal";
import "baseui";
import "../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../modal/regular-modal.js";
import "../../../modal/sectioned-modal.js";
import "../../../spinner/full-spinner/full-spinner-context.js";
import { Text as g } from "../../../text/text.js";
import { CollapsibleBoxHeaderContainer as u, SectionContainer as n, CollapsibleBoxIconContainer as v, textStyles as y } from "./collapsible-box-header.styles.js";
const G = C(
  function({
    dataTestId: l = "collapsible-box__header",
    $expanded: r,
    title: t,
    collapsedTitle: m = t,
    Icon: i,
    options: p,
    onClick: a,
    overrides: {
      HeaderContainer: { style: s = {} } = {},
      Title: { style: d = {} } = {}
    } = {}
  }, c) {
    return /* @__PURE__ */ e(
      u,
      {
        ref: c,
        $expanded: r,
        $headerOverrides: s,
        children: [
          /* @__PURE__ */ e(n, { children: [
            i ? /* @__PURE__ */ o(v, { children: i }) : /* @__PURE__ */ o(h, {}),
            /* @__PURE__ */ o(
              g,
              {
                variant: "h2",
                margin: 0,
                $style: y(d),
                children: r ? t : m
              }
            )
          ] }),
          /* @__PURE__ */ e(n, { children: [
            p,
            /* @__PURE__ */ o(
              x,
              {
                "data-testid": `${l}--toggle-button`,
                "aria-label": `${t} toggle button`,
                size: "32px",
                type: "button",
                onClick: a,
                children: r ? /* @__PURE__ */ o(b, {}) : /* @__PURE__ */ o(f, {})
              }
            )
          ] })
        ]
      }
    );
  }
);
export {
  G as CollapsibleBoxHeader
};
//# sourceMappingURL=collapsible-box-header.js.map
