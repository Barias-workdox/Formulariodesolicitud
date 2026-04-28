import "../../../../themes/v3/light/theme.js";
import "../../../../themes/v3/dark/theme.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import { themedStyled as o } from "../../../../themes/utilities.js";
const t = o(
  "div",
  ({ $theme: r }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    cursor: "pointer",
    paddingLeft: r.spacing.spacingXs,
    borderRadius: r.borders.borderSm
  })
), l = {
  BaseButton: {
    style: ({ $theme: r }) => ({
      ":focus": {
        border: `2px solid ${r.colors.borderBase}`,
        outline: "none",
        borderRadius: r.borders.borderSm
      },
      ":focus-visible": {
        border: `2px solid ${r.colors.borderBase}`,
        outline: "none",
        borderRadius: r.borders.borderSm
      }
    })
  }
};
export {
  t as CloseIconWrapper,
  l as closeButtonFocusOverrides
};
//# sourceMappingURL=toast-close-icon.styles.js.map
