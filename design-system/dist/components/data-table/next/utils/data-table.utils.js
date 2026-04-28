import { jsx as p } from "react/jsx-runtime";
import "react";
import "../contexts/data-table.context.js";
import "../../../button/button.js";
import "../../../button/variants/icon-button/icon-button.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import "../../../../themes/v3/light/theme.js";
import "../../../../themes/v3/dark/theme.js";
import "../../../../themes/utilities.js";
import "baseui/modal";
import "baseui";
import "../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../modal/regular-modal.js";
import "../../../modal/sectioned-modal.js";
import "../../../spinner/full-spinner/full-spinner-context.js";
import "@carbon/icons-react";
import "../../../text/text.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import "@hello-pangea/dnd";
import "../data-table.styles.js";
import "lodash/isEqual";
import { DEFAULT_ITEMS_PER_PAGE as C } from "../data-table.constants.js";
import "react-use";
import "../contexts/data-table-disabled-row.context.js";
import "baseui/tooltip";
import "baseui/popover";
import "../../../popover/popover.styles.js";
import "../../../truncated-text/truncated-text.js";
import "../components/popover-menu/popover-menu.js";
import "../components/popover-menu/components/popover-menu-item/popover-menu-item.styles.js";
import "../components/popover-menu/components/popover-menu-title/popover-menu-title.js";
import "../components/popover-menu/styled-components/styled-popover-menu.js";
import "../components/popover-menu/styled-components/styled-popover-menu-container.js";
import "baseui/input";
import "lodash";
import "../../../input/next/components/compound-end-enhancer/styled-components/styled-container.js";
import "../../../input/next/components/compound-start-enhancer/styled-components/styled-container.js";
import "../../../input/next/components/compound-start-enhancer/styled-components/styled-leading.js";
import "../../../input/next/components/compound-start-enhancer/styled-components/styled-prefix-text.js";
import "../../../input/next/components/compound-start-enhancer/styled-components/styled-right-column.js";
import "../../../input/next/input.overrides.js";
import "../../../search-container/search-container.styles.js";
import "react-is";
import { SimpleText as h } from "./render-types/simple-text.js";
import "../components/table-column/components/table-cell-skeleton/table-cell-skeleton.js";
import "../components/table-column/components/resize-column-line/resize-column-line.styles.js";
import "../components/table-column/components/table-cell/table-cell.js";
import "../components/table-column/components/table-header-cell/table-header-cell.js";
import "../components/table-column/table-column.styles.js";
import "../../../checkbox/checkbox.js";
import "@tanstack/react-virtual";
import { CellSkeleton as g } from "../components/common/cell-skeleton.js";
import { BooleanText as x } from "./render-types/boolean-text.js";
import { DateAsText as T } from "./render-types/date-text.js";
import { DatetimeAsText as A } from "./render-types/datetime-text.js";
const D = {
  string: (t) => /* @__PURE__ */ p(h, { value: t }),
  date: (t) => /* @__PURE__ */ p(T, { value: t }),
  datetime: (t) => /* @__PURE__ */ p(A, { value: t }),
  boolean: (t) => /* @__PURE__ */ p(x, { value: t })
}, _ = (t, o) => {
  const { width: i } = o || {}, { width: r } = t;
  return { width: r ?? i };
}, E = (t = [], o = []) => t.map((i) => {
  const r = o.find((m) => m.id === i.id), e = _(i, r);
  return { ...r, ...e };
}), jt = ({
  id: t,
  width: o
}) => ({ id: t, width: o }), w = ({
  defaultValue: t,
  rawData: o,
  activeColumns: i,
  allColumnsConfig: r,
  actionCell: e,
  customRenders: m = {}
}) => {
  const c = i ?? r.map(({ id: n }) => ({ id: n })), u = E(
    c,
    r
  );
  return o.map((n, l) => {
    const s = u.map(({ id: a, renderType: d }) => {
      var f;
      return m[a] !== void 0 || d === "custom" ? (f = m[a]) == null ? void 0 : f.call(m, n) : D[d](n[a] ?? t);
    });
    return e ? [...s, e(n, l)] : s;
  });
}, z = ({
  isLoading: t,
  activeColumns: o,
  allColumnsConfig: i,
  actionCell: r,
  paginationSettings: { itemsPerPage: e } = {
    isEnabled: !1,
    method: "infinite",
    itemsPerPage: C,
    onPageEnd: () => {
    }
  }
}) => {
  const m = o ?? i.map(({ id: c }) => ({ id: c }));
  return Array(t ? e : 0).fill(0).map((c, u) => {
    const n = (s) => `infinite-pagination-cell-skeleton-${u}-${s}`, l = m.map(({ id: s }) => {
      const a = s.toString();
      return /* @__PURE__ */ p(
        g,
        {
          "data-testid": n(a)
        },
        a
      );
    });
    return r ? [
      ...l,
      /* @__PURE__ */ p(
        g,
        {
          "data-testid": n("action")
        },
        "action"
      )
    ] : l;
  });
}, Bt = (t) => [...w(t), ...z(t)], Ft = ({
  virtualItems: t,
  renderRow: o
}) => t.map((i) => /* @__PURE__ */ p(
  "div",
  {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: `${i.size}px`,
      transform: `translateY(${i.start}px)`
    },
    children: o(i.index)
  },
  i.key
)), Mt = (t, o) => t !== null && typeof t == "object" && "header" in t && "menu" in t ? t[o] : t, Ut = (t, o, i) => t === "deleting" ? !0 : o === "selection";
export {
  jt as getActiveColumnFromConfig,
  E as getActiveColumnsConfigWithUserCustomizations,
  Mt as getColumnLabel,
  z as getInfiniteLoadingCells,
  Bt as getInfiniteTableData,
  w as getTableData,
  Ut as isColumnDisabledByReason,
  D as renderMap,
  Ft as renderVirtualizedRows
};
//# sourceMappingURL=data-table.utils.js.map
