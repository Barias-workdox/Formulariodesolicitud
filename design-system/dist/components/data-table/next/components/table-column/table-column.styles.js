import { DATA_TABLE_Z_INDEX as e, DEFAULT_COLUMN_WIDTH as h, ROW_SELECTION_COLUMN_WIDTH as m } from "../../data-table.constants.js";
import { themedStyled as d } from "../../../../../themes/utilities.js";
import { getTransitionStyles as i } from "../../../../../utils/styles.utils.js";
import { commonStyles as C } from "../../data-table.styles.js";
const p = {
  position: "absolute",
  height: "100%",
  width: "1px",
  zIndex: e.fixedColumn,
  top: 0,
  transition: i(["opacity"]),
  pointerEvents: "none"
}, v = d(
  "div",
  ({
    $isFirstColumn: n,
    $isLastColumn: f,
    $isDragging: r,
    $isFixed: o,
    $isScrollable: l,
    $isHeaderHovered: s,
    $isSelectable: u,
    $isResizeHovered: a,
    $isResizable: c,
    $width: x,
    $minWidth: b,
    $maxWidth: y,
    $theme: t
  }) => ({
    ...C,
    display: "flex",
    position: o ? "sticky" : "relative",
    zIndex: o ? e.fixedColumn : e.base,
    left: u && o ? m : 0,
    width: x ?? (n ? h : "max-content"),
    minWidth: b,
    maxWidth: n ? "unset" : y,
    flexGrow: 1,
    backgroundColor: s || r ? t.colors.neutralWashed : t.colors.bgBase,
    transition: i(["box-shadow", "background-color"]),
    boxShadow: o && l ? "0px 8px 24px 0 rgba(149, 157, 165, 0.20)" : r ? "0 4px 8px rgba(0,0,0,.25)" : "0 0 0 0 transparent",
    outline: r ? `2px solid ${t.colors.brand}` : void 0,
    ":only-child": {
      maxWidth: "unset"
    },
    // Left resize line
    ...!n && c && {
      "::before": {
        content: '""',
        left: 0,
        backgroundColor: t.colors.neutralSubtle,
        opacity: 0,
        ...p
      },
      ":hover::before": {
        opacity: 1
      }
    },
    // Right resize line
    ...!f && (c || o) && {
      "::after": {
        content: '""',
        right: 0,
        backgroundColor: a ? t.colors.neutralDepressed : t.colors.neutralSubtle,
        opacity: o && l || a ? 1 : 0,
        ...p
      },
      ":hover::after": {
        opacity: 1
      }
    }
  })
), w = d("div", {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%",
  flex: 1
});
export {
  v as StyledTableColumn,
  w as StyledTableColumnContent
};
//# sourceMappingURL=table-column.styles.js.map
