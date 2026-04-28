import { themedStyled as e } from "../../themes/utilities.js";
const r = (o) => ({
  Content: { style: { backgroundColor: o.colors.neutralWashed } },
  Title: { style: { fontSize: o.typography.ParagraphMedium.fontSize } }
}), a = e("div", ({ $theme: o }) => ({
  display: "grid",
  gap: o.spacing.spacingXs
}));
export {
  a as StyledContainer,
  r as collapsibleBoxOverrides
};
//# sourceMappingURL=decision-tree.styles.js.map
