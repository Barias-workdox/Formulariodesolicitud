import { jsx as s } from "react/jsx-runtime";
import { Text as n } from "../../text/text.js";
import { TableCell as f } from "../components/table-cell/table-cell.js";
import "../../../themes/v3/tokens/typography.js";
import "../../../themes/v3/tokens/breakpoints.js";
import "../../../themes/v3/light/theme.js";
import "../../../themes/v3/dark/theme.js";
import "../../../themes/utilities.js";
import "baseui/typography";
import "../components/table-header/table-header-container.js";
import "@carbon/icons-react";
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
import "react";
import "baseui/modal";
import "baseui";
import "../../modal/components/modal-close-button/modal-close-button.js";
import "../../modal/regular-modal.js";
import "../../modal/sectioned-modal.js";
import "../../spinner/full-spinner/full-spinner-context.js";
import "baseui/tooltip";
import "../components/table-actions/table-actions-layout.js";
import "@hello-pangea/dnd";
import { DraggableCellTable as $ } from "../draggable-rows-table/components/draggable-cell-table-next/draggable-cell-table.js";
import { styles as c } from "./sortable-table.styles.js";
const _ = (i, m, o) => i.map((r, p) => {
  const t = {
    "data-testid": o ? `${o}--header-cell-${p}` : void 0,
    $style: c.headerCellStyles(m)
  };
  return typeof r != "function" ? /* @__PURE__ */ s(
    f,
    {
      ...t,
      children: /* @__PURE__ */ s(
        n,
        {
          variant: "bodySmall",
          margin: 0,
          fontWeight: "500",
          children: r
        }
      )
    },
    `header-cell-${r}`
  ) : r(t);
}), w = (i, m, o, r) => i.map(
  (p, t) => p.map((e, l) => {
    const a = {
      "data-testid": r ? `${r}--body-cell-${t}-${l}` : void 0,
      isDisabled: m || l !== 0,
      $style: c.headerBodyStyles(o)
    };
    return typeof e != "function" ? /* @__PURE__ */ s(
      $,
      {
        ...a,
        children: e
      },
      `body-cell-${t}-${l}`
    ) : e(a);
  })
);
export {
  w as getTableBody,
  _ as getTableHeader
};
//# sourceMappingURL=sortable-table.utils.js.map
