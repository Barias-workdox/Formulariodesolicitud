import { COMMON_HEIGHT_32 as a } from "../../../../constants/common.constants.js";
import { themedStyled as i } from "../../../../themes/utilities.js";
const l = i("div", ({ $theme: e }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  overflow: "hidden",
  flexWrap: "wrap",
  gap: e.spacing.spacingXs,
  [e.mediaQuery.medium]: {
    flexWrap: "nowrap"
  }
})), d = i("div", ({ $theme: e }) => ({
  display: "none",
  flex: 1,
  overflow: "hidden",
  alignItems: "center",
  [e.mediaQuery.medium]: {
    display: "flex"
  }
})), s = i("div", ({ $theme: e }) => ({
  gap: e.spacing.spacingXs,
  display: "flex",
  justifyContent: "end",
  alignItems: "center",
  flexShrink: 0
})), p = i("div", ({ $theme: e }) => ({
  display: "flex",
  alignItems: "center",
  height: a,
  padding: `0 ${e.spacing.spacingMd}`,
  backgroundColor: e.colors.neutralBase || e.colors.neutralWashed,
  borderRadius: e.spacing.spacing2xs,
  flexShrink: 0
})), t = i("div", ({ $theme: e }) => ({
  display: "flex",
  overflow: "hidden",
  [e.mediaQuery.medium]: {
    display: "none"
  }
}));
export {
  d as StyledFiltersWrapper,
  p as StyledItemsCounterWrapper,
  t as StyledMobileFilterWrapper,
  s as StyledOptionsWrapper,
  l as StyledToolbar
};
//# sourceMappingURL=page-header-toolbar.styles.js.map
