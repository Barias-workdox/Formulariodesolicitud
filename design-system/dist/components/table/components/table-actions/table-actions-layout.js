import "../../../../themes/v3/light/theme.js";
import "../../../../themes/v3/dark/theme.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import { themedStyled as t } from "../../../../themes/utilities.js";
const c = t(
  "div",
  ({ $theme: i, $style: o = {} }) => ({
    display: "flex",
    flexDirection: "row",
    gap: i.spacing.spacingMd,
    ...o
  })
);
export {
  c as TableActionsLayout
};
//# sourceMappingURL=table-actions-layout.js.map
