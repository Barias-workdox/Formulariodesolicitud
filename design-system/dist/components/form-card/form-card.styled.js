import { COMMON_HEIGHT_32 as n } from "../../constants/common.constants.js";
import { themedStyled as o } from "../../themes/utilities.js";
const l = {
  lineHeight: "150%",
  letterSpacing: "1px",
  textTransform: "uppercase"
}, p = {
  BaseButton: { style: () => ({ width: n, height: n }) }
}, c = o(
  "div",
  ({ $theme: i, $hasElevation: d = !0, $height: e = "100%", $width: a = "100%", $maxWidth: r = "700px" }) => ({
    width: a,
    height: e,
    maxWidth: r,
    border: `1px solid ${i.colors.neutralSubtle}`,
    display: "flex",
    flexDirection: "column",
    borderRadius: i.borders.borderMd,
    ...d && {
      boxShadow: i.elevations.md.down
    },
    [`@media (max-width: ${i.breakpoints.small}px)`]: {
      width: "100%",
      height: "100%"
    }
  })
), g = o("div", ({ $theme: i }) => ({
  padding: i.spacing.spacingXs,
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  minHeight: 0
})), x = o("div", ({ $theme: i }) => ({
  display: "flex",
  flexDirection: "column",
  flexShrink: 0,
  background: `linear-gradient(180deg, ${i.colors.brandBase} 74.52%, ${i.colors.bgBase} 100%)`,
  borderTopLeftRadius: i.borders.borderSm,
  borderTopRightRadius: i.borders.borderSm
})), f = o("div", ({ $theme: i }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: `1px solid ${i.colors.neutralSubtle}`,
  flexShrink: 0,
  padding: i.spacing.spacingXs
})), y = o("div", ({ $theme: i }) => ({
  display: "flex",
  alignItems: "center",
  gap: i.spacing.spacingXs
})), m = o("div", () => ({
  display: "flex",
  alignItems: "center"
})), S = o("div", ({ $theme: i }) => ({
  display: "flex",
  flexDirection: "column",
  gap: i.spacing.spacingXs,
  flexShrink: 0,
  paddingTop: i.spacing.spacingSm,
  paddingBottom: i.spacing.spacingXl,
  paddingLeft: i.spacing.spacingXs,
  paddingRight: i.spacing.spacingXs
})), b = o("div", ({ $theme: i }) => ({
  flexGrow: 1,
  overflowY: "auto",
  minHeight: 0,
  padding: i.spacing.spacingXs
})), u = o("div", ({ $theme: i }) => ({
  borderTop: `1px solid ${i.colors.neutralSubtle}`,
  gap: i.spacing.spacingXs,
  display: "flex",
  flexDirection: "column",
  flexShrink: 0,
  padding: i.spacing.spacingXs
})), v = o("div", () => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
})), C = o("div", ({ $theme: i }) => ({
  display: "flex",
  gap: i.spacing.spacingXs
}));
export {
  b as FormCardBodyStyled,
  c as FormCardContainerStyled,
  S as FormCardDescriptionStyled,
  C as FormCardFooterActionButtonsStyled,
  v as FormCardFooterActionStyled,
  u as FormCardFooterStyled,
  x as FormCardHeaderStyled,
  y as FormCardNavLeftStyled,
  m as FormCardNavRightStyled,
  f as FormCardNavStyled,
  g as FormCardTopContainerStyled,
  p as backButtonOverrides,
  l as textStyles
};
//# sourceMappingURL=form-card.styled.js.map
