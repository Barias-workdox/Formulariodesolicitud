import "../../../../../../../../themes/v3/light/theme.js";
import "../../../../../../../../themes/v3/dark/theme.js";
import "../../../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../../../themes/v3/tokens/breakpoints.js";
import { themedStyled as i } from "../../../../../../../../themes/utilities.js";
const l = i(
  "article",
  ({ $maxWidth: o, $theme: t }) => ({
    display: "flex",
    flexDirection: "column",
    maxWidth: o,
    width: "fit-content",
    background: t.colors.bgBase,
    gap: t.spacing.spacingXs
  })
);
export {
  l as StyledDefaultMessageLayout
};
//# sourceMappingURL=styled-default-message-layout.js.map
