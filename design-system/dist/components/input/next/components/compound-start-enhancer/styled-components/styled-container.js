import { DEFAULT_SIZE as e } from "../../../input.constants.js";
import { themedStyled as p } from "../../../../../../themes/utilities.js";
const a = (s) => ({
  sm: { gap: s.spacing.spacingXs, paddingLeft: s.spacing.spacingXs },
  md: { gap: s.spacing.spacingMd, paddingLeft: s.spacing.spacingMd }
}), o = p(
  "div",
  ({ $theme: s, $size: n, $withLeftPadding: t }) => {
    const i = a(s);
    return {
      ...i[n] || i[e],
      display: "flex",
      alignItems: "center",
      height: "100%",
      ...!t && { paddingLeft: 0 }
    };
  }
);
export {
  o as StyledContainer
};
//# sourceMappingURL=styled-container.js.map
