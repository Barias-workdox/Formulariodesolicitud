import { themedStyled as t } from "../../../../themes/utilities.js";
const s = t(
  "div",
  ({ $theme: e, $backgroundColor: o, $opacity: n }) => ({
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    inset: 0,
    "::before": {
      content: '""',
      position: "absolute",
      inset: 0,
      opacity: n,
      backgroundColor: o || e.colors.bgBase
    }
  })
), a = t("div", {
  position: "relative"
}), r = t("span", () => ({
  zIndex: 1,
  height: "auto"
}));
export {
  s as StyledContainer,
  a as StyledRelativeContainer,
  r as StyledSpinnerContainer
};
//# sourceMappingURL=loading-wrapper-overlayed.styles.js.map
