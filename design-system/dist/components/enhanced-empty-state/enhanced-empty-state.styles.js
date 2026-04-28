import { themedStyled as e } from "../../themes/utilities.js";
const a = e("div", ({ $theme: i }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: i.spacing.spacingMd,
  padding: i.spacing.spacingMd,
  [i.mediaQuery.medium]: {
    flexDirection: "row"
  },
  [i.mediaQuery.large]: {
    gap: i.spacing.spacing2xs8
  }
})), d = e("img", ({ $theme: i }) => ({
  width: "100%",
  maxWidth: "300px",
  [i.mediaQuery.large]: {
    maxWidth: "460px"
  }
})), t = e("div", ({ $theme: i }) => ({
  display: "flex",
  flexDirection: "column",
  gap: i.spacing.spacingMd
}));
export {
  t as StyledBody,
  a as StyledContainer,
  d as StyledImg
};
//# sourceMappingURL=enhanced-empty-state.styles.js.map
