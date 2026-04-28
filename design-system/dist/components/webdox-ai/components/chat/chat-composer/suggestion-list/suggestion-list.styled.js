import "../../../../../../themes/v3/light/theme.js";
import "../../../../../../themes/v3/dark/theme.js";
import "../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../themes/v3/tokens/breakpoints.js";
import { themedStyled as r } from "../../../../../../themes/utilities.js";
const s = r("ul", ({ $theme: o }) => ({
  display: "flex",
  flexDirection: "column",
  listStyle: "none",
  gap: o.spacing.spacing2xs,
  margin: 0,
  padding: o.spacing.spacingXs
})), c = r("li", ({ $theme: o }) => ({
  color: o.colors.neutralSubdued,
  ":focus": {
    color: o.colors.brand
  }
})), e = {
  color: "neutralSubdued",
  margin: 0,
  variant: "small-paragraph",
  fontWeight: "bold"
}, p = {
  showArrow: !0,
  ignoreBoundary: !0
};
export {
  c as StyledLi,
  s as StyledUl,
  e as truncateTextProps,
  p as truncateTooltipProps
};
//# sourceMappingURL=suggestion-list.styled.js.map
