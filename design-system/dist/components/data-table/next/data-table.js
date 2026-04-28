import { jsx as n } from "react/jsx-runtime";
import { useState as y } from "react";
import { useIsScrollable as I } from "../../utils/hooks/use-is-scrollable.js";
import { useRefProxy as i } from "../../utils/hooks/use-ref-proxy.hook.js";
import { useSyncedRef as h } from "../../../hooks/use-synced-ref.hook.js";
import { DataTableContext as B } from "./contexts/data-table.context.js";
import { DataTableWrapper as S } from "./data-table-wrapper.js";
import { DEFAULT_ROW_HEIGHT as g } from "./data-table.constants.js";
import { useTable as H } from "./hooks/use-table.js";
import { useTableVirtualization as z } from "./hooks/use-table-virtualization.js";
import { isColumnDisabledByReason as E } from "./utils/data-table.utils.js";
import "../../truncated-text/truncated-text.js";
import "./contexts/data-table-disabled-row.context.js";
const k = ({
  tableRef: l,
  showHeaders: e = !0,
  showActionsColumn: m = !0,
  rowHeight: r = `${g}px`,
  isColumnDisabledByReason: s = E,
  ...t
}) => {
  const o = h({ externalRef: l }), f = i(), p = i(), [u, d] = y(-1), { horizontal: c } = I(o), { orderBy: R, orderDirection: b, columnsConfig: x, allColumnsConfig: C, data: a, handleOnChange: D } = H(t), { totalHeight: T, virtualItems: v } = z({
    data: a,
    rowHeight: r,
    showHeaders: e,
    tableRef: o
  });
  return /* @__PURE__ */ n(
    B.Provider,
    {
      value: {
        ...t,
        showHeaders: e,
        showActionsColumn: m,
        isScrollable: c,
        rowHeight: r,
        orderBy: R,
        orderDirection: b,
        hoveredRowIndex: u,
        columnsConfig: x,
        allColumnsConfig: C,
        data: a,
        tableRef: o,
        containerRef: f,
        listRef: p,
        virtualItems: v,
        totalHeight: T,
        handleOnChange: D,
        updateHoveredRowIndex: d,
        isColumnDisabledByReason: s
      },
      children: /* @__PURE__ */ n(S, {})
    }
  );
};
export {
  k as DataTable
};
//# sourceMappingURL=data-table.js.map
