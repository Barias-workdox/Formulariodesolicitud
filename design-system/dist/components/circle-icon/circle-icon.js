import { jsx as p } from "react/jsx-runtime";
import { BackgroundIcon as u } from "../background-icon/background-icon.js";
const d = ({
  Icon: o,
  iconColor: r = "neutral",
  backgroundColor: n = "neutralBase",
  width: c = "50px",
  height: e = "50px",
  iconWidth: t = 24,
  iconHeight: i = 24,
  iconSize: a = 16
}) => /* @__PURE__ */ p(
  u,
  {
    shape: "round",
    icon: {
      Icon: o,
      color: r,
      width: t,
      height: i,
      size: a
    },
    background: {
      color: n,
      width: c,
      height: e
    }
  }
);
export {
  d as CircleIcon
};
//# sourceMappingURL=circle-icon.js.map
