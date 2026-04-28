import "../../../../../themes/v3/light/theme.js";
import "../../../../../themes/v3/dark/theme.js";
import "../../../../../themes/v3/tokens/typography.js";
import "../../../../../themes/v3/tokens/breakpoints.js";
import { themedStyled as i } from "../../../../../themes/utilities.js";
const s = i("div", ({ $theme: p }) => ({
  display: "flex",
  flexDirection: "column",
  gap: p.spacing.spacingMd,
  padding: `${p.spacing.spacingMd} ${p.spacing.spacingMd} ${p.spacing.spacingXl}`
}));
export {
  s as StyledControlsWrapper
};
//# sourceMappingURL=styled-controls-wrapper.js.map
