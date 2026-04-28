import "../../../../../themes/v3/light/theme.js";
import "../../../../../themes/v3/dark/theme.js";
import "../../../../../themes/v3/tokens/typography.js";
import "../../../../../themes/v3/tokens/breakpoints.js";
import { themedStyled as r } from "../../../../../themes/utilities.js";
const s = r("div", ({ $theme: o }) => ({
  display: "flex",
  padding: o.spacing.spacingMd,
  borderTop: `1px solid ${o.colors.neutralSubtle}`,
  backgroundColor: o.colors.bgBase
}));
export {
  s as StyledFooter
};
//# sourceMappingURL=styled-footer.js.map
