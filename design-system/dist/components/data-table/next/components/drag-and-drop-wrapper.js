import { jsx as o, jsxs as h } from "react/jsx-runtime";
import { useCallback as u } from "react";
import { DragDropContext as x, Droppable as b } from "@hello-pangea/dnd";
import { StyledWrapper as C } from "../data-table.styles.js";
import { useDataTableContext as I } from "../hooks/use-data-table-context.js";
import { useDragEvents as R } from "../hooks/use-drag-events.js";
import { DropPlaceholder as S } from "./drop-placeholder/drop-placeholder.js";
const A = ({ children: a }) => {
  const {
    data: n = [],
    columnsConfig: i = [],
    listRef: e,
    totalHeight: l,
    containerRef: p,
    handleOnChange: s
  } = I(), { dragSourceIndex: c, dragDestinationIndex: f, onDragStart: m, onDragUpdate: d, onDragEnd: g } = R({
    data: n,
    columnsConfig: i,
    updateTable: s
  }), D = u(
    (r, t) => {
      r && (e && (e.current = r), t(r));
    },
    [e]
  );
  return /* @__PURE__ */ o(
    x,
    {
      onDragStart: m,
      onDragUpdate: d,
      onDragEnd: g,
      children: /* @__PURE__ */ o(
        b,
        {
          droppableId: "table",
          direction: "horizontal",
          children: (r) => /* @__PURE__ */ h(
            C,
            {
              ref: (t) => {
                t && D(t, r.innerRef);
              },
              style: { height: l },
              ...r.droppableProps,
              children: [
                a,
                /* @__PURE__ */ o(
                  S,
                  {
                    containerRef: p,
                    listRef: e,
                    sourceIndex: c,
                    destinationIndex: f,
                    dropProvided: r
                  }
                )
              ]
            }
          )
        }
      )
    }
  );
};
export {
  A as DragAndDropWrapper
};
//# sourceMappingURL=drag-and-drop-wrapper.js.map
