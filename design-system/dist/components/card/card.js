import { jsx as o } from "react/jsx-runtime";
import { BackgroundIcon as d } from "../background-icon/background-icon.js";
import { Button as i } from "../button/button.js";
import "../button/variants/icon-button/icon-button.js";
import "../../themes/v3/tokens/typography.js";
import "../../themes/v3/tokens/breakpoints.js";
import "../../themes/v3/light/theme.js";
import "../../themes/v3/dark/theme.js";
import "../../themes/utilities.js";
import "react";
import "baseui/modal";
import "baseui";
import "../modal/components/modal-close-button/modal-close-button.js";
import "../modal/regular-modal.js";
import "../modal/sectioned-modal.js";
import "../spinner/full-spinner/full-spinner-context.js";
import "@carbon/icons-react";
import { TruncatedText as p } from "../truncated-text/truncated-text.js";
import { StyledCardWrapper as s, StyledCardHeaderWrapper as c, StyledCardFooterWrapper as m, StyledTruncatedText as l } from "./card.styled.js";
import { CardProvider as u, useCard as a } from "./contexts/card.context.js";
const e = ({ children: t, disabled: r, className: n }) => /* @__PURE__ */ o(u, { disabled: r, children: /* @__PURE__ */ o(
  s,
  {
    className: n,
    $disabled: r,
    children: t
  }
) }), C = ({ children: t, className: r }) => /* @__PURE__ */ o(c, { className: r, children: t }), x = ({ children: t, className: r }) => /* @__PURE__ */ o("div", { className: r, children: t }), T = ({ children: t, className: r }) => /* @__PURE__ */ o(m, { className: r, children: t }), b = ({
  dataTestId: t = "card__action-button",
  ...r
}) => {
  const { disabled: n } = a();
  return /* @__PURE__ */ o(
    i,
    {
      "data-testid": t,
      disabled: n,
      ...r
    }
  );
}, f = (t) => {
  const { disabled: r } = a();
  return /* @__PURE__ */ o(
    d,
    {
      size: "24px",
      shape: "square",
      backgroundColor: "neutralWashed",
      iconColor: r ? "neutralDepressed" : "neutral",
      ...t
    }
  );
}, y = ({ children: t }) => {
  const { disabled: r } = a();
  return /* @__PURE__ */ o(
    l,
    {
      textProps: {
        variant: "body",
        margin: 0,
        fontWeight: "bold",
        color: r ? "neutralDepressed" : "neutral"
      },
      tooltipProps: { content: t },
      children: t
    }
  );
}, P = {
  variant: "bodySmall",
  margin: 0,
  color: "neutral",
  fontWeight: "400"
}, g = ({ children: t }) => /* @__PURE__ */ o(
  p,
  {
    maxLines: 4,
    textProps: P,
    tooltipProps: { content: t },
    children: t
  }
);
e.Header = C;
e.Body = x;
e.Footer = T;
e.Action = b;
e.Icon = f;
e.Title = y;
e.Text = g;
export {
  e as Card,
  b as CardAction,
  x as CardBody,
  T as CardFooter,
  C as CardHeader,
  f as CardIcon,
  g as CardText,
  y as CardTitle
};
//# sourceMappingURL=card.js.map
