import { jsxs as f, jsx as l } from "react/jsx-runtime";
import { useDataTableContext as p } from "../../hooks/use-data-table-context.js";
import { useCss as v } from "../../../utils/hooks/use-css.js";
import { renderVirtualizedRows as D } from "../../utils/data-table.utils.js";
import { TableActionCell as H } from "./components/table-actions-column-cell/table-actions-column-cell.js";
import { TableActionsColumnHeaderCell as g } from "./components/table-actions-column-header-cell/table-actions-column-header-cell.js";
import { actionsColumnsStyles as A } from "./table-actions-column.styles.js";
const x = () => {
  const {
    data: i,
    rowHeight: e,
    rowsDisabled: s = {},
    hoveredRowIndex: n,
    isScrollable: a,
    columnsConfig: m,
    allColumnsConfig: d,
    showHeaders: c,
    showHeaderActionButton: u = !0,
    virtualItems: w,
    handleOnChange: b,
    updateHoveredRowIndex: t,
    isColumnDisabledByReason: C
  } = p(), { containerStyles: h } = v(A, {
    $isScrollable: a,
    $rowHeight: e
  });
  return /* @__PURE__ */ f("div", { className: h, children: [
    c && /* @__PURE__ */ l(
      g,
      {
        columnsConfig: m,
        allColumnsConfig: d,
        handleOnChange: b,
        showButton: u
      }
    ),
    D({
      virtualItems: w,
      renderRow: (o) => {
        const r = s[o], R = o in s && C(r, "actions");
        return /* @__PURE__ */ l(
          H,
          {
            disableReason: r,
            isRowDisabled: R,
            isRowHovered: n === o,
            height: e,
            onMouseEnter: () => {
              t(o);
            },
            onMouseLeave: () => {
              t(void 0);
            },
            children: i[o].at(-1)
          },
          o
        );
      }
    })
  ] });
};
export {
  x as TableActionsColumn
};
//# sourceMappingURL=table-actions-column.js.map
