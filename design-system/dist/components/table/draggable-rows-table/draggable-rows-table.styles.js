import { DEFAULT_FONT as r } from "../../../themes/v3/tokens/typography.js";
import "../../../themes/v3/tokens/breakpoints.js";
const l = (o, t, e) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  height: "100%",
  overflow: "hidden",
  // change background color if dragging
  backgroundColor: t ? o.colors.bgBase : "transparent",
  ...r,
  // styles we need to apply on draggable items
  ...e
}), i = () => ({
  width: "100%",
  height: "100%",
  tableLayout: "auto",
  borderSpacing: 0
});
export {
  i as tableContainerStyles,
  l as tableRowStyles
};
//# sourceMappingURL=draggable-rows-table.styles.js.map
