import { SIDEBAR_TRANSITION_TIMING_FUNCTION as d, SIDEBAR_TRANSITION_DURATION as e, SIDEBAR_TRANSITION_PROPERTY as r, SIDEBAR_COLLAPSED_WIDTH as t, SIDEBAR_EXPANDED_WIDTH as l } from "../../sidebar.constants.js";
import { themedStyled as o } from "../../../../themes/utilities.js";
const c = o("aside", ({ $theme: i, $isCollapsed: n }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: `${n ? t : l}px`,
  transitionProperty: r,
  transitionDuration: e,
  transitionTimingFunction: d,
  overflow: "hidden",
  boxSizing: "border-box",
  willChange: "width",
  backgroundColor: i.colors.bgBase,
  paddingTop: i.spacing.spacingMd,
  paddingBottom: i.spacing.spacingMd,
  paddingLeft: i.spacing.spacingMd
})), g = o("div", ({ $theme: i, $isCollapsed: n, $isScrollable: a }) => ({
  display: "flex",
  justifyContent: "end",
  flexShrink: 0,
  flexGrow: 1,
  overflowY: "auto",
  overflowX: "hidden",
  paddingTop: n ? i.spacing.spacingXs : i.spacing.spacingMd,
  gap: n ? i.spacing.spacingXs : i.spacing.spacingMd,
  flexDirection: "column",
  boxShadow: a ? i.elevations.sm.up : "none"
})), S = o("div", ({ $theme: i }) => ({
  flexGrow: 1,
  overflowY: "auto",
  height: "100%",
  overflowX: "hidden",
  gap: i.spacing.spacingMd,
  display: "flex",
  flexDirection: "column",
  outline: "none",
  scrollbarWidth: "none",
  msOverflowStyle: "none",
  "::-webkit-scrollbar": {
    display: "none"
  }
}));
export {
  c as StyledSidebar,
  S as StyledSidebarContent,
  g as StyledSidebarFooter
};
//# sourceMappingURL=sidebar.styles.js.map
