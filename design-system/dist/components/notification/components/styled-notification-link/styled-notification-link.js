import { jsx as t, Fragment as a } from "react/jsx-runtime";
import { Link as s } from "react-router-dom";
import { useCss as l } from "../../../utils/hooks/use-css.js";
import { linkStyles as m } from "./styled-notification-link.styles.js";
const k = ({
  dataTestId: r = "notification-link",
  linkPath: i,
  linkText: e,
  linkType: n
}) => {
  const { linkNotificationStyles: o } = l(m);
  return /* @__PURE__ */ t(a, { children: n === "internal" ? /* @__PURE__ */ t(
    s,
    {
      "data-testid": r,
      className: o,
      to: i,
      children: e
    }
  ) : /* @__PURE__ */ t(
    "a",
    {
      "data-testid": r,
      target: "_blank",
      rel: "noreferrer",
      className: o,
      href: i,
      children: e
    }
  ) });
};
export {
  k as StyledNotificationLink
};
//# sourceMappingURL=styled-notification-link.js.map
