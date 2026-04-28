import { jsxs as C, jsx as o } from "react/jsx-runtime";
import { useState as g, useCallback as T, useMemo as S } from "react";
import { MenuItemLabel as _ } from "../../../../../common/menu-item-label/menu-item-label.js";
import { PopoverMenu as r } from "../../../../../popover-menu/popover-menu.js";
import "../../../../../popover-menu/components/popover-menu-item/popover-menu-item.styles.js";
import "../../../../../popover-menu/components/popover-menu-title/popover-menu-title.js";
import "../../../../../../../../../themes/v3/light/theme.js";
import "../../../../../../../../../themes/v3/dark/theme.js";
import "../../../../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../../../../themes/v3/tokens/breakpoints.js";
import "../../../../../../../../../themes/utilities.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as E } from "../../../../../../../../utils/i18n/utils.js";
import "../../../../../popover-menu/styled-components/styled-popover-menu.js";
import "../../../../../popover-menu/styled-components/styled-popover-menu-container.js";
import { TABLE_MENU_SEARCH_FILTER_THRESHOLD as L } from "../../../../../../data-table.constants.js";
import { getColumnLabel as s } from "../../../../../../utils/data-table.utils.js";
import { SearchContainer as M } from "../../../../../../../../search-container/search-container.js";
import { includesStringNormalized as H } from "../../../../../../../../utils/strings/text.utils.js";
import { COMMON_HEIGHT_36 as I } from "../../../../../../../../../constants/common.constants.js";
import { getStringFromReactNode as N } from "../../../../../../../../../utils/react.utils.js";
const et = ({
  columnsConfig: a,
  allColumnsConfig: c,
  handleOnChange: l
}) => {
  const { t: u } = E(), [i, d] = g(""), n = c.filter(
    ({ id: t }) => !a.some((e) => e.id === t)
  ), f = T(
    (t) => () => {
      l({ payload: { id: t }, event: "show-column" });
    },
    [l]
  ), p = S(
    () => n.filter(({ label: t }) => {
      const e = s(t, "menu");
      return H(N(e), i);
    }),
    [n, i]
  ), h = n.length > L;
  return /* @__PURE__ */ C(r.Container, { children: [
    /* @__PURE__ */ o(r.Title, { children: u("dataTable.addColumns") }),
    /* @__PURE__ */ o(
      M,
      {
        isFiltrable: h,
        searchValue: i,
        onSearchChange: d,
        children: /* @__PURE__ */ o(r.List, { children: p.length > 0 ? p.map(({ id: t, label: e }) => {
          const m = s(e, "menu"), b = typeof m == "string" || typeof m == "number" ? /* @__PURE__ */ o(_, { children: m }) : m;
          return /* @__PURE__ */ o(
            r.Item,
            {
              dataTestId: `data-table__add-column-button--${t}-option`,
              $styles: { height: I },
              onClick: f(t),
              children: b
            },
            t
          );
        }) : /* @__PURE__ */ o(r.Empty, {}) })
      }
    )
  ] });
};
export {
  et as TableActionsHeaderMenuContent
};
//# sourceMappingURL=table-actions-header-menu-content.js.map
