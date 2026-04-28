import { jsx as o } from "react/jsx-runtime";
import { Add as c } from "@carbon/icons-react";
import { useDataTableContext as u } from "../../../../hooks/use-data-table-context.js";
import { getOverrideProps as C, getOverride as v } from "../../../../../../../utils/overrides.utils.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as b } from "../../../../../../utils/i18n/utils.js";
import { useCss as f } from "../../../../../../utils/hooks/use-css.js";
import { TableActionButton as T } from "../../../common/table-action-button/table-action-button.js";
import { headerCellStyles as A } from "../../../common/table-header-cell/table-header-cell.styles.js";
import { TableActionsHeaderMenuContent as g } from "./components/table-actions-header-menu-content/table-actions-header-menu-content.js";
const k = ({
  dataTestId: n = "data-table__actions-column--header-cell",
  columnsConfig: i,
  allColumnsConfig: l,
  showButton: m = !0,
  handleOnChange: a
}) => {
  const { containerStyles: s } = f(A, {
    isActionCell: !0,
    align: "center"
  }), { t: p } = b(), { overrides: t } = u(), d = C(t == null ? void 0 : t.TableActionsColumnHeaderCell), { overrides: { CellContent: e } = {} } = d, r = e ? v(e) : void 0;
  return /* @__PURE__ */ o("div", { className: s, children: m && (r !== void 0 ? /* @__PURE__ */ o(r, {}) : /* @__PURE__ */ o(
    T,
    {
      dataTestId: `${n}--add-column-button`,
      ariaLabel: p("dataTable.addColumns"),
      popoverProps: {
        content: /* @__PURE__ */ o(
          g,
          {
            columnsConfig: i,
            allColumnsConfig: l,
            handleOnChange: a
          }
        ),
        placement: "bottomRight",
        popoverMargin: -4
      },
      children: /* @__PURE__ */ o(c, {})
    }
  )) });
};
export {
  k as TableActionsColumnHeaderCell
};
//# sourceMappingURL=table-actions-column-header-cell.js.map
