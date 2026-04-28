import { SEARCH_MAX_WIDTH as d, SEARCH_MIN_WIDTH as o } from "../../page-header.constants.js";
import { themedStyled as i } from "../../../../themes/utilities.js";
const l = i(
  "div",
  ({ $theme: e, $isOpen: t }) => ({
    width: "100%",
    maxWidth: t ? d : o,
    display: "none",
    transition: "max-width 0.25s ease-in-out",
    [e.mediaQuery.large]: {
      display: "flex",
      flexDirection: "column"
    }
  })
), p = i(
  "div",
  ({ $theme: e }) => ({
    display: "flex",
    [e.mediaQuery.large]: {
      display: "none"
    }
  })
);
export {
  l as DesktopStyledWrapper,
  p as MobileStyledWrapper
};
//# sourceMappingURL=page-header-search.styles.js.map
