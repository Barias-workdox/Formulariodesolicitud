import { jsx as e, jsxs as r } from "react/jsx-runtime";
import { OverflowMenuHorizontal as f, Edit as C, Send as g, CheckmarkFilled as b } from "@carbon/icons-react";
import { a as i } from "../../../../node_modules/@faker-js/faker/dist/chunk-KZPPZA2C.js";
import { action as m } from "../../../../node_modules/storybook/dist/actions/index.js";
import { Button as h } from "../../../button/next/button.js";
import { DisabledRowTooltip as k } from "../components/common/disabled-row-tooltip/disabled-row-tooltip.js";
import { TableActionButton as D } from "../components/common/table-action-button/table-action-button.js";
import { PopoverMenu as a } from "../components/popover-menu/popover-menu.js";
import "../components/popover-menu/components/popover-menu-item/popover-menu-item.styles.js";
import "../components/popover-menu/components/popover-menu-title/popover-menu-title.js";
import "../../../../themes/v3/light/theme.js";
import "../../../../themes/v3/dark/theme.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import "../../../../themes/utilities.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import "../components/popover-menu/styled-components/styled-popover-menu.js";
import "../components/popover-menu/styled-components/styled-popover-menu-container.js";
import { DEFAULT_ITEMS_PER_PAGE as I } from "../data-table.constants.js";
import { useDataTableDisabledRow as T } from "../hooks/use-data-table-disabled-row.js";
import { getTableData as y, getInfiniteTableData as w } from "../utils/data-table.utils.js";
import { allColumnsConfig as A, defaultPaginationSettings as x } from "./data-table-stories.constants.js";
const s = ({ id: t }) => /* @__PURE__ */ e(
  D,
  {
    dataTestId: `data-table__action-button--${t}`,
    popoverProps: {
      popoverMargin: 8,
      placement: "left",
      content: () => /* @__PURE__ */ r(a, { children: [
        /* @__PURE__ */ r(
          a.Item,
          {
            dataTestId: `${t}--hello-world`,
            $styles: { justifyContent: "flex-start" },
            onClick: () => m("Hello World clicked")(t),
            children: [
              /* @__PURE__ */ e(C, {}),
              " Hello World"
            ]
          }
        ),
        /* @__PURE__ */ r(
          a.Item,
          {
            dataTestId: `${t}--lorem-ipsum`,
            $styles: { justifyContent: "flex-start" },
            onClick: () => m("Hello World clicked")(t),
            children: [
              /* @__PURE__ */ e(g, {}),
              " Lorem ipsum"
            ]
          }
        )
      ] })
    },
    children: /* @__PURE__ */ e(f, {})
  }
), c = ({ id: t }) => {
  const { isRowDisabled: o } = T();
  return /* @__PURE__ */ e(k, { children: /* @__PURE__ */ e(
    h,
    {
      kind: "neutral",
      appearance: "outlined",
      endEnhancer: () => /* @__PURE__ */ e(b, { color: "deepskyblue" }),
      onClick: () => m("clicked")(t),
      disabled: o,
      children: "Click me"
    }
  ) });
}, et = (t) => A.filter(({ id: o }) => t.includes(o)).map(({ id: o }) => ({ id: o })), p = (t = I) => new Array(t).fill(0).map((o, l) => ({
  id: i.string.hexadecimal({ length: 7 }),
  name: i.person.fullName(),
  collectedInsect: i.animal.insect(),
  quantity: i.number.int(),
  collectedDate: i.date.anytime().toISOString(),
  updatedAt: i.date.anytime().toISOString(),
  extraLargeColumnName: i.string.alpha({ length: 50 }),
  rowNumber: l + 1,
  aiColumn: i.animal.bird()
})), it = ({
  rawData: t = p(),
  activeColumns: o,
  allColumnsConfig: l
}) => y({
  rawData: t,
  activeColumns: o,
  allColumnsConfig: l,
  customRenders: {
    "custom-action": ({ id: n }) => /* @__PURE__ */ e(c, { id: n })
  },
  actionCell: s
}), lt = ({
  rawData: t = p(),
  activeColumns: o,
  allColumnsConfig: l,
  isLoading: n,
  paginationSettings: d = { ...x, isEnabled: !1 }
}) => w({
  isLoading: n,
  rawData: t,
  activeColumns: o,
  allColumnsConfig: l,
  paginationSettings: d,
  customRenders: {
    "custom-action": ({ id: u }) => /* @__PURE__ */ e(c, { id: u })
  },
  actionCell: s
});
export {
  et as getActiveColumns,
  it as getData,
  lt as getInfiniteData,
  p as getRawData
};
//# sourceMappingURL=data-table-stories.utils.js.map
