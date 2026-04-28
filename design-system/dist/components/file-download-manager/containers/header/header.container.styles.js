import { themedStyled as e } from "../../../../themes/utilities.js";
const s = e(
  "div",
  ({ $theme: a, $isDraggable: i }) => ({
    position: "sticky",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: a.spacing.spacingXs,
    padding: a.spacing.spacingXs,
    height: "24px",
    backgroundColor: a.colors.neutralWashed,
    cursor: i ? "grab" : "default"
  })
), t = e("div", ({ $theme: a }) => ({
  display: "flex",
  gap: a.spacing.spacingXs
}));
export {
  s as StyledHeaderContainer,
  t as StyledHeaderRightContainer
};
//# sourceMappingURL=header.container.styles.js.map
