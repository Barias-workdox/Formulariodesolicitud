import { createContext as o } from "react";
import { noop as e } from "../../../../utils/noop.js";
const n = o({
  isScrollable: !1,
  hoveredRowIndex: 0,
  totalHeight: "",
  orderBy: "",
  orderDirection: "desc",
  data: [],
  columnsConfig: [],
  allColumnsConfig: [],
  virtualItems: [],
  rowsSelected: [],
  rowsDisabled: {},
  containerRef: void 0,
  listRef: void 0,
  handleOnChange: e,
  updateHoveredRowIndex: e,
  isColumnDisabledByReason: e
});
export {
  n as DataTableContext
};
//# sourceMappingURL=data-table.context.js.map
