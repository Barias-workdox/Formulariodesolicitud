import { jsx as e } from "react/jsx-runtime";
import m from "../../assets/icons/unknown.svg.js";
import "../../themes/v3/light/theme.js";
import "../../themes/v3/dark/theme.js";
import "../../themes/v3/tokens/typography.js";
import "../../themes/v3/tokens/breakpoints.js";
import { themedStyled as n } from "../../themes/utilities.js";
import { SvgIcon as p } from "../svg-icon/svg-icon.js";
import { fileIconSvgMap as c } from "./file-icon.utils.js";
const l = n("div", ({ $style: o }) => ({
  display: "flex",
  alignItems: "center",
  ...o
})), F = ({ fileExtension: o, width: r, height: t }) => {
  const i = c[o] || m;
  return /* @__PURE__ */ e(l, { $style: { width: r, height: t }, children: /* @__PURE__ */ e(
    p,
    {
      svg: i,
      height: t,
      width: r
    }
  ) });
};
export {
  F as FileIcon
};
//# sourceMappingURL=file-icon.js.map
