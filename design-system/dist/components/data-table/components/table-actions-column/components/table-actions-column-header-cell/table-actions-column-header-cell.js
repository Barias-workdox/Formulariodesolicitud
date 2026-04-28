import { jsx as o } from "react/jsx-runtime";
import { Add as c } from "@carbon/icons-react";
import { useDataTableContext as u } from "../../../../hooks/use-data-table-context.js";
import { getOverrideProps as C, getOverride as b } from "../../../../../../utils/overrides.utils.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as f } from "../../../../../utils/i18n/utils.js";
import { useCss as v } from "../../../../../utils/hooks/use-css.js";
import { TableActionButton as T } from "../../../common/table-action-button/table-action-button.js";
import { headerCellStyles as A } from "../../../common/table-header-cell/table-header-cell.styles.js";
import { TableActionsHeaderMenuContent as g } from "./components/table-actions-header-menu-content/table-actions-header-menu-content.js";
const k = ({
  dataTestId: r = "data-table__actions-column--header-cell",
  columnsConfig: n,
  allColumnsConfig: i,
  showButton: l = !0,
  handleOnChange: m
}) => {
  const { containerStyles: a } = v(A, {
    isActionCell: !0,
    align: "center"
  }), { t: s } = f(), { overrides: t } = u(), p = C(t == null ? void 0 : t.TableActionsColumnHeaderCell), { overrides: { CellContent: d } = {} } = p, e = b(d);
  return /* @__PURE__ */ o("div", { className: a, children: l && (e !== void 0 ? /* @__PURE__ */ o(e, {}) : /* @__PURE__ */ o(
    T,
    {
      dataTestId: `${r}--add-column-button`,
      ariaLabel: s("dataTable.addColumns"),
      popoverProps: {
        content: /* @__PURE__ */ o(
          g,
          {
            columnsConfig: n,
            allColumnsConfig: i,
            handleOnChange: m
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
