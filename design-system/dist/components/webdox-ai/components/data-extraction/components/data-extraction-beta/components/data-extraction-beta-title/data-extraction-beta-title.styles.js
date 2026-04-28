import { WEBDOX_AI_COLORS as e } from "../../../../../../constants/webdox-ai-colors.constants.js";
import { themedStyled as t } from "../../../../../../../../themes/utilities.js";
const r = t("div", () => ({
  display: "flex",
  width: "24px",
  height: "24px",
  justifyContent: "center",
  alignItems: "center",
  background: `linear-gradient(45deg, ${e.secondaryColor}, ${e.tertiaryColor})`
})), a = t("div", ({ $theme: n }) => ({
  display: "flex",
  alignItems: "center",
  gap: n.spacing.spacingXs
})), d = t("span", () => ({
  fontWeight: 500,
  textDecoration: "underline"
}));
export {
  a as StyledContainer,
  r as StyledIconContainer,
  d as StyledStrongText
};
//# sourceMappingURL=data-extraction-beta-title.styles.js.map
