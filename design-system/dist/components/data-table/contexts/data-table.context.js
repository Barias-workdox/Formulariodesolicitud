import { createContext as o } from "react";
import { noop as e } from "../../../utils/noop.js";
const r = o({
  isScrollable: !1,
  hoveredRowIndex: 0,
  containerRef: void 0,
  listRef: void 0,
  rowsSelected: [],
  rowsDisabled: {},
  virtualItems: [],
  totalHeight: "",
  translateDisableReason: void 0,
  handleOnChange: e,
  updateHoveredRowIndex: e
});
export {
  r as DataTableContext
};
//# sourceMappingURL=data-table.context.js.map
