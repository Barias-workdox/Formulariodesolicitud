import { jsx as a } from "react/jsx-runtime";
import { useCallback as i } from "react";
import { useCss as f } from "../../utils/hooks/use-css.js";
import { DraggableRowsTable as c } from "../draggable-rows-table/draggable-rows-table.js";
import "@carbon/icons-react";
import "baseui/block";
import "../../../themes/v3/tokens/typography.js";
import "../../../themes/v3/tokens/breakpoints.js";
import "../../../themes/v3/light/theme.js";
import "../../../themes/v3/dark/theme.js";
import "../../../themes/utilities.js";
import "baseui/typography";
import "../components/table-header/table-header-container.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import "../../button/button.js";
import "../../button/variants/icon-button/icon-button.js";
import "baseui/modal";
import "baseui";
import "../../modal/components/modal-close-button/modal-close-button.js";
import "../../modal/regular-modal.js";
import "../../modal/sectioned-modal.js";
import "../../spinner/full-spinner/full-spinner-context.js";
import "baseui/tooltip";
import "../../text/text.js";
import "../components/table-actions/table-actions-layout.js";
import { tableOverrideStyles as n } from "./sortable-table.styles.js";
import { getTableHeader as u, getTableBody as y } from "./sortable-table.utils.js";
const $ = ({
  "data-testid": o,
  isDragDisabled: t,
  droppableId: e,
  headers: m,
  children: p,
  onDragEnd: l
}) => {
  const { theme: r } = f(), b = i(
    () => u(m, r, o),
    [m, r, o]
  ), s = i(
    () => y(p, t, r, o),
    [p, t, r, o]
  );
  return /* @__PURE__ */ a(
    c,
    {
      "data-testid": o,
      droppableId: e,
      onDragEnd: l,
      isDragDisabled: t,
      headers: b(),
      items: s(),
      overrides: n(r)
    }
  );
};
export {
  $ as SortableTable
};
//# sourceMappingURL=sortable-table.js.map
