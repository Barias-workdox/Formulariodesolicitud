import { themedStyled as a } from "../../../../../../../../themes/utilities.js";
const l = a("div", ({ $theme: o, $expanded: r, $neutralWashedHeader: n, $isOverlay: s }) => ({
  flex: 1,
  display: "flex",
  alignItems: "center",
  padding: o.spacing.spacingXs,
  justifyContent: "space-between",
  borderBottom: r ? `1px solid ${o.colors.neutralSubtle}` : "none",
  overflow: "hidden",
  gap: o.spacing.spacingXs,
  backgroundColor: n ? o.colors.neutralWashed : o.colors.bgBase,
  ...s && {
    border: `1px dashed ${o.colors.brand}`,
    backgroundColor: o.colors.brandWashed
  }
}));
export {
  l as StyledContainer
};
//# sourceMappingURL=styled-container.js.map
