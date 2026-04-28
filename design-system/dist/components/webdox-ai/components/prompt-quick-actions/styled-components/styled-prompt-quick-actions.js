import { themedStyled as n } from "../../../../../themes/utilities.js";
import { QUICK_ACTION_MENU_WIDTH as t, QUICK_ACTION_LIST_CONTAINER_WIDTH as a, QUICK_ACTION_LIST_CONTAINER_HEIGHT as s, QUICK_ACTION_LIST_ITEM_HEIGHT as r, QUICK_ACTION_LIST_ITEM_TOOLTIP_WIDTH as c } from "../prompt-quick-actions.constants.js";
const p = n("div", ({ $theme: o }) => ({
  background: o.colors.bgBase,
  border: `1px solid ${o.colors.neutralSubtle}`,
  borderRadius: o.borders.radius200,
  boxShadow: o.lighting.shadow400,
  minWidth: t,
  overflow: "hidden",
  fontFamily: o.typography.font300.fontFamily
})), d = n("div", ({ $theme: o }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: `${o.spacing.spacingMd} ${o.spacing.spacingSm} ${o.spacing.spacingSm} ${o.spacing.spacingSm}`,
  borderBottom: `1px solid ${o.colors.neutralSubtle}`
})), g = n("span", ({ $theme: o }) => ({
  color: o.colors.neutralSubdued,
  fontSize: o.typography.font100.fontSize,
  fontWeight: 300,
  letterSpacing: "1px",
  textTransform: "uppercase"
})), u = n("span", ({ $theme: o }) => ({
  color: o.colors.brand,
  fontSize: o.typography.font100.fontSize,
  fontWeight: 300,
  letterSpacing: "1px",
  textTransform: "uppercase"
})), S = n("div", ({ $theme: o }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: `${o.spacing.spacingXs} ${o.spacing.spacingMd}`,
  backgroundColor: o.colors.neutralWashed,
  borderTop: `1px solid ${o.colors.neutralSubtle}`,
  fontSize: o.typography.ParagraphSmall.fontSize,
  color: o.colors.neutralSubdued
})), f = n("div", ({ $theme: o }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: o.spacing.spacing2xs
})), y = n("div", () => ({
  display: "flex",
  flexDirection: "column",
  maxHeight: s,
  width: a,
  overflowY: "auto",
  scrollbarWidth: "thin"
})), I = n(
  "div",
  ({ $theme: o, $isActive: i }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: `${o.spacing.spacingXs}`,
    minHeight: r,
    padding: `${o.spacing.spacingXs} ${o.spacing.spacingMd}`,
    cursor: "pointer",
    backgroundColor: i ? o.colors.neutralBase : "transparent",
    color: o.colors.neutral,
    transition: "background-color 0.2s ease"
  })
), T = n("div", ({ $theme: o }) => ({
  display: "flex",
  flexDirection: "column",
  gap: o.spacing.spacingSm,
  width: c,
  padding: `${o.spacing.spacing2xs}`
}));
export {
  S as StyledFooter,
  f as StyledFooterItem,
  d as StyledHeader,
  u as StyledHeaderCount,
  g as StyledHeaderTitle,
  I as StyledQuickActionsItem,
  y as StyledQuickActionsList,
  p as StyledQuickActionsMenu,
  T as StyledTooltip
};
//# sourceMappingURL=styled-prompt-quick-actions.js.map
