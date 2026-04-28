import { themedStyled as e } from "../../../../themes/utilities.js";
const i = e("div", ({ $theme: a }) => ({
  display: "flex",
  flex: 1,
  alignItems: "center",
  justifyContent: "right",
  gap: a.spacing.spacingXs,
  [a.mediaQuery.small]: {
    gap: a.spacing.spacingMd
  }
}));
export {
  i as PageHeaderEndEnhancerWrapper
};
//# sourceMappingURL=page-header-end-enhancer-wrapper.js.map
