import { themedStyled as d } from "../../../../../themes/utilities.js";
const l = d("div", ({ $theme: o, $zIndex: r, $fullViewport: e = !1 }) => ({
  position: "absolute",
  backgroundColor: o.colors.bgBase,
  overflow: "hidden",
  zIndex: r,
  boxSizing: "border-box",
  ...!e && {
    borderRadius: "4px",
    boxShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.10)",
    border: `1px solid ${o.colors.neutralSubtle}`
  }
}));
export {
  l as StyledContainer
};
//# sourceMappingURL=styled-container.js.map
