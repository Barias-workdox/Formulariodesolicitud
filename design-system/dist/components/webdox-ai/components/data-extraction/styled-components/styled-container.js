import { themedStyled as t } from "../../../../../themes/utilities.js";
const p = t(
  "div",
  ({ $theme: i, $fullHeight: n }) => ({
    display: "flex",
    flexDirection: "column",
    gap: i.spacing.spacingXs,
    paddingBottom: i.spacing.spacing3xl,
    ...n && {
      height: "100%"
    }
  })
);
export {
  p as StyledContainer
};
//# sourceMappingURL=styled-container.js.map
