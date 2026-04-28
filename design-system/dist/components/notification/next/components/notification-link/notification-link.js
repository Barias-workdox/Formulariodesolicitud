import { jsx as n } from "react/jsx-runtime";
import { Link as a } from "react-router-dom";
import { useCss as s } from "../../../../utils/hooks/use-css.js";
import { notificationLinkStyles as l } from "./notification-link.styles.js";
const k = ({
  "data-testid": t = "notification-link",
  isExternal: o = !1,
  path: i,
  text: r
}) => {
  const { linkStyles: e } = s(l);
  return o ? /* @__PURE__ */ n(
    "a",
    {
      "data-testid": `${t}--external`,
      target: "_blank",
      rel: "noreferrer",
      href: i,
      className: e,
      children: r
    }
  ) : /* @__PURE__ */ n(
    a,
    {
      "data-testid": `${t}--internal`,
      to: i,
      className: e,
      children: r
    }
  );
};
export {
  k as NotificationLink
};
//# sourceMappingURL=notification-link.js.map
