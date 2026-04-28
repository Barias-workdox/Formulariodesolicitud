import { themedStyled as n } from "../../../../themes/utilities.js";
const r = n("div", ({ $theme: t, $isCollapsed: e }) => ({
  display: "flex",
  alignItems: e ? "flex-start" : "center",
  justifyContent: e ? "center" : "space-between",
  flexDirection: e ? "column" : "row",
  flexShrink: 0,
  gap: t.spacing.spacingMd,
  paddingBottom: t.spacing.spacingMd
}));
export {
  r as StyledSidebarHeader
};
//# sourceMappingURL=sidebar-header.styles.js.map
