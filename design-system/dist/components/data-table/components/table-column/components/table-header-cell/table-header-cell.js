import { jsx as r, jsxs as T } from "react/jsx-runtime";
import { memo as g } from "react";
import { Draggable as _ } from "@carbon/icons-react";
import { headerCellStyles as v } from "../../../common/table-header-cell/table-header-cell.styles.js";
import { TableHeaderLabel as x } from "../../../common/table-header-label/table-header-label.js";
import { useCss as B } from "../../../../../utils/hooks/use-css.js";
import { OrderByButton as H } from "./components/order-by-button/order-by-button.js";
const $ = g(function({
  dataTestId: s = "data-table__header-cell",
  id: o,
  label: e,
  isSortable: t,
  isHovered: a,
  align: d,
  isDragging: m,
  isDraggable: i,
  isFixed: l,
  isRemovable: n,
  orderBy: c,
  orderDirection: p,
  dataType: f,
  handleOnChange: y,
  ...h
}) {
  const b = o === c, { containerStyles: u, dragIconContainerStyles: C, wrapperStyles: N } = B(v, {
    isHovered: a,
    align: d,
    isDragging: m,
    isDraggable: i,
    isFixed: l,
    isSortable: t
  });
  return /* @__PURE__ */ r(
    "div",
    {
      ...h,
      className: u,
      children: /* @__PURE__ */ T("div", { className: N, children: [
        /* @__PURE__ */ r("div", { className: C, children: /* @__PURE__ */ r(_, { size: 16 }) }),
        typeof e == "string" || typeof e == "number" ? /* @__PURE__ */ r(x, { children: e }) : e,
        /* @__PURE__ */ r(
          H,
          {
            dataTestId: `${s}__order-by`,
            id: o,
            label: e,
            orderDirection: p,
            isOrderedByThis: b,
            isSortable: t,
            isRemovable: n,
            dataType: f,
            handleOnChange: y
          }
        )
      ] })
    }
  );
});
export {
  $ as TableHeaderCell
};
//# sourceMappingURL=table-header-cell.js.map
