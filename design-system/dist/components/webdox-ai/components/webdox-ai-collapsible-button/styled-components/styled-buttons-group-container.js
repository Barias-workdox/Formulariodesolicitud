import { themedStyled as a } from "../../../../../themes/utilities.js";
const g = a(
  "div",
  ({ $theme: p, $direction: n }) => ({
    display: "flex",
    flexDirection: n,
    gap: p.spacing.spacingMd,
    ...n === "column" && {
      paddingBottom: p.spacing.spacingMd,
      paddingTop: p.spacing.spacingSm
    },
    ...n === "row" && {
      paddingLeft: p.spacing.spacingMd,
      paddingRight: p.spacing.spacingSm
    }
  })
);
export {
  g as StyledButtonsGroupContainer
};
//# sourceMappingURL=styled-buttons-group-container.js.map
