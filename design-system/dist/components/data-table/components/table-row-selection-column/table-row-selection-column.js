import { jsxs as T, jsx as h } from "react/jsx-runtime";
import { useMemo as j, useCallback as w } from "react";
import { Checkbox as M } from "../../../checkbox/checkbox.js";
import { useDataTableContext as $ } from "../../hooks/use-data-table-context.js";
import { useCss as x } from "../../../utils/hooks/use-css.js";
import { renderVirtualizedRows as L } from "../../utils/data-table.utils.js";
import { TableRowSelectionCell as O } from "./components/table-row-selection-cell/table-row-selection-cell.js";
import { TableRowsSelectionHeaderCell as B } from "./components/table-rows-selection-header-cell/table-rows-selection-header-cell.js";
import { rowSelectionColumnsStyles as E } from "./table-row-selection-column.styles.js";
const U = () => {
  var R;
  const {
    "data-testid": r,
    isScrollable: S,
    columnsConfig: d,
    rowsSelected: n = [],
    rowsDisabled: c = {},
    data: o,
    showHeaders: u,
    virtualItems: k,
    hoveredRowIndex: f,
    rowHeight: p,
    updateHoveredRowIndex: m,
    handleOnChange: C,
    isColumnDisabledByReason: g
  } = $(), v = !((R = d == null ? void 0 : d[0]) != null && R.isFixed) && S, { containerStyles: z } = x(E, {
    showColumnShadow: v
  }), s = j(() => new Set(n), [n]), i = w(
    (e) => {
      C({
        event: "row-selection",
        payload: {
          rowsSelected: e
        }
      });
    },
    [C]
  ), y = w(
    (e) => {
      const l = s.has(e) ? n.filter((t) => t !== e) : [...n, e].sort();
      i(l);
    },
    [n, s, i]
  ), D = w(() => {
    if (s.size > 0) {
      i([]);
      return;
    }
    const e = (o == null ? void 0 : o.length) ?? 0, l = Array.from({ length: e }, (t, a) => a).filter(
      (t) => !(t in c)
    );
    i(l);
  }, [o == null ? void 0 : o.length, c, s.size, i]), b = ((o == null ? void 0 : o.length) ?? 0) - Object.keys(c).length, I = s.size > 0 && s.size === b, A = s.size > 0 && s.size < b;
  return /* @__PURE__ */ T("div", { className: z, children: [
    u && /* @__PURE__ */ h(
      B,
      {
        "data-testid": r ? `${r}--checkbox-all` : void 0,
        onClickAll: D,
        isAllCheck: I,
        isIndeterminate: A
      }
    ),
    L({
      virtualItems: k,
      renderRow: (e) => {
        const l = s.has(e), t = c[e], a = e in c, H = a && g(t, "selection");
        return /* @__PURE__ */ h(
          O,
          {
            disableReason: t,
            isRowHovered: f === e,
            isRowChecked: l,
            isRowDisabled: H,
            height: p,
            onMouseEnter: () => m(e),
            onMouseLeave: () => m(-1),
            children: /* @__PURE__ */ h(
              M,
              {
                "data-testid": r ? `${r}--checkbox-${e}` : void 0,
                checked: l,
                onChange: () => y(e),
                disabled: a
              }
            )
          },
          e
        );
      }
    })
  ] });
};
export {
  U as TableRowSelectionColumn
};
//# sourceMappingURL=table-row-selection-column.js.map
