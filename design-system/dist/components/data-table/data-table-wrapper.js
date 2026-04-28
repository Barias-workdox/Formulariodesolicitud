import { jsxs as m, jsx as t } from "react/jsx-runtime";
import { createElement as C } from "react";
import { EmptyState as w } from "../empty-state/empty-state.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as y } from "../utils/i18n/utils.js";
import { DragAndDropWrapper as D } from "./components/drag-and-drop-wrapper.js";
import { EndOfPageNode as R } from "./components/end-of-page-node.js";
import { TableActionsColumn as E } from "./components/table-actions-column/table-actions-column.js";
import { TableColumn as x } from "./components/table-column/table-column.js";
import { TableColumnDraggable as A } from "./components/table-column/table-column-draggable.js";
import { TableRowSelectionColumn as I } from "./components/table-row-selection-column/table-row-selection-column.js";
import { StyledTableContainer as M, StyledColumnsContainer as W, StyledEmptyMessageWrapper as j } from "./data-table.styles.js";
import { useDataTableContext as _ } from "./hooks/use-data-table-context.js";
const tt = () => {
  const {
    "data-testid": n,
    isLoading: l,
    showActionsColumn: i,
    showRowsSelection: s,
    data: a,
    columnsConfig: p,
    emptyState: d,
    tableRef: c,
    containerRef: f
  } = _(), { t: u } = y(), o = a.length > 0, h = !l && !o;
  return /* @__PURE__ */ m(
    M,
    {
      "data-testid": n,
      ref: c,
      children: [
        /* @__PURE__ */ m(W, { ref: f, children: [
          s && o && /* @__PURE__ */ t(I, {}),
          /* @__PURE__ */ t(D, { children: p.map((e, r) => {
            const { isDraggable: b } = e, S = b && o ? A : x, T = a.flatMap((g) => g[r]);
            return /* @__PURE__ */ C(
              S,
              {
                ...e,
                dataTestId: `data-table__column-${r}`,
                key: e.id,
                columnIndex: r,
                columnData: T
              }
            );
          }) }),
          i && o && /* @__PURE__ */ t(E, {})
        ] }),
        h && /* @__PURE__ */ t(j, { children: d ?? /* @__PURE__ */ t(w, { description: u("general.empty") }) }),
        o && /* @__PURE__ */ t(R, {})
      ]
    }
  );
};
export {
  tt as DataTableWrapper
};
//# sourceMappingURL=data-table-wrapper.js.map
