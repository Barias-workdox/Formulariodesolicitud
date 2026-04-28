import { jsx as e, jsxs as d } from "react/jsx-runtime";
import { DragDropContext as R, Droppable as $, Draggable as P } from "@hello-pangea/dnd";
import "../../../themes/v3/light/theme.js";
import "../../../themes/v3/dark/theme.js";
import "../../../themes/v3/tokens/typography.js";
import "../../../themes/v3/tokens/breakpoints.js";
import { themedUseStyletron as w } from "../../../themes/utilities.js";
import { tableRowStyles as h, tableContainerStyles as y } from "./draggable-rows-table.styles.js";
const k = ({
  "data-testid": n = "design-system__draggable-rows-table--component",
  onDragEnd: f,
  headers: i,
  items: c,
  droppableId: s,
  divisionLine: b,
  isDragDisabled: p = !1,
  overrides: r = {}
}) => {
  const [g, m] = w();
  return /* @__PURE__ */ e(R, { onDragEnd: f, children: /* @__PURE__ */ e(
    $,
    {
      droppableId: s,
      renderClone: (t, o, a) => (
        // DIV tag used to avoid `validateDOMNesting` warning
        /* @__PURE__ */ e(
          "div",
          {
            ref: t.innerRef,
            ...t.draggableProps,
            ...t.dragHandleProps,
            style: h(m, o.isDragging, {
              ...t.draggableProps.style,
              ...r.Row ?? {}
            }),
            children: /* @__PURE__ */ e("table", { className: g(y()), children: /* @__PURE__ */ e("tbody", { children: /* @__PURE__ */ e("tr", { children: c[a.source.index] }) }) })
          }
        )
      ),
      children: (t) => /* @__PURE__ */ d(
        "table",
        {
          "data-testid": `${n}-table`,
          ref: t.innerRef,
          className: g({
            ...y(),
            ...r.Root
          }),
          children: [
            /* @__PURE__ */ e("thead", { "data-testid": `${n}-table-head`, children: /* @__PURE__ */ e("tr", { children: i }) }),
            /* @__PURE__ */ d("tbody", { "data-testid": `${n}-table-body`, children: [
              b && /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e(
                "td",
                {
                  colSpan: i.length,
                  className: g(r.DivisionContainer),
                  children: b
                }
              ) }),
              c.map((o, a) => /* @__PURE__ */ e(
                P,
                {
                  draggableId: `draggable-table-item-id-${s}-${a}`,
                  index: a,
                  isDragDisabled: p,
                  children: (l, D) => /* @__PURE__ */ e(
                    "tr",
                    {
                      ref: l.innerRef,
                      ...l.draggableProps,
                      ...l.dragHandleProps,
                      style: h(m, D.isDragging, {
                        ...l.draggableProps.style,
                        ...r.Row ?? {}
                      }),
                      children: o
                    }
                  )
                },
                `draggable-table-item-key-${s}-${a}`
              )),
              t.placeholder
            ] })
          ]
        }
      )
    }
  ) });
};
export {
  k as DraggableRowsTable
};
//# sourceMappingURL=draggable-rows-table.js.map
