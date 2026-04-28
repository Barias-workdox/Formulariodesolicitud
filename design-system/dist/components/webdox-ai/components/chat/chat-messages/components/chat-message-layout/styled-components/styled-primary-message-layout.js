import "../../../../../../../../themes/v3/light/theme.js";
import "../../../../../../../../themes/v3/dark/theme.js";
import "../../../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../../../themes/v3/tokens/breakpoints.js";
import { themedStyled as i } from "../../../../../../../../themes/utilities.js";
const s = i(
  "article",
  ({ $theme: o, $maxWidth: t }) => ({
    display: "flex",
    flexDirection: "column",
    maxWidth: t,
    background: o.colors.bgBase,
    width: "auto",
    gap: o.spacing.spacingXs
  })
);
export {
  s as StyledPrimaryMessageLayout
};
//# sourceMappingURL=styled-primary-message-layout.js.map
