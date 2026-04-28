import "../../../../../themes/v3/light/theme.js";
import "../../../../../themes/v3/dark/theme.js";
import "../../../../../themes/v3/tokens/typography.js";
import "../../../../../themes/v3/tokens/breakpoints.js";
import { themedStyled as r } from "../../../../../themes/utilities.js";
import { RIGHT_COLUMN_WIDTH as t } from "../legal-whisper-layout.constants.js";
const a = r(
  "div",
  ({ $theme: o, $isOpen: i }) => ({
    display: "flex",
    flexDirection: "column",
    width: "0px",
    backgroundColor: o.colors.neutralWashed,
    maxWidth: t,
    transition: "width .4s cubic-bezier(0.22, 0.61, 0.36, 1)",
    ...i && {
      width: t,
      borderLeft: `1px solid ${o.colors.neutralSubtle}`
    }
  })
);
export {
  a as StyledRightColumnContainer
};
//# sourceMappingURL=styled-right-column-container.js.map
