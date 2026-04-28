import { useVirtualizer as c } from "@tanstack/react-virtual";
import { DEFAULT_HEADER_HEIGHT as u, VIRTUALIZATION_OVERSCAN as g } from "../data-table.constants.js";
const p = ({
  data: t,
  rowHeight: r,
  tableRef: o,
  showHeaders: i
}) => {
  const n = t.length > 0, a = i ? u : 0, e = c({
    count: t.length,
    overscan: g,
    paddingStart: a,
    getScrollElement: () => o.current,
    estimateSize: () => parseInt(r.toString(), 10)
  }), l = n ? `${e.getTotalSize()}px` : "100%", s = e.getVirtualItems();
  return { totalHeight: l, virtualItems: s };
};
export {
  p as useTableVirtualization
};
//# sourceMappingURL=use-table-virtualization.js.map
