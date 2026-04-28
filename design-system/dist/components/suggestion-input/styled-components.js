import { themedStyled as r } from "../../themes/utilities.js";
import { SUGGESTION_LIST_MAX_HEIGHT as l } from "./suggestion-input.constants.js";
const n = r(
  "div",
  ({ $theme: o, $width: t }) => ({
    ...o.typography.ParagraphMedium,
    width: t,
    backgroundColor: o.colors.bgBase,
    color: o.colors.neutral
  })
), d = r("ul", ({ $theme: o }) => ({
  listStyle: "none",
  margin: "0",
  padding: "0",
  background: o.colors.bgBase,
  maxHeight: l,
  overflowY: "auto",
  scrollbarWidth: "none",
  ":hover": {
    scrollbarWidth: "thin"
  }
}));
export {
  n as StyledContentWrapper,
  d as StyledList
};
//# sourceMappingURL=styled-components.js.map
