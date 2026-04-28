import { useState as d, useRef as u, useEffect as a } from "react";
import { defaultMapItemToString as w } from "../suggestions-input.utils.js";
function k({
  value: c,
  isOpen: g = !0,
  items: r,
  mapItemToString: h = w,
  handleChange: f
}) {
  const [n, l] = d(-1), p = u(null), o = u(null), i = u(null);
  return a(() => {
    if (n >= 0 && o.current) {
      const e = o.current.children[n];
      e == null || e.scrollIntoView({ block: "nearest" });
    }
  }, [n]), {
    innerRef: p,
    listRef: o,
    inputRef: i,
    highlightedIndex: n,
    updateHighlightedIndex: l,
    onKeyDown: (e) => {
      var s;
      if (g)
        if (e.key === "ArrowDown")
          e.preventDefault(), l((t) => (t + 1) % r.length);
        else if (e.key === "ArrowUp")
          e.preventDefault(), l((t) => (t - 1 + r.length) % r.length);
        else if (e.key === "Enter") {
          if (e.preventDefault(), n >= 0) {
            const t = h(r[n]);
            f(t);
          } else
            f(c);
          (s = i.current) == null || s.blur();
        } else
          l(-1);
    }
  };
}
export {
  k as useSuggestionsInput
};
//# sourceMappingURL=use-suggestions-input.js.map
