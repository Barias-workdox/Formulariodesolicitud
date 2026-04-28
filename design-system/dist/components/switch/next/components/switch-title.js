import { jsx as o } from "react/jsx-runtime";
import { Text as l } from "../../../text/text.js";
const i = ({
  title: r,
  variant: t = "16px",
  disabled: e = !1
}) => /* @__PURE__ */ o(
  l,
  {
    variant: t === "14px" ? "bodySmall" : "body",
    margin: 0,
    color: e ? "neutralDepressed" : "neutralStrong",
    children: r
  }
);
export {
  i as SwitchTitle
};
//# sourceMappingURL=switch-title.js.map
