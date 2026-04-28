import { jsx as p, jsxs as E } from "react/jsx-runtime";
import { useRef as u, Children as b, useCallback as k, useEffect as z, cloneElement as R } from "react";
import { useVirtualizer as C } from "@tanstack/react-virtual";
import { Block as O } from "baseui/block";
import { mergeOverridesDeep as _ } from "../utils/baseui/helpers.js";
import { useInfiniteScrollPagination as v } from "../../hooks/use-infinite-scroll-pagination.hook.js";
import { themedStyled as A } from "../../themes/utilities.js";
import { noop as B } from "../../utils/noop.js";
import { List as L } from "./list.js";
import { VIRTUALIZED_LIST_OVERSCAN as j } from "./virtualized-list.constants.js";
import { getVirtualItemStyles as D } from "./virtualized-list.styles.js";
const T = A("div", ({ $theme: t, $maxHeight: i, $withBorder: r, $styles: s }) => ({
  height: "100%",
  overflow: "auto",
  maxHeight: i,
  border: r ? `1px solid ${t.colors.neutralSubtle}` : void 0,
  ...s
})), W = ({
  "data-testid": t = "list",
  $maxHeight: i,
  itemHeight: r,
  role: s = "list",
  children: h,
  containerStyles: x,
  isInfinite: g = !1,
  isFetchingNextPage: n,
  withBorder: S = !0,
  onLastItemRendered: m = B,
  onPageEnd: l
}) => {
  const a = u(null), d = u(n), o = b.toArray(h), f = C({
    count: o.length,
    overscan: j,
    estimateSize: () => r,
    getScrollElement: () => a.current
  }), y = k(() => {
    d.current || (l ? l() : m(), d.current = !0);
  }, [m, l]), { endOfPageNode: $ } = v({
    onPageEnd: y
  });
  z(() => {
    n || (d.current = !1);
  }, [n]);
  const V = f.getVirtualItems(), w = `${f.getTotalSize()}px`;
  return /* @__PURE__ */ p(
    T,
    {
      "data-testid": t,
      ref: a,
      $maxHeight: i,
      $withBorder: S,
      $styles: x,
      children: /* @__PURE__ */ E(
        L,
        {
          "data-testid": `${t}__list-inner`,
          role: s,
          $height: w,
          $withBorder: !1,
          $overflow: "unset",
          children: [
            V.map(
              (e) => {
                var c;
                return R(o[e.index], {
                  key: o[e.index].key || e.key,
                  "data-index": e.index,
                  ref: f.measureElement,
                  overrides: _(
                    {
                      Root: {
                        props: {
                          "data-index": e.index
                        },
                        style: D(e, r)
                      }
                    },
                    ((c = o[e.index].props) == null ? void 0 : c.overrides) || {}
                  )
                });
              }
            ),
            g && /* @__PURE__ */ p(
              O,
              {
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                children: $
              }
            )
          ]
        }
      )
    }
  );
};
export {
  W as VirtualizedList
};
//# sourceMappingURL=virtualized-list.js.map
