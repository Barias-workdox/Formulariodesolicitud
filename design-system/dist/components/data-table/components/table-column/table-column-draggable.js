import { jsx as r } from "react/jsx-runtime";
import { useState as g } from "react";
import { Draggable as c } from "@hello-pangea/dnd";
import { DATA_TABLE_Z_INDEX as f } from "../../data-table.constants.js";
import { commonStyles as p } from "../../data-table.styles.js";
import { themedUseStyletron as b } from "../../../../themes/utilities.js";
import { TableColumn as D } from "./table-column.js";
const A = (o) => {
  const { id: t, columnIndex: l, maxWidth: a } = o, [n, m] = g(!0), [s] = b(), i = {
    ...p,
    display: "flex",
    flexGrow: 1,
    flexShrink: 0,
    maxWidth: a,
    ":hover": { zIndex: f.draggingColumn }
  };
  return /* @__PURE__ */ r(
    c,
    {
      draggableId: t,
      index: l,
      isDragDisabled: n,
      disableInteractiveElementBlocking: !0,
      children: (e, { isDragging: d }) => /* @__PURE__ */ r(
        "div",
        {
          ref: e.innerRef,
          ...e.draggableProps,
          ...e.dragHandleProps,
          className: s(i),
          children: /* @__PURE__ */ r(
            D,
            {
              ...o,
              isDragging: d,
              updateIsDragDisabled: m
            }
          )
        }
      )
    }
  );
};
export {
  A as TableColumnDraggable
};
//# sourceMappingURL=table-column-draggable.js.map
