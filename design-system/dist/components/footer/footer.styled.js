import { themedStyled as s } from "../../themes/utilities.js";
const p = s(
  "div",
  ({ $borderRadius: r, $theme: o, $padding: a = "spacingSm", $gap: i = "spacingXs", $isDisabled: l = !1 }) => ({
    display: "flex",
    flexDirection: "column",
    padding: o.spacing.spacingXs,
    gap: o.spacing.spacingSm,
    // only border bottom left and right
    borderBottom: `1px solid ${o.colors.neutralSubtle}`,
    borderLeft: `1px solid ${o.colors.neutralSubtle}`,
    borderRight: `1px solid ${o.colors.neutralSubtle}`,
    borderRadius: `0 0 ${o.borders[r]} ${o.borders[r]}`,
    backgroundColor: l ? o.colors.neutralWashed : o.colors.bgBase,
    [o.mediaQuery.extrasmall]: {
      gap: o.spacing[i],
      padding: o.spacing[a]
    }
  })
), c = s(
  "div",
  ({ $theme: r, $gap: o = "spacingXs" }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    gap: r.spacing.spacingXs,
    [r.mediaQuery.extrasmall]: {
      gap: r.spacing[o],
      flexDirection: "row"
    }
  })
);
export {
  c as FooterActionsWrapper,
  p as FooterWrapper
};
//# sourceMappingURL=footer.styled.js.map
