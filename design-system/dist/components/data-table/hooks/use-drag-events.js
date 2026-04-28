import { useState as a } from "react";
import { reorder as r } from "../../utils/arrays/arrays.utils.js";
const S = ({
  data: s,
  columnsConfig: d,
  updateTable: x
}) => {
  const [t, o] = a(), [c, e] = a();
  return {
    dragSourceIndex: t,
    dragDestinationIndex: c,
    onDragStart: ({ source: n }) => {
      o(n.index), e(n.index);
    },
    onDragUpdate: ({ destination: n }) => {
      e(n ? n.index : t);
    },
    onDragEnd: (n) => {
      if (o(void 0), e(void 0), !n.destination || n.destination.index === n.source.index || !d[n.destination.index].isDraggable)
        return;
      const g = r(
        d,
        n.source.index,
        n.destination.index
      ), D = s.map(
        (i) => n.destination ? r(i, n.source.index, n.destination.index) : i
      );
      x({
        payload: { data: D, columnsConfig: g },
        event: "drag"
      });
    }
  };
};
export {
  S as useDragEvents
};
//# sourceMappingURL=use-drag-events.js.map
