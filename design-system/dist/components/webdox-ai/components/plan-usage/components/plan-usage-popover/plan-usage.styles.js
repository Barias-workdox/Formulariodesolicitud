import { themedStyled as n } from "../../../../../../themes/utilities.js";
const t = n("div", ({ $theme: e }) => ({
  display: "flex",
  flexDirection: "column",
  width: "420px",
  padding: e.spacing.spacingSm,
  gap: e.spacing.spacingSm
})), l = n("div", ({ $theme: e }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  background: e.colors.positiveSubtle,
  borderRadius: e.borders.borderSm,
  height: "32px",
  width: "32px"
})), a = n("div", () => ({
  marginLeft: "auto"
})), o = n("div", ({ $theme: e }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: e.spacing.spacingSm
})), s = n("div", () => ({
  display: "flex",
  flexDirection: "column"
})), d = n("div", ({ $theme: e }) => ({
  display: "flex",
  flexDirection: "column",
  gap: e.spacing.spacingSm
})), c = n("div", ({ $theme: e }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  borderTop: `1px solid ${e.colors.neutralSubtle}`,
  padding: `${e.spacing.spacingMd} 0`
}));
export {
  c as StyledPlanUsageAction,
  a as StyledPlanUsageCloseButton,
  t as StyledPlanUsageContainer,
  d as StyledPlanUsageContent,
  o as StyledPlanUsageHeader,
  l as StyledPlanUsageHeaderIcon,
  s as StyledPlanUsageTitle
};
//# sourceMappingURL=plan-usage.styles.js.map
