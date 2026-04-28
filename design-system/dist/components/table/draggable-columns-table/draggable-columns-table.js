import { jsx as o, jsxs as _ } from "react/jsx-runtime";
import { useState as T, useEffect as k, useRef as N } from "react";
import { FilterRemove as j, DragHorizontal as z } from "@carbon/icons-react";
import { StyledTable as A, StyledBody as P, StyledRow as U, StyledCell as q, StyledHead as G, StyledHeadCell as D } from "baseui/table";
import { useCss as W } from "../../utils/hooks/use-css.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as J } from "../../utils/i18n/utils.js";
import { Block as v } from "../../block/block.js";
import { Text as O } from "../../text/text.js";
import { StatefulTooltip as K } from "../../tooltip/stateful-tooltip.js";
import { spacing as C } from "../../utils/spacing.js";
import { AddColumnsButton as Q, ColumnMenuPopover as V } from "./draggable-columns-table-popups.js";
import { TruncatedText as F, DragIcon as Z, ColumnMenu as ee } from "./draggable-columns-table.styles.js";
const te = ({ $theme: t }) => ({
  borderBottom: `1px solid ${t.colors.neutralWashed}`,
  ":hover": {
    backgroundColor: t.colors.neutralWashed,
    ":has(*) .draggable-columns-table__truncated-text::before": {
      background: `linear-gradient(to right, ${t.colors.neutralWashed}00 0%, ${t.colors.neutralWashed}FF 100%)`
    }
  }
}), oe = function({
  dataTestId: a = "table__header",
  column: e,
  setDraggingColumnId: d,
  setDroppableColumnId: l,
  paddingLeft: u,
  paddingRight: m,
  toggleActiveColumn: y,
  updateSortingColumn: h
}) {
  const [x, f] = T(!1), [r, i] = T(!1), p = N(null);
  async function g(s) {
    if (s.preventDefault(), r || !e.draggable) return;
    const n = p.current, b = p.current.getBoundingClientRect(), $ = s.clientX - b.left, H = s.clientY - b.top;
    let B = b.left, M = b.top;
    const { parentElement: X } = n, Y = n.style.display;
    function R(c, w) {
      n.style.left = c - $ + "px", n.style.top = w - H + "px";
    }
    function E(c) {
      c.preventDefault(), R(c.pageX, c.pageY);
      const w = document.elementsFromPoint(c.clientX, c.clientY).find((S) => {
        var I;
        return ((I = S.classList) == null ? void 0 : I.contains("droppable")) && S.id !== e.id;
      });
      w && l(w.id);
    }
    async function L(c) {
      c.preventDefault(), document.removeEventListener("mousemove", E), document.removeEventListener("mouseup", L), n.style.transition = "all 150ms ease-in-out";
      const S = document.querySelector(`#${e.id}.droppable-head`).getBoundingClientRect();
      B = S.left, M = S.top, await new Promise(() => {
        n.style.left = B + "px", n.style.top = M + "px", setTimeout(() => {
          n.style.width = "inherit", n.style.position = "initial", n.style.display = Y, n.style.pointerEvents = "all", X.append(n), d(null), l(null);
        }, 150);
      });
    }
    s.button === 0 && (document.addEventListener("mousemove", E), document.addEventListener("mouseup", L), d(e.id), n.style.width = n.clientWidth + "px", n.style.position = "absolute", n.style.transition = "none", n.style.pointerEvents = "none", document.body.append(n), R(s.pageX, s.pageY));
  }
  return /* @__PURE__ */ o(
    D,
    {
      $style: { padding: 0, border: "none", minWidth: 0, flex: e.flex || 1 },
      id: e.id,
      className: e.draggable ? "droppable-head" : "",
      children: /* @__PURE__ */ o(
        v,
        {
          "data-testid": `${a}--${e.id}`,
          className: e.draggable ? "draggable-head-block droppable" : "",
          id: e.id,
          ref: p,
          display: e.centered ? "flex" : "block",
          justifyContent: e.centered ? "center" : "initial",
          pl: u,
          pr: m,
          py: 8,
          width: "100%",
          $style: { fontSize: C(8), cursor: e.draggable ? "move" : "cursor" },
          onMouseDown: g,
          onDragStart: () => !1,
          onMouseEnter: () => f(!0),
          onMouseLeave: () => f(!1),
          children: /* @__PURE__ */ _(
            v,
            {
              position: "relative",
              display: "flex",
              alignItems: "center",
              children: [
                /* @__PURE__ */ o(
                  Z,
                  {
                    className: "drag-ic",
                    $isOver: e.draggable && x,
                    children: /* @__PURE__ */ o(
                      z,
                      {
                        size: 16,
                        style: { position: "relative" }
                      }
                    )
                  }
                ),
                /* @__PURE__ */ o(F, { children: /* @__PURE__ */ o(
                  K,
                  {
                    content: e.label,
                    returnFocus: !0,
                    autoFocus: !0,
                    placement: "top",
                    showArrow: !0,
                    ignoreBoundary: !0,
                    popoverMargin: 8,
                    children: /* @__PURE__ */ o(
                      O,
                      {
                        variant: "bodySmall",
                        margin: "0",
                        children: e.label
                      }
                    )
                  }
                ) }),
                (e.removable || e.sortable) && /* @__PURE__ */ o(
                  v,
                  {
                    as: ee,
                    ml: 2,
                    mr: 4,
                    display: "flex",
                    alignItems: "center",
                    flex: "1",
                    children: /* @__PURE__ */ o(
                      V,
                      {
                        column: e,
                        toggleActiveColumn: y,
                        setIsOverMenu: i,
                        updateSortingColumn: h
                      }
                    )
                  }
                )
              ]
            }
          )
        }
      )
    }
  );
}, ne = ({
  headers: t,
  setDraggingColumnId: a,
  setDroppableColumnId: e,
  allColumns: d,
  updateActiveColumns: l,
  updateSortingColumn: u,
  canAddColumns: m,
  "data-testid": y
}) => {
  const { theme: h } = W(), x = (r) => !!t.find((i) => i.id === r.id), f = (r) => {
    const i = t.slice();
    if (x(r)) {
      const p = t.findIndex((g) => g.id === r.id);
      i.splice(p, 1);
    } else
      i.push(r);
    l(i);
  };
  return /* @__PURE__ */ _(
    G,
    {
      $style: { boxShadow: "none", borderBottom: `.5px solid ${h.colors.neutralWashed}` },
      children: [
        t.length > 0 ? t.map(
          (r, i) => r.label ? /* @__PURE__ */ o(
            oe,
            {
              "data-testid": y,
              column: r,
              setDraggingColumnId: a,
              setDroppableColumnId: e,
              toggleActiveColumn: f,
              paddingLeft: i === 0 ? 6 : 0,
              paddingRight: i === t.length - 1 ? 6 : 0,
              updateSortingColumn: u
            },
            r.id
          ) : /* @__PURE__ */ o(
            D,
            {
              $style: { border: "none", flex: 1, padding: 0 }
            },
            i
          )
        ) : /* @__PURE__ */ o(D, { $style: { border: "none" }, children: /* @__PURE__ */ o(v, { py: 8 }) }),
        m && /* @__PURE__ */ o(
          D,
          {
            $style: {
              flex: 0,
              padding: 0,
              border: "none",
              borderLeft: `.5px solid ${h.colors.neutralWashed}`
            },
            children: /* @__PURE__ */ o(
              Q,
              {
                columns: d.filter((r) => !x(r)),
                toggleActiveColumn: f,
                "data-testid": y
              }
            )
          }
        )
      ]
    }
  );
}, re = ({
  dataTestId: t = "table__body",
  children: a,
  headers: e
}) => {
  const { t: d } = J(), { theme: l } = W();
  return /* @__PURE__ */ o(P, { children: e.length ? a : /* @__PURE__ */ _(
    v,
    {
      "data-testid": `${t}__empty-state`,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      p: 40,
      $style: { borderTop: `1px solid ${l.colors.neutralWashed}` },
      children: [
        /* @__PURE__ */ o(
          j,
          {
            size: 32,
            color: l.colors.neutralSubdued
          }
        ),
        /* @__PURE__ */ o(
          O,
          {
            variant: "bodySmall",
            color: "neutralSubdued",
            children: d("table.columnsEmpty")
          }
        )
      ]
    }
  ) });
}, Te = ({ children: t, onMouseEnter: a, onMouseLeave: e }) => /* @__PURE__ */ o(
  U,
  {
    $style: te,
    className: "draggable-columns-table__row",
    onMouseEnter: a,
    onMouseLeave: e,
    children: t
  }
), _e = ({
  children: t,
  paddingLeft: a = 0,
  paddingRight: e = 0,
  paddingTop: d = C(12),
  paddingBottom: l = C(12),
  flex: u,
  ...m
}) => /* @__PURE__ */ o(
  q,
  {
    ...m,
    $style: { padding: 0, minWidth: 0, flex: u || 1 },
    children: /* @__PURE__ */ o(
      F,
      {
        $fullwidth: !0,
        $style: { padding: `${d} ${e} ${l} ${a}` },
        className: "draggable-columns-table__truncated-text",
        children: t
      }
    )
  }
), Ce = ({
  activeColumns: t,
  allColumns: a,
  updateActiveColumns: e = () => {
  },
  updateSortingColumn: d = () => {
  },
  items: l,
  setIsDragging: u = () => {
  },
  children: m,
  canAddColumns: y = !0,
  renderTableHeaders: h = !0,
  "data-testid": x = "design-system"
}) => {
  const { theme: f } = W(), [r, i] = T(null), [p, g] = T(null);
  return k(() => {
    if (u(r != null), r && p) {
      const s = t.slice(), n = t.find(($) => $.id === p), b = t.find(($) => $.id === r);
      s[t.indexOf(n)] = b, s[t.indexOf(b)] = n, e(s), g(null);
    }
  }, [
    r,
    p,
    t,
    u,
    e,
    g
  ]), /* @__PURE__ */ _(
    A,
    {
      $style: {
        height: "100%",
        width: "100%",
        borderTop: `1px solid ${f.colors.neutralWashed}`,
        borderBottom: l != null && l.length ? "none" : `1px solid ${f.colors.neutralWashed}`,
        borderLeft: "none",
        borderRight: "none",
        borderRadius: 0
      },
      cellSpacing: "0",
      children: [
        h && /* @__PURE__ */ o(
          ne,
          {
            headers: t,
            allColumns: a,
            setDraggingColumnId: i,
            setDroppableColumnId: g,
            updateActiveColumns: e,
            updateSortingColumn: d,
            canAddColumns: y,
            "data-testid": `${x}__table-head`
          }
        ),
        /* @__PURE__ */ o(re, { headers: t, children: m })
      ]
    }
  );
};
export {
  Ce as DraggableColumnsTable,
  re as TableBody,
  _e as TableCell,
  Te as TableRow
};
//# sourceMappingURL=draggable-columns-table.js.map
