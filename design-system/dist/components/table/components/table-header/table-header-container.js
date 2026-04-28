import "../../../../themes/v3/light/theme.js";
import "../../../../themes/v3/dark/theme.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import { themedStyled as r } from "../../../../themes/utilities.js";
import "react/jsx-runtime";
import "baseui/block";
import { tableCellStyles as i } from "../table-cell/table-cell.styles.js";
const h = r(
  "th",
  ({ $width: t, $theme: o }) => ({
    ...i(o),
    width: t,
    textAlign: "start",
    paddingTop: 0,
    paddingBottom: 0
  })
);
export {
  h as TableHeaderContainer
};
//# sourceMappingURL=table-header-container.js.map
