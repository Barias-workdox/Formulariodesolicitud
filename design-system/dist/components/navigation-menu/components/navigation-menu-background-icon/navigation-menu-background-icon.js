import { jsx as t } from "react/jsx-runtime";
import { BackgroundIcon as a } from "../../../background-icon/next/background-icon.js";
const e = {
  default: "24px",
  large: "32px"
}, I = ({
  menuItemSize: o = "default",
  size: r,
  ...n
}) => /* @__PURE__ */ t(
  a,
  {
    ...n,
    size: r ?? e[o]
  }
);
export {
  I as NavigationMenuBackgroundIcon
};
//# sourceMappingURL=navigation-menu-background-icon.js.map
