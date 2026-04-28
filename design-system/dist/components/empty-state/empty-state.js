import { jsxs as n, jsx as t } from "react/jsx-runtime";
import { Button as c } from "../button/button.js";
import "../button/variants/icon-button/icon-button.js";
import "../../themes/v3/tokens/typography.js";
import "../../themes/v3/tokens/breakpoints.js";
import { useCss as v } from "../utils/hooks/use-css.js";
import "react";
import "baseui/modal";
import "baseui";
import "../modal/components/modal-close-button/modal-close-button.js";
import "../modal/regular-modal.js";
import "../modal/sectioned-modal.js";
import "../spinner/full-spinner/full-spinner-context.js";
import "@carbon/icons-react";
import { Text as o } from "../text/text.js";
import { styles as k } from "./empty-state.styles.js";
const G = ({
  dataTestId: e = "empty-state",
  Icon: a,
  title: m,
  description: s,
  link: l,
  primaryButtonProps: r,
  secondaryButtonProps: i
}) => {
  const { containerStyles: p, textsContainerStyles: d, buttonsContainerStyles: h, linkStyles: x, theme: y } = v(k), { text: f, ...b } = r || {}, { text: S, ..._ } = i || {}, { text: g, href: u } = l || {};
  return /* @__PURE__ */ n("div", { className: p, children: [
    a && a,
    /* @__PURE__ */ n("div", { className: d, children: [
      m && /* @__PURE__ */ t(
        o,
        {
          variant: "body",
          fontWeight: "500",
          margin: 0,
          children: m
        }
      ),
      s && /* @__PURE__ */ t(
        o,
        {
          variant: "bodySmall",
          textAlign: "center",
          whiteSpace: "pre-line",
          margin: 0,
          children: s
        }
      ),
      l && /* @__PURE__ */ t(
        "a",
        {
          href: u,
          target: "_blank",
          rel: "noreferrer",
          className: x,
          "data-testid": `${e}__link`,
          children: /* @__PURE__ */ t(
            o,
            {
              variant: "bodySmall",
              color: y.colors.brand,
              margin: 0,
              children: g
            }
          )
        }
      )
    ] }),
    (r || i) && /* @__PURE__ */ n("div", { className: h, children: [
      i && /* @__PURE__ */ t(
        c,
        {
          "data-testid": `${e}__secondary-button`,
          kind: "secondary",
          size: "32px",
          ..._,
          children: S
        }
      ),
      r && /* @__PURE__ */ t(
        c,
        {
          "data-testid": `${e}__primary-button`,
          size: "32px",
          ...b,
          children: f
        }
      )
    ] })
  ] });
};
export {
  G as EmptyState
};
//# sourceMappingURL=empty-state.js.map
