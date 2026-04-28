import { jsx as c } from "react/jsx-runtime";
import { BackgroundIcon as n } from "../../../../../background-icon/background-icon.js";
import { iconsByActivity as r, defaultIconConfig as a } from "./activity-icon.constants.js";
const s = ({
  type: t,
  "data-testid": o = "activity-icon"
}) => {
  const i = r[t] || a;
  return /* @__PURE__ */ c(
    n,
    {
      "data-testid": o,
      ...i
    }
  );
};
export {
  s as ActivityIcon
};
//# sourceMappingURL=activity-icon.js.map
