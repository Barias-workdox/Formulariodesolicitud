import { DEFAULT_SIZE as i } from "../../../input.constants.js";
import { themedStyled as o } from "../../../../../../themes/utilities.js";
const a = (s) => ({
  sm: { padding: `0 ${s.spacing.spacing2xs}` },
  md: { padding: `0 ${s.spacing.spacingXs}` }
}), g = o(
  "span",
  ({ $theme: s, $size: n, $isReadOnly: t }) => {
    const e = a(s);
    return {
      ...e[n] || e[i],
      display: "flex",
      alignItems: "center",
      backgroundColor: t ? s.colors.neutralBase : s.colors.bgBase,
      height: "100%"
    };
  }
);
export {
  g as StyledLeading
};
//# sourceMappingURL=styled-leading.js.map
