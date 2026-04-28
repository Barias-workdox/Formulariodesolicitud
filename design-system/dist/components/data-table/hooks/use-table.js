import { jsx as d } from "react/jsx-runtime";
import { useRef as f, useReducer as C, useMemo as g, useCallback as h, useLayoutEffect as x } from "react";
import w from "lodash/isEqual";
import { useResponsiveProps as v } from "../../../utils/use-responsive-props.util.js";
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
import "react-use";
import "../contexts/data-table-disabled-row.context.js";
import "../../truncated-text/truncated-text.js";
import "../../../contexts/locale-provider/locale-provider.js";
import "date-fns";
import "date-fns/locale";
import "baseui/tooltip";
import "baseui/popover";
import "../../popover/popover.styles.js";
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
import "../components/table-column/components/table-cell-skeleton/table-cell-skeleton.js";
import "../components/table-column/components/resize-column-line/resize-column-line.styles.js";
import "../components/table-column/components/table-cell/table-cell.js";
import "../components/table-column/components/table-header-cell/table-header-cell.js";
import "../components/table-column/table-column.styles.js";
import "../../checkbox/checkbox.js";
import "@tanstack/react-virtual";
import { CellSkeleton as k } from "../components/common/cell-skeleton.js";
const a = (o, { payload: s, event: c }) => {
  switch (c) {
    case "drag":
    case "sort":
    case "row-selection":
    case "updated-props":
      return { ...o, ...s };
    // This event receives a columnsConfig array with only one item which represents the column to show
    case "show-column": {
      const { id: n } = s, { columnsConfig: m, allColumnsConfig: i, data: e } = o, r = i.find(({ id: p }) => n === p), u = r ? [...m, r] : m, t = e.map((p) => [
        ...p.slice(0, p.length - 1),
        /* @__PURE__ */ d(
          k,
          {
            "data-testid": "column-skeleton"
          },
          "column-skeleton"
        ),
        p.at(-1)
      ]);
      return { ...o, columnsConfig: u, data: t };
    }
    // This event receives a columnsConfig array with only one item which represents the hidden column
    case "hide-column": {
      const { id: n } = s, { columnsConfig: m, data: i } = o, e = m.findIndex((t) => t.id === n), r = m.filter((t) => t.id !== n), u = i.map((t) => t.filter((p, l) => l !== e));
      return { ...o, columnsConfig: r, data: u };
    }
    // This event receives a columnsConfig array with only one item which represents the updated column
    case "resize-column-width": {
      const { id: n, width: m } = s, { columnsConfig: i } = o, e = i.map(
        (r) => r.id === n ? { ...r, width: m } : r
      );
      return { ...o, columnsConfig: e };
    }
  }
}, jo = (o) => {
  const s = f(o), [c, n] = C(a, o), { onChange: m } = o, { columnsConfig: i = [] } = c || {}, e = g(
    () => i.map((t) => ({ ...t, isFixed: !1 })),
    [i]
  ), r = v(
    {
      large: i,
      extralarge: i,
      medium: e,
      small: e,
      extrasmall: e
    },
    i
  ), u = h(
    (t) => {
      const p = a(c, t);
      n(t), m(p, t.event);
    },
    [m, c]
  );
  return x(() => {
    w(s.current, o) || (s.current = o, n({ payload: o, event: "updated-props" }));
  }, [o]), {
    ...c,
    columnsConfig: r,
    handleOnChange: u
  };
};
export {
  jo as useTable
};
//# sourceMappingURL=use-table.js.map
