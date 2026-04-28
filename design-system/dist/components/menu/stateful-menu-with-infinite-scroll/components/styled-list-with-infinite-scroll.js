import { jsx as r, jsxs as g } from "react/jsx-runtime";
import { forwardRef as u, useRef as w, Children as L, cloneElement as $ } from "react";
import { useVirtualizer as b } from "@tanstack/react-virtual";
import { withStyle as z } from "baseui";
import { StyledList as C } from "baseui/menu";
import { menuItemListItemStyles as E } from "../../components/menu-item.styles.js";
import { useCss as H } from "../../../utils/hooks/use-css.js";
import { themedStyled as p } from "../../../../themes/utilities.js";
import { LoadMoreSensor as W } from "./load-more-sensor/load-more-sensor.js";
const j = p("div", ({ $maxHeight: e }) => ({
  height: "100%",
  maxHeight: e,
  overflow: "auto"
})), A = z(C, ({ $height: e }) => ({
  height: e,
  minHeight: "1px",
  width: "100%",
  position: "relative",
  padding: 0
})), R = p("li", ({ $theme: e }) => ({
  ...E({ theme: e, optionListBorderBottom: !1 }),
  position: "absolute",
  width: "100%",
  listStyle: "none",
  bottom: 0,
  padding: 0
})), V = u(function({ dataTestId: s = "list", children: l, isLoadingMore: m, itemHeight: o = 48, role: f, onLoadMore: h, ...y }, _) {
  const { css: S } = H(), a = w(), d = L.toArray(l), i = !Array.isArray(l), n = b({
    count: d.length,
    getScrollElement: () => a.current,
    estimateSize: () => o
  }), c = `${n.getTotalSize()}px`, x = m ? `calc(${c} + ${o}px)` : c;
  return /* @__PURE__ */ r(
    j,
    {
      ref: a,
      ...y,
      children: /* @__PURE__ */ g(
        A,
        {
          "data-testid": s,
          role: f,
          $height: i ? "auto" : x,
          children: [
            n.getVirtualItems().map(
              (t) => $(d[t.index], {
                "data-index": t.index,
                "data-testid": `${s}__item--${t.index}`,
                key: t.key,
                ref: n.measureElement,
                className: S({
                  top: 0,
                  left: 0,
                  width: "100%",
                  alignItems: "center",
                  justifyContent: i ? "center" : void 0,
                  boxSizing: "border-box"
                }),
                style: {
                  position: i ? void 0 : "absolute",
                  transform: `translateY(${t.start}px)`,
                  minHeight: t.index === 0 ? o : t.size,
                  display: "flex"
                }
              })
            ),
            !i && /* @__PURE__ */ r(R, { children: /* @__PURE__ */ r(
              W,
              {
                isLoadingMore: m,
                onLoadMore: h
              }
            ) })
          ]
        }
      )
    }
  );
});
V.displayName = "StyledListWithInfiniteScroll";
export {
  V as StyledListWithInfiniteScroll
};
//# sourceMappingURL=styled-list-with-infinite-scroll.js.map
