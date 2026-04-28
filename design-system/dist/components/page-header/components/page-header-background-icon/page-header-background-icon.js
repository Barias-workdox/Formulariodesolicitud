import { jsx as e } from "react/jsx-runtime";
import { BackgroundIcon as s } from "../../../background-icon/background-icon.js";
import { COMMON_HEIGHT_32 as p, COMMON_HEIGHT_44 as n } from "../../../../constants/common.constants.js";
import { useResponsiveProps as i } from "../../../../utils/use-responsive-props.util.js";
const u = (o) => {
  const r = i(
    { large: { size: n } },
    { size: p }
  );
  return /* @__PURE__ */ e(
    s,
    {
      shape: "square",
      ...o,
      ...r
    }
  );
};
export {
  u as PageHeaderBackgroundIcon
};
//# sourceMappingURL=page-header-background-icon.js.map
