import { jsx as d } from "react/jsx-runtime";
import { useRef as C, useReducer as f, useCallback as v, useLayoutEffect as h } from "react";
import g from "lodash/isEqual";
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
import { getActiveColumnsConfigWithUserCustomizations as w } from "../utils/data-table.utils.js";
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
import "../components/table-column/components/table-cell-skeleton/table-cell-skeleton.js";
import "../components/table-column/components/resize-column-line/resize-column-line.styles.js";
import "../components/table-column/components/table-cell/table-cell.js";
import "../components/table-column/components/table-header-cell/table-header-cell.js";
import "../components/table-column/table-column.styles.js";
import "../../../checkbox/checkbox.js";
import "@tanstack/react-virtual";
import { CellSkeleton as k } from "../components/common/cell-skeleton.js";
import { useActiveColumnsConfig as x } from "./use-active-columns-config.js";
const l = (t, { payload: e, event: u }) => {
  switch (u) {
    case "drag":
    case "sort":
    case "row-selection":
    case "updated-props":
      return { ...t, ...e };
    // This event receives a columnsConfig array with only one item which represents the column to show
    case "show-column": {
      const { id: o } = e, { activeColumns: m, allColumnsConfig: p, data: c } = t, r = p.find(({ id: n }) => o === n), s = r ? { id: r.id } : void 0, i = s ? [...m, s] : m, a = c.map((n) => [
        ...n.slice(0, n.length - 1),
        /* @__PURE__ */ d(
          k,
          {
            "data-testid": "column-skeleton"
          },
          "column-skeleton"
        ),
        n.at(-1)
      ]);
      return { ...t, activeColumns: i, data: a };
    }
    // This event receives a columnsConfig array with only one item which represents the hidden column
    case "hide-column": {
      const { id: o } = e, { activeColumns: m, data: p } = t, c = m.findIndex((i) => i.id === o), r = m.filter((i) => i.id !== o), s = p.map((i) => i.filter((a, n) => n !== c));
      return { ...t, activeColumns: r, data: s };
    }
    // This event receives a columnsConfig array with only one item which represents the updated column
    case "resize-column-width": {
      const { id: o, width: m } = e, { activeColumns: p } = t, c = p.map(
        (r) => r.id === o ? { ...r, width: m } : r
      );
      return { ...t, activeColumns: c };
    }
  }
}, zt = (t) => {
  const e = C(t), { onChange: u } = t, [o, m] = f(l, t), { activeColumns: p, allColumnsConfig: c } = o || {}, { columnsConfig: r } = x({
    activeColumns: p,
    allColumnsConfig: c
  }), s = v(
    (i) => {
      m(i);
      const a = l(o, i) || {}, n = w(
        a.activeColumns,
        a.allColumnsConfig
      );
      u({ ...a, columnsConfig: n }, i.event);
    },
    [o, u]
  );
  return h(() => {
    g(e.current, t) || (e.current = t, m({ payload: t, event: "updated-props" }));
  }, [t]), {
    ...o,
    columnsConfig: r,
    handleOnChange: s
  };
};
export {
  zt as useTable
};
//# sourceMappingURL=use-table.js.map
