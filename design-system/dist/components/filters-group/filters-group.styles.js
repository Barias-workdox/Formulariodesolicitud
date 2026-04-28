import { COMMON_HEIGHT_32 as s } from "../../constants/common.constants.js";
import { getCustomScrollBarStyles as a } from "../../themes/custom-scroll-bar.js";
import { themedStyled as e } from "../../themes/utilities.js";
const o = e("div", ({ $theme: t }) => ({
  display: "flex",
  overflow: "hidden",
  gap: t.spacing.spacingXs,
  alignItems: "flex-start"
})), r = e("div", ({ $theme: t }) => ({
  display: "flex",
  gap: t.spacing.spacingXs,
  overflowX: "auto",
  ...a(t)
})), d = e("div", ({ $theme: t }) => ({
  display: "flex",
  gap: t.spacing.spacingXs,
  alignItems: "center",
  height: s
}));
export {
  d as StyledExtrasWrapper,
  r as StyledFiltersWrapper,
  o as StyledRoot
};
//# sourceMappingURL=filters-group.styles.js.map
