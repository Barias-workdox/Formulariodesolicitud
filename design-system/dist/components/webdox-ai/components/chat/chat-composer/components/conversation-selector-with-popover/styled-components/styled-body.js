import "../../../../../../../../themes/v3/light/theme.js";
import "../../../../../../../../themes/v3/dark/theme.js";
import "../../../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../../../themes/v3/tokens/breakpoints.js";
import { themedStyled as r } from "../../../../../../../../themes/utilities.js";
const n = r("div", ({ $theme: o }) => ({
  display: "flex",
  flexDirection: "column",
  gap: o.spacing.spacingMd,
  padding: o.spacing.spacingXs,
  borderLeft: `1px solid ${o.colors.neutralSubtle}`,
  borderRight: `1px solid ${o.colors.neutralSubtle}`,
  overflow: "hidden",
  height: "100%",
  backgroundColor: "transparent"
}));
export {
  n as StyledBody
};
//# sourceMappingURL=styled-body.js.map
