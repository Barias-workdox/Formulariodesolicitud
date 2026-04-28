import { useState as a } from "react";
import { reorder as r } from "../../../utils/arrays/arrays.utils.js";
import { getActiveColumnFromConfig as D } from "../utils/data-table.utils.js";
const E = ({
  data: s,
  columnsConfig: t,
  updateTable: x
}) => {
  const [o, d] = a(), [c, e] = a();
  return {
    dragSourceIndex: o,
    dragDestinationIndex: c,
    onDragStart: ({ source: n }) => {
      d(n.index), e(n.index);
    },
    onDragUpdate: ({ destination: n }) => {
      e(n ? n.index : o);
    },
    onDragEnd: (n) => {
      if (d(void 0), e(void 0), !n.destination || n.destination.index === n.source.index || !t[n.destination.index].isDraggable)
        return;
      const g = r(
        t,
        n.source.index,
        n.destination.index
      ), m = s.map(
        (i) => n.destination ? r(i, n.source.index, n.destination.index) : i
      ), p = g.map(D);
      x({
        payload: { data: m, activeColumns: p },
        event: "drag"
      });
    }
  };
};
export {
  E as useDragEvents
};
//# sourceMappingURL=use-drag-events.js.map
