import { jsx as r } from "react/jsx-runtime";
import { useState as i } from "react";
import { Draggable as g } from "@hello-pangea/dnd";
import { DATA_TABLE_Z_INDEX as p } from "../../data-table.constants.js";
import { commonStyles as d } from "../../data-table.styles.js";
import { useCss as c } from "../../../../utils/hooks/use-css.js";
import { TableColumn as f } from "./table-column.js";
const b = {
  wrapperStyles: () => ({
    ...d,
    display: "flex",
    flex: 1,
    ":hover": { zIndex: p.draggingColumn }
  })
}, T = (l) => {
  const { id: o, columnIndex: s } = l, [t, a] = i(!0), { wrapperStyles: n } = c(b);
  return /* @__PURE__ */ r(
    g,
    {
      draggableId: o,
      index: s,
      isDragDisabled: t,
      disableInteractiveElementBlocking: !0,
      children: (e, { isDragging: m }) => /* @__PURE__ */ r(
        "div",
        {
          ref: e.innerRef,
          ...e.draggableProps,
          ...e.dragHandleProps,
          className: n,
          children: /* @__PURE__ */ r(
            f,
            {
              ...l,
              isDragging: m,
              updateIsDragDisabled: a
            }
          )
        }
      )
    }
  );
};
export {
  T as TableColumnDraggable
};
//# sourceMappingURL=table-column-draggable.js.map
