import { useState as m, useLayoutEffect as f } from "react";
const I = { horizontal: !1, vertical: !1, any: !1 }, v = (t) => {
  const [i, a] = m(I);
  return f(() => {
    const e = t == null ? void 0 : t.current;
    if (!e) return;
    let o = 0;
    const s = () => {
      const { overflowX: d, overflowY: h } = window.getComputedStyle(e), l = d !== "hidden" && e.scrollWidth > e.clientWidth, r = h !== "hidden" && e.scrollHeight > e.clientHeight;
      a((n) => n.horizontal === l && n.vertical === r ? n : { horizontal: l, vertical: r, any: l || r });
    }, u = () => {
      cancelAnimationFrame(o), o = requestAnimationFrame(s);
    };
    s();
    const c = new ResizeObserver(u);
    return c.observe(e), () => {
      c.disconnect(), cancelAnimationFrame(o);
    };
  }, [t]), i;
};
export {
  v as useIsScrollable
};
//# sourceMappingURL=use-is-scrollable.js.map
