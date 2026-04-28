import { jsxs as r, jsx as t } from "react/jsx-runtime";
import { Checkmark as p } from "@carbon/icons-react";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as u } from "../../../../../../../../../../utils/i18n/utils.js";
import { useCss as k } from "../../../../../../../../../../utils/hooks/use-css.js";
import { PopoverMenu as e } from "../../../../../../../popover-menu/popover-menu.js";
import "../../../../../../../popover-menu/components/popover-menu-item/popover-menu-item.styles.js";
import { PopoverMenuTitle as f } from "../../../../../../../popover-menu/components/popover-menu-title/popover-menu-title.js";
import { PopoverMenuOptionsWrapper as y } from "../../../../../../../popover-menu/components/popover-menu-options-wrapper/popover-menu-options-wrapper.js";
import "../../../../../../../popover-menu/styled-components/styled-popover-menu.js";
import "../../../../../../../popover-menu/styled-components/styled-popover-menu-container.js";
const F = ({
  id: i,
  isSortable: d,
  isRemovable: b,
  isOrderedByThis: c,
  dataType: a,
  orderDirection: l,
  handleOnChange: m
}) => {
  const { t: o } = u(), { theme: n } = k(), s = (C) => () => {
    m({
      payload: {
        orderBy: i,
        orderDirection: C
      },
      event: "sort"
    });
  }, h = () => {
    m({ payload: { id: i }, event: "hide-column" });
  };
  return /* @__PURE__ */ r(e, { children: [
    d && a !== "action" && /* @__PURE__ */ r(y, { children: [
      /* @__PURE__ */ t(f, { children: o("dataTable.sortBy.title") }),
      /* @__PURE__ */ r(e.Item, { onClick: s("asc"), children: [
        o(`dataTable.sortBy.dataType.${a}.asc`),
        c && l === "asc" && /* @__PURE__ */ t(
          p,
          {
            color: n.colors.brand,
            "aria-label": o("dataTable.ariaLabels.ascChecked")
          }
        )
      ] }),
      /* @__PURE__ */ r(e.Item, { onClick: s("desc"), children: [
        o(`dataTable.sortBy.dataType.${a}.desc`),
        c && l === "desc" && /* @__PURE__ */ t(
          p,
          {
            color: n.colors.brand,
            "aria-label": o("dataTable.ariaLabels.descChecked")
          }
        )
      ] })
    ] }),
    b && /* @__PURE__ */ t(e.Item, { onClick: h, children: o("dataTable.sortBy.hideColumn") })
  ] });
};
export {
  F as OrderByPopoverContent
};
//# sourceMappingURL=order-by-popover-content.js.map
