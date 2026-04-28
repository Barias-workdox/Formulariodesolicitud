import { jsx as r } from "react/jsx-runtime";
import { useState as l, useEffect as v } from "react";
function p(i, c = {}) {
  return function(d) {
    const [u, e] = l(!1), { disabled: o, onHoverStart: n, onHoverEnd: t } = c, f = () => {
      o || (e(!0), n == null || n());
    }, a = () => {
      o || (e(!1), t == null || t());
    };
    return v(() => {
      const s = () => e(!1);
      return window.addEventListener("click", s), () => window.removeEventListener("click", s);
    }, []), /* @__PURE__ */ r(
      "div",
      {
        onMouseEnter: f,
        onMouseLeave: a,
        children: /* @__PURE__ */ r(
          i,
          {
            ...d,
            isHovered: u
          }
        )
      }
    );
  };
}
export {
  p as withIsHovered
};
//# sourceMappingURL=with-is-hovered.js.map
