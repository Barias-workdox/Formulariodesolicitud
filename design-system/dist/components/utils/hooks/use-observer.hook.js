import { useRef as c, useCallback as u, useEffect as b } from "react";
import f from "resize-observer-polyfill";
const m = ({ callback: s, element: t }) => {
  const e = t && t.current, r = c(null), o = u(() => {
    r.current && e && r.current.observe(e);
  }, [e]), n = u(() => {
    r.current && e && r.current.unobserve(e);
  }, [e]);
  b(() => (n(), r.current = new f(s), o(), () => {
    n();
  }), [s, o, n, e]);
};
export {
  m as useObserver
};
//# sourceMappingURL=use-observer.hook.js.map
