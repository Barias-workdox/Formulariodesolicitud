import "../../../../../themes/v3/light/theme.js";
import "../../../../../themes/v3/dark/theme.js";
import "../../../../../themes/v3/tokens/typography.js";
import "../../../../../themes/v3/tokens/breakpoints.js";
import { themedStyled as o } from "../../../../../themes/utilities.js";
import { LEFT_COLUMN_WIDTH as i } from "../legal-whisper-layout.constants.js";
const l = o(
  "div",
  ({ $isOpen: t }) => ({
    display: "flex",
    flexDirection: "column",
    width: "0px",
    maxWidth: i,
    transition: "width .4s cubic-bezier(0.22, 0.61, 0.36, 1)",
    overflow: "hidden",
    ...t && {
      width: i
    }
  })
);
export {
  l as StyledLeftColumnContainer
};
//# sourceMappingURL=styled-left-column-container.js.map
