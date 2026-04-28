import { jsx as p } from "react/jsx-runtime";
import { memo as N, useCallback as m } from "react";
import { DataTableDisabledRowProvider as n } from "../../../../providers/data-table-disabled-row.provider.js";
import { useCss as q } from "../../../../../../utils/hooks/use-css.js";
import { cellStyles as A } from "../../../common/table-cell/table-cell.styles.js";
const L = N(function({
  dataTestId: s = "data-table__cell",
  children: c,
  isHeaderHovered: f,
  align: i,
  disableReason: d = "",
  isRowHovered: P,
  isRowChecked: h,
  isRowClickable: u,
  isRowDisabled: a = !1,
  isDragging: y,
  height: b,
  role: T,
  rowIndex: o,
  tabIndex: g,
  onClick: t,
  onContextMenu: l,
  onKeyDown: e,
  ...S
}) {
  const { containerStyles: _ } = q(A, {
    isHeaderHovered: f,
    isRowHovered: P,
    isRowChecked: h,
    isRowDisabled: a,
    isDragging: y,
    align: i,
    isRowClickable: u,
    height: b
  }), j = m(
    (r) => {
      r.preventDefault(), l == null || l(r, o);
    },
    [l, o]
  ), z = m(
    (r) => {
      r.stopPropagation(), t && !a && t(r);
    },
    [t, a]
  ), E = m(
    (r) => {
      (r.key === "Enter" || r.key === " ") && t && e && !a && (r.preventDefault(), r.stopPropagation(), t(r), e(r));
    },
    [t, e, a]
  );
  return /* @__PURE__ */ p(
    n,
    {
      isRowDisabled: a,
      disableReason: d,
      children: /* @__PURE__ */ p(
        "div",
        {
          "data-testid": s,
          className: _,
          onContextMenu: j,
          ...t ? {
            onClick: z,
            onKeyDown: E,
            role: T ?? "button",
            tabIndex: g ?? 0
          } : {},
          ...S,
          children: c
        }
      )
    }
  );
});
export {
  L as TableCell
};
//# sourceMappingURL=table-cell.js.map
