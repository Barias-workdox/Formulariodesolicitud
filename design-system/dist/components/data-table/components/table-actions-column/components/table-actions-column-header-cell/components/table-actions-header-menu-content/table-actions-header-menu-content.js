import { jsxs as h, jsx as r } from "react/jsx-runtime";
import { useState as C, useCallback as T, useMemo as g } from "react";
import { MenuItemLabel as S } from "../../../../../common/menu-item-label/menu-item-label.js";
import { PopoverMenu as e } from "../../../../../popover-menu/popover-menu.js";
import "../../../../../popover-menu/components/popover-menu-item/popover-menu-item.styles.js";
import "../../../../../popover-menu/components/popover-menu-title/popover-menu-title.js";
import "../../../../../../../../themes/v3/light/theme.js";
import "../../../../../../../../themes/v3/dark/theme.js";
import "../../../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../../../themes/v3/tokens/breakpoints.js";
import "../../../../../../../../themes/utilities.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as _ } from "../../../../../../../utils/i18n/utils.js";
import "../../../../../popover-menu/styled-components/styled-popover-menu.js";
import "../../../../../popover-menu/styled-components/styled-popover-menu-container.js";
import { TABLE_MENU_SEARCH_FILTER_THRESHOLD as E } from "../../../../../../data-table.constants.js";
import { SearchContainer as M } from "../../../../../../../search-container/search-container.js";
import { includesStringNormalized as b } from "../../../../../../../utils/strings/text.utils.js";
import { COMMON_HEIGHT_36 as H } from "../../../../../../../../constants/common.constants.js";
import { getStringFromReactNode as I } from "../../../../../../../../utils/react.utils.js";
const Z = ({
  columnsConfig: s,
  allColumnsConfig: a,
  handleOnChange: n
}) => {
  const { t: l } = _(), [i, c] = C(""), m = a.filter(
    ({ id: t }) => !s.some((o) => o.id === t)
  ), d = T(
    (t) => () => {
      n({ payload: { id: t }, event: "show-column" });
    },
    [n]
  ), p = g(
    () => m.filter(
      ({ label: t }) => b(I(t), i)
    ),
    [m, i]
  ), u = m.length > E;
  return /* @__PURE__ */ h(e.Container, { children: [
    /* @__PURE__ */ r(e.Title, { children: l("dataTable.addColumns") }),
    /* @__PURE__ */ r(
      M,
      {
        isFiltrable: u,
        searchValue: i,
        onSearchChange: c,
        children: /* @__PURE__ */ r(e.List, { children: p.length > 0 ? p.map(({ id: t, label: o }) => {
          const f = typeof o == "string" || typeof o == "number" ? /* @__PURE__ */ r(S, { children: o }) : o;
          return /* @__PURE__ */ r(
            e.Item,
            {
              dataTestId: `data-table__add-column-button--${t}-option`,
              $styles: { height: H },
              onClick: d(t),
              children: f
            },
            t
          );
        }) : /* @__PURE__ */ r(e.Empty, {}) })
      }
    )
  ] });
};
export {
  Z as TableActionsHeaderMenuContent
};
//# sourceMappingURL=table-actions-header-menu-content.js.map
