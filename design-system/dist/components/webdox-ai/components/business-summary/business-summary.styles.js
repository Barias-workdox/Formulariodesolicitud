import "@carbon/icons-react";
import { WEBDOX_AI_COLORS as s } from "../../constants/webdox-ai-colors.constants.js";
import "../../constants/webdox-ai-regex.constants.js";
import { COMMON_HEIGHT_32 as e } from "../../../../constants/common.constants.js";
import { themedStyled as n } from "../../../../themes/utilities.js";
const l = n("div", () => ({
  display: "flex",
  width: e,
  height: e,
  justifyContent: "center",
  alignItems: "center",
  background: `linear-gradient(45deg, ${s.secondaryColor}, ${s.primaryColor})`
})), p = n("div", ({ $theme: i }) => ({
  display: "flex",
  alignItems: "center",
  gap: i.spacing.spacingXs,
  marginBottom: i.spacing.spacingMd
})), c = n("div", () => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%"
})), g = n("div", ({ $theme: i }) => ({
  display: "flex",
  flexDirection: "column",
  [i.mediaQuery.medium]: {
    flexDirection: "row",
    gap: i.spacing.spacing2xs,
    alignItems: "center"
  }
})), u = n("div", ({ $theme: i }) => ({
  padding: i.spacing.spacingMd,
  display: "grid",
  gridTemplateRows: "auto 1fr auto",
  height: "100%",
  boxSizing: "border-box"
})), m = n("div", ({ $theme: i }) => ({
  display: "flex",
  flexDirection: "column",
  overflow: "auto",
  padding: `0 ${i.spacing.spacingXs}`,
  border: `1px solid ${i.colors.neutralSubtle}`,
  borderBottom: 0,
  borderTopLeftRadius: i.spacing.spacing2xs,
  borderTopRightRadius: i.spacing.spacing2xs
})), y = n("div", ({ $theme: i }) => ({
  display: "flex",
  padding: i.spacing.spacingXs,
  border: `1px solid ${i.colors.neutralSubtle}`,
  borderTop: 0,
  borderBottomLeftRadius: i.spacing.spacing2xs,
  borderBottomRightRadius: i.spacing.spacing2xs
})), f = n("div", () => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  width: "100%"
})), x = n("div", ({ $theme: i }) => ({
  display: "flex",
  alignItems: "center",
  gap: i.spacing.spacingXs
}));
export {
  l as StyledBrainIconContainer,
  u as StyledBusinessSummaryContainer,
  m as StyledBusinessSummaryContent,
  x as StyledBusinessSummaryFooterButtonContainer,
  y as StyledBusinessSummaryFooterContainer,
  f as StyledBusinessSummaryFooterContent,
  p as StyledBusinessSummaryHeader,
  c as StyledBusinessSummaryHeaderContent,
  g as StyledBusinessSummaryHeaderTitle
};
//# sourceMappingURL=business-summary.styles.js.map
