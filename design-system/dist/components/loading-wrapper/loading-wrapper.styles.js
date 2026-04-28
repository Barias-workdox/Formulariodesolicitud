import { themedStyled as i } from "../../themes/utilities.js";
const o = i(
  "div",
  ({ $theme: n, $overrides: t }) => ({
    display: "flex",
    alignItems: "center",
    height: "100%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    ...n != null && n.spacing ? { gap: n.spacing.spacingXs } : {},
    ...t || {}
  })
), c = i(
  "div",
  ({ $overrides: n }) => ({
    ...n || {}
  })
);
export {
  o as StyledContainer,
  c as StyledSpinnerContainer
};
//# sourceMappingURL=loading-wrapper.styles.js.map
