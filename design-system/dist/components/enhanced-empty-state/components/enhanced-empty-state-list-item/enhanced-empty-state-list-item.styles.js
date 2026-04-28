import { themedStyled as a } from "../../../../themes/utilities.js";
const l = {
  iconStyles: {
    minHeight: "1rem",
    minWidth: "1rem"
  },
  textStyles: (t) => ({
    verticalAlign: "middle",
    ...t.typography.ParagraphXSmall,
    [t.mediaQuery.large]: {
      ...t.typography.ParagraphSmall
    }
  })
}, i = a("li", ({ $theme: t }) => ({
  display: "flex",
  gap: t.spacing.spacingXs,
  alignItems: "center"
}));
export {
  i as StyledListItem,
  l as styles
};
//# sourceMappingURL=enhanced-empty-state-list-item.styles.js.map
