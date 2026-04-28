import { jsx as m } from "react/jsx-runtime";
import "react";
import "../contexts/data-table.context.js";
import "../../button/button.js";
import "../../button/variants/icon-button/icon-button.js";
import "../../../themes/v3/tokens/typography.js";
import "../../../themes/v3/tokens/breakpoints.js";
import "../../../themes/v3/light/theme.js";
import "../../../themes/v3/dark/theme.js";
import "../../../themes/utilities.js";
import "baseui/modal";
import "baseui";
import "../../modal/components/modal-close-button/modal-close-button.js";
import "../../modal/regular-modal.js";
import "../../modal/sectioned-modal.js";
import "../../spinner/full-spinner/full-spinner-context.js";
import "@carbon/icons-react";
import "../../text/text.js";
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
import { DEFAULT_ITEMS_PER_PAGE as c } from "../data-table.constants.js";
import "react-use";
import "baseui/tooltip";
import "../contexts/data-table-disabled-row.context.js";
import "baseui/popover";
import "../../popover/popover.styles.js";
import "../../truncated-text/truncated-text.js";
import "../components/popover-menu/popover-menu.js";
import "../components/popover-menu/components/popover-menu-item/popover-menu-item.styles.js";
import "../components/popover-menu/components/popover-menu-title/popover-menu-title.js";
import "../components/popover-menu/styled-components/styled-popover-menu.js";
import "../components/popover-menu/styled-components/styled-popover-menu-container.js";
import "baseui/input";
import "lodash";
import "../../input/next/components/compound-end-enhancer/styled-components/styled-container.js";
import "../../input/next/components/compound-start-enhancer/styled-components/styled-container.js";
import "../../input/next/components/compound-start-enhancer/styled-components/styled-leading.js";
import "../../input/next/components/compound-start-enhancer/styled-components/styled-prefix-text.js";
import "../../input/next/components/compound-start-enhancer/styled-components/styled-right-column.js";
import "../../input/next/input.overrides.js";
import "../../search-container/search-container.styles.js";
import "react-is";
import { SimpleText as g } from "./render-types/simple-text.js";
import "../components/table-column/components/table-cell-skeleton/table-cell-skeleton.js";
import "../components/table-column/components/resize-column-line/resize-column-line.styles.js";
import "../components/table-column/components/table-cell/table-cell.js";
import "../components/table-column/components/table-header-cell/table-header-cell.js";
import "../components/table-column/table-column.styles.js";
import "../../checkbox/checkbox.js";
import "@tanstack/react-virtual";
import { CellSkeleton as d } from "../components/common/cell-skeleton.js";
import { BooleanText as x } from "./render-types/boolean-text.js";
import { DateAsText as T } from "./render-types/date-text.js";
import { DatetimeAsText as u } from "./render-types/datetime-text.js";
const D = {
  string: (t) => /* @__PURE__ */ m(g, { value: t }),
  date: (t) => /* @__PURE__ */ m(T, { value: t }),
  datetime: (t) => /* @__PURE__ */ m(u, { value: t }),
  boolean: (t) => /* @__PURE__ */ m(x, { value: t })
}, b = ({
  defaultValue: t,
  rawData: i,
  columnsConfig: o,
  actionCell: l,
  customRenders: p = {}
}) => i.map((e, s) => {
  const n = o.map(({ id: r, renderType: a }) => {
    var f;
    return p[r] !== void 0 || a === "custom" ? (f = p[r]) == null ? void 0 : f.call(p, e) : D[a](e[r] ?? t);
  });
  return l ? [...n, l(e, s)] : n;
}), h = ({
  isLoading: t,
  columnsConfig: i,
  actionCell: o,
  paginationSettings: { itemsPerPage: l } = {
    isEnabled: !1,
    method: "infinite",
    itemsPerPage: c,
    onPageEnd: () => {
    }
  }
}) => Array(t ? l : 0).fill(0).map((p, e) => {
  const s = (r) => `infinite-pagination-cell-skeleton-${e}-${r}`, n = i.map(({ id: r }) => {
    const a = r.toString();
    return /* @__PURE__ */ m(
      d,
      {
        "data-testid": s(a)
      },
      a
    );
  });
  return o ? [
    ...n,
    /* @__PURE__ */ m(
      d,
      {
        "data-testid": s("action")
      },
      "action"
    )
  ] : n;
}), It = (t) => [...b(t), ...h(t)], wt = ({
  virtualItems: t,
  renderRow: i
}) => t.map((o) => /* @__PURE__ */ m(
  "div",
  {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: `${o.size}px`,
      transform: `translateY(${o.start}px)`
    },
    children: i(o.index)
  },
  o.key
)), zt = (t, i, o) => t === "deleting" ? !0 : i === "selection";
export {
  h as getInfiniteLoadingCells,
  It as getInfiniteTableData,
  b as getTableData,
  zt as isColumnDisabledByReason,
  D as renderMap,
  wt as renderVirtualizedRows
};
//# sourceMappingURL=data-table.utils.js.map
