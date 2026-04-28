import { jsx as t } from "react/jsx-runtime";
import { forwardRef as g } from "react";
import { useSortable as b } from "@dnd-kit/sortable";
import { CSS as c } from "@dnd-kit/utilities";
import { Panel as u } from "../panel/panel.js";
const R = g(
  function({ children: e, draggableId: r, isDraggable: a, isDraggingDisabled: o = !1, ...n }, f) {
    const { attributes: s, listeners: m, transform: l, transition: i, setNodeRef: d } = b({ id: r }), p = {
      transition: i,
      transform: c.Transform.toString(l)
    };
    return /* @__PURE__ */ t(
      "div",
      {
        ref: o ? void 0 : d,
        style: p,
        children: /* @__PURE__ */ t(
          u,
          {
            ref: f,
            draggableId: r,
            attributes: s,
            listeners: m,
            isDraggable: o ? !1 : a,
            ...n,
            children: e
          }
        )
      }
    );
  }
);
export {
  R as DraggablePanel
};
//# sourceMappingURL=draggable-panel.js.map
