import { themedStyled as e } from "../../../../themes/utilities.js";
const i = e(
  "header",
  ({ $theme: o, $showBorder: l }) => ({
    display: "flex",
    flexDirection: "column",
    gap: o.spacing.spacingMd,
    backgroundColor: o.colors.bgBase,
    ...l && {
      borderBottom: `1px solid ${o.colors.neutralSubtle}`,
      paddingBottom: o.spacing.spacingMd
    }
  })
), n = e("div", ({ $theme: o }) => ({
  display: "flex",
  alignItems: "center",
  gap: o.spacing.spacingMd
})), d = e("div", ({ $theme: o }) => ({
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  gap: o.spacing.spacingXs
}));
export {
  d as StyledLeftColumn,
  i as StyledRoot,
  n as StyledTitleWrapper
};
//# sourceMappingURL=page-header-layout.styles.js.map
