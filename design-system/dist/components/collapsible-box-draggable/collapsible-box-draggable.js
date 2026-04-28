import { jsxs as C, jsx as a } from "react/jsx-runtime";
import { useState as f } from "react";
import { DndContext as I, DragOverlay as S } from "@dnd-kit/core";
import { restrictToVerticalAxis as y } from "@dnd-kit/modifiers";
import { SortableContext as B, verticalListSortingStrategy as E } from "@dnd-kit/sortable";
import { CollapsibleBox as j } from "../collapsible-box/next/collapsible-box.js";
import { Panel as A } from "../collapsible-box/next/components/panel/panel.js";
import { DraggablePanel as O } from "../collapsible-box/next/components/draggable-panel/draggable-panel.js";
import { reorder as $ } from "../utils/arrays/arrays.utils.js";
const H = ({
  "data-testid": s = "collapsible-box-draggable",
  panels: r = [],
  expanded: b = [],
  onDragEnd: u
}) => {
  const [d, o] = f(null), [g, D] = f(b), c = r.find(({ id: e }) => e === d), h = ({ active: e }) => {
    o(e.id);
  }, P = ({ active: e, over: t }) => {
    var n, m, x, p;
    let i = r;
    if (!t) {
      o(null);
      return;
    }
    e.id !== t.id && (i = $(
      r,
      r.findIndex(({ id: l }) => l === e.id),
      r.findIndex(({ id: l }) => l === t.id)
    )), o(null), u({
      panels: i,
      fromIndex: (m = (n = e.data.current) == null ? void 0 : n.sortable) == null ? void 0 : m.index,
      toIndex: (p = (x = t.data.current) == null ? void 0 : x.sortable) == null ? void 0 : p.index
    });
  };
  return /* @__PURE__ */ C(
    I,
    {
      "data-testid": `${s}-dnd-context`,
      onDragStart: h,
      onDragEnd: P,
      modifiers: [y],
      children: [
        /* @__PURE__ */ a(
          B,
          {
            "data-testid": `${s}-sortable-context`,
            items: r,
            strategy: E,
            children: /* @__PURE__ */ a(
              j,
              {
                accordion: !1,
                expanded: g,
                onChange: ({ expanded: e }) => D(e),
                children: r.map(({ id: e, panelProps: { children: t, ...i } }) => {
                  const n = e === d;
                  return /* @__PURE__ */ a(
                    O,
                    {
                      draggableId: e,
                      isOverlay: n,
                      isDraggable: !n,
                      ...i,
                      children: t()
                    },
                    e
                  );
                })
              }
            )
          }
        ),
        /* @__PURE__ */ a(S, { children: d && /* @__PURE__ */ a(
          A,
          {
            isDragging: !0,
            isDraggable: !0,
            expanded: g.includes(d),
            ...c.panelProps,
            children: c.panelProps.children()
          }
        ) })
      ]
    }
  );
};
export {
  H as CollapsibleBoxDraggable
};
//# sourceMappingURL=collapsible-box-draggable.js.map
