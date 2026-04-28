import { themedStyled as i } from "../../themes/utilities.js";
const t = i(
  "div",
  ({ $theme: n, $withBorder: o }) => ({
    display: "flex",
    flexDirection: "column",
    padding: n.spacing.spacingXs,
    gap: n.spacing.spacingXs,
    width: "fit-content",
    border: o ? `1px solid ${n.colors.neutralSubtle}` : "none"
  })
), a = i("div", ({ $theme: n }) => ({
  display: "flex",
  flexDirection: "column",
  padding: n.spacing.spacingXs,
  border: `1px solid ${n.colors.neutralSubtle}`
})), l = i("div", ({ $theme: n }) => ({
  display: "flex",
  justifyContent: "space-around",
  gap: n.spacing.spacingXs
}));
export {
  l as StyledButtonsContainer,
  t as StyledContainer,
  a as StyledWrapper
};
//# sourceMappingURL=calendar.styles.js.map
