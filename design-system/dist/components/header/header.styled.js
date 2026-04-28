import { themedStyled as s } from "../../themes/utilities.js";
const n = s(
  "div",
  ({ $borderRadius: r, $theme: o, $padding: a = "spacingSm", $gap: l = "spacingXs", $isDisabled: d = !1 }) => ({
    display: "flex",
    justifyContent: "space-between",
    padding: o.spacing[a],
    gap: o.spacing[l],
    // only border top left and right
    borderTop: `1px solid ${o.colors.neutralSubtle}`,
    borderLeft: `1px solid ${o.colors.neutralSubtle}`,
    borderRight: `1px solid ${o.colors.neutralSubtle}`,
    borderRadius: `${o.borders[r]} ${o.borders[r]} 0 0 `,
    backgroundColor: d ? o.colors.neutralWashed : o.colors.bgBase
  })
), p = s(
  "div",
  ({ $theme: r, $gap: o = "spacingXs" }) => ({
    alignItems: "center",
    display: "flex",
    gap: r.spacing[o]
  })
);
export {
  p as HeaderSection,
  n as HeaderWrapper
};
//# sourceMappingURL=header.styled.js.map
