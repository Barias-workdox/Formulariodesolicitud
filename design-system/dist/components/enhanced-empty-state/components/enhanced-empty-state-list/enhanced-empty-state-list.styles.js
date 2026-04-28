import { themedStyled as a } from "../../../../themes/utilities.js";
const g = a("ul", ({ $theme: i }) => ({
  display: "flex",
  flexDirection: "column",
  gap: i.spacing.spacing2xs,
  padding: 0,
  margin: 0,
  [i.mediaQuery.large]: {
    gap: i.spacing.spacingXs
  }
}));
export {
  g as StyledList
};
//# sourceMappingURL=enhanced-empty-state-list.styles.js.map
