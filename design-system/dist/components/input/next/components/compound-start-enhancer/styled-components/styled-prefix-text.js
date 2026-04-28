import { getSizeProperties as t } from "../../../input.styles.js";
import { themedStyled as i } from "../../../../../../themes/utilities.js";
const s = i(
  "span",
  ({ $theme: e, $size: r, $disabled: o }) => ({
    ...t(r, e).input,
    color: o ? e.colors.neutralDepressed : e.colors.neutral,
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    lineHeight: "normal"
  })
);
export {
  s as StyledPrefixText
};
//# sourceMappingURL=styled-prefix-text.js.map
