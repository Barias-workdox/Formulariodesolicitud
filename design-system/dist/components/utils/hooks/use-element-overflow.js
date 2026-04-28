import { useState as f, useCallback as r, useEffect as g } from "react";
import { debounce as E } from "lodash";
const a = 200, v = ({
  ref: o,
  maxLines: s = 1
}) => {
  const [l, i] = f(!1), n = r(() => {
    const e = o.current;
    if (e) {
      const u = parseFloat(window.getComputedStyle(e).lineHeight) * s, { scrollHeight: O } = e;
      i(O > u);
    }
  }, [s, o]), c = r(
    E(n, a),
    [n]
  );
  return g(() => {
    const e = o.current;
    if (e)
      try {
        const t = new ResizeObserver(c);
        return t.observe(e), c(), () => {
          t.disconnect(), c.cancel();
        };
      } catch (t) {
        n(), console.log(t);
      }
  }, [o, c, n]), { isOverflowing: l };
};
export {
  a as ELEMENT_OVERFLOW_DEBOUNCE_DELAY,
  v as useElementOverflow
};
//# sourceMappingURL=use-element-overflow.js.map
