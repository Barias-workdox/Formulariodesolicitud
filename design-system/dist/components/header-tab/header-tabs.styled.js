import { themedStyled as d } from "../../themes/utilities.js";
const a = d(
  "div",
  ({ $borderRadius: o, $theme: r, $isDisabled: l = !1 }) => ({
    // only border bottom left and right
    borderTop: `1px solid ${r.colors.neutralSubtle}`,
    borderLeft: `1px solid ${r.colors.neutralSubtle}`,
    borderRight: `1px solid ${r.colors.neutralSubtle}`,
    borderRadius: `${r.borders[o]} ${r.borders[o]} 0 0`,
    backgroundColor: l ? r.colors.neutralWashed : r.colors.bgBase
  })
);
export {
  a as HeaderTabWrapper
};
//# sourceMappingURL=header-tabs.styled.js.map
