import { jsx as t, jsxs as s, Fragment as f } from "react/jsx-runtime";
import { OverflowMenuVertical as $, ChevronDown as v } from "@carbon/icons-react";
import { StatefulMenu as p } from "baseui/menu";
import { StatefulPopover as c, PLACEMENT as w } from "baseui/popover";
import { ParagraphSmall as S, ParagraphXSmall as m } from "baseui/typography";
import { spacing as d } from "../../utils/spacing.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as u } from "../../utils/i18n/utils.js";
import { useCss as h } from "../../utils/hooks/use-css.js";
import { Block as l } from "../../block/block.js";
import { Button as x } from "../../button/button.js";
import { IconButton as y } from "../../button/variants/icon-button/icon-button.js";
import "../../../themes/v3/tokens/typography.js";
import "../../../themes/v3/tokens/breakpoints.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../modal/components/modal-close-button/modal-close-button.js";
import "../../modal/regular-modal.js";
import "../../modal/sectioned-modal.js";
import "../../spinner/full-spinner/full-spinner-context.js";
import "../../popover/popover.styles.js";
import { statefulMenuOverrides as b } from "./draggable-columns-table.styles.js";
const C = (o) => [
  {
    order: "asc",
    label: o("table.columnOrderAsc")
  },
  {
    order: "desc",
    label: o("table.columnOrderDesc")
  }
], B = ({
  columns: o,
  toggleActiveColumn: a,
  "data-testid": r
}) => {
  const { t: n } = u(), { theme: i } = h();
  return /* @__PURE__ */ s(
    l,
    {
      top: "100%",
      position: "absolute",
      bg: "#fff",
      $style: { boxShadow: i.lighting.shadowDefault, transform: "translate(calc(-100%),0)" },
      children: [
        /* @__PURE__ */ t(
          S,
          {
            margin: "0",
            padding: `${d(4)} ${d(8)}`,
            $style: {
              borderBottom: `1px solid ${i.colors.neutralSubtle}`,
              whiteSpace: "nowrap"
            },
            children: n("table.add", { name: n("table.column") })
          }
        ),
        /* @__PURE__ */ t(
          l,
          {
            maxHeight: "300px",
            $style: { overflowY: "auto" },
            children: /* @__PURE__ */ t(
              p,
              {
                items: o,
                onItemSelect: ({ item: e }) => a(e),
                overrides: b({
                  labelTemplate: (e) => e.label,
                  "data-testid": r
                })
              }
            )
          }
        )
      ]
    }
  );
}, rt = ({
  columns: o,
  toggleActiveColumn: a,
  "data-testid": r
}) => /* @__PURE__ */ t(
  c,
  {
    content: () => /* @__PURE__ */ t(
      B,
      {
        "data-testid": `${r}--add-columns-menu`,
        columns: o,
        toggleActiveColumn: a
      }
    ),
    returnFocus: !0,
    autoFocus: !0,
    placement: w.bottomRight,
    children: /* @__PURE__ */ t(
      y,
      {
        "data-testid": `${r}--add-columns-button`,
        size: "auto",
        overrides: {
          BaseButton: {
            style: ({ $theme: n }) => ({
              backgroundColor: "transparent",
              borderColor: "transparent",
              width: n.spacing.spacing3xl
            })
          }
        },
        children: /* @__PURE__ */ t($, { size: 24 })
      }
    )
  }
), M = ({
  column: o,
  toggleActiveColumn: a,
  updateSortingColumn: r,
  close: n
}) => {
  const { t: i } = u(), { theme: e } = h();
  return /* @__PURE__ */ s(
    l,
    {
      top: "100%",
      position: "absolute",
      bg: "#fff",
      $style: { boxShadow: e.lighting.shadowDefault, transform: "translate(calc(-100%),0)" },
      children: [
        o.sortable && /* @__PURE__ */ s(f, { children: [
          /* @__PURE__ */ t(
            l,
            {
              $style: { borderBottom: `1px solid ${e.colors.neutralSubtle}` },
              px: 8,
              py: 4,
              children: /* @__PURE__ */ t(
                m,
                {
                  margin: "0",
                  $style: {
                    whiteSpace: "nowrap",
                    marginRight: d(2)
                  },
                  children: i("table.order")
                }
              )
            }
          ),
          /* @__PURE__ */ t(l, { overflow: "hidden", children: /* @__PURE__ */ t(
            p,
            {
              items: C(i),
              onItemSelect: ({ item: g }) => {
                r(o.id, g.order), n();
              },
              overrides: b()
            }
          ) })
        ] }),
        o.removable && /* @__PURE__ */ t(
          l,
          {
            $style: {
              borderTop: o.sortable ? `1px solid ${e.colors.neutralSubtle}` : "none"
            },
            children: /* @__PURE__ */ t(
              x,
              {
                "data-testid": "draggable-columns-table__remove-column-button",
                kind: "control",
                paddingLeft: e.spacing.spacingMd,
                paddingRight: e.spacing.spacingMd,
                overrides: { BaseButton: { style: { backgroundColor: "transparent" } } },
                onClick: () => {
                  a(o), n();
                },
                children: /* @__PURE__ */ t(
                  m,
                  {
                    margin: "0",
                    $style: { whiteSpace: "nowrap" },
                    children: i("table.removeColumn")
                  }
                )
              }
            )
          }
        )
      ]
    }
  );
}, nt = ({
  dataTestId: o = "table__header-menu",
  column: a,
  setIsOverMenu: r,
  toggleActiveColumn: n,
  updateSortingColumn: i
}) => /* @__PURE__ */ t(
  c,
  {
    content: ({ close: e }) => /* @__PURE__ */ t(
      M,
      {
        column: a,
        toggleActiveColumn: n,
        updateSortingColumn: i,
        close: e
      }
    ),
    returnFocus: !0,
    autoFocus: !0,
    children: /* @__PURE__ */ t(
      v,
      {
        "data-testid": `${o}--${a.id}`,
        size: 16,
        style: { zIndex: 0, cursor: "pointer" },
        onMouseOver: () => r(!0),
        onMouseLeave: () => r(!1),
        role: "img"
      }
    )
  }
);
export {
  rt as AddColumnsButton,
  nt as ColumnMenuPopover
};
//# sourceMappingURL=draggable-columns-table-popups.js.map
