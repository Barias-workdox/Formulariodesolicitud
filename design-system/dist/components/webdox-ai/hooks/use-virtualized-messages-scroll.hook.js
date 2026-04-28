import { useState as T, useEffect as u } from "react";
import { scrollToBottom as c, validateIsScrolledToBottom as E } from "../../../utils/dom.utils.js";
const x = ({
  childrenLength: d,
  contentRef: t,
  isGeneratingAnswer: e,
  listRef: r,
  messageAnimationDurationMs: b,
  messagesScrollOffset: o,
  virtualItemsLength: m
}) => {
  const [v, a] = T(!0), [n, h] = T(e);
  u(() => {
    v && m && (c({ element: r.current, tolerance: o }), a(!1));
  }, [v, r, o, m]), u(() => {
    d && c({
      element: r.current,
      tolerance: o,
      behavior: "smooth"
    });
  }, [d, r, o]), u(() => {
    if (!(t != null && t.current)) return;
    const p = t.current, B = () => {
      const l = E({
        element: r.current,
        tolerance: o
      });
      e && l && c({
        element: r.current,
        tolerance: o,
        behavior: "smooth"
      });
    }, z = new ResizeObserver(B);
    return z.observe(p), () => {
      z.disconnect();
    };
  }, [t, e, r, o]), u(() => {
    e && !n ? h(!0) : !e && n && (setTimeout(() => {
      c({
        element: r.current,
        tolerance: o,
        behavior: "smooth"
      });
    }, b), h(!1));
  }, [
    e,
    r,
    n,
    b,
    o
  ]);
};
export {
  x as useVirtualizedMessageScroll
};
//# sourceMappingURL=use-virtualized-messages-scroll.hook.js.map
