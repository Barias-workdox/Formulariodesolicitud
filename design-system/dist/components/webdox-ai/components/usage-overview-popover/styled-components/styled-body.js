import "../../../../../themes/v3/light/theme.js";
import "../../../../../themes/v3/dark/theme.js";
import "../../../../../themes/v3/tokens/typography.js";
import "../../../../../themes/v3/tokens/breakpoints.js";
import { themedStyled as o } from "../../../../../themes/utilities.js";
const r = o(
  "div",
  ({ $theme: i, $showNotification: p }) => ({
    display: "flex",
    flexDirection: "column",
    gap: p ? i.spacing.spacingLg : i.spacing.spacingMd,
    marginBottom: i.spacing.spacingMd
  })
);
export {
  r as StyledBody
};
//# sourceMappingURL=styled-body.js.map
