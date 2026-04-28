import { jsxs as c, Fragment as m, jsx as h } from "react/jsx-runtime";
import { useState as u, useCallback as n, useLayoutEffect as w } from "react";
import v from "lodash/isEqual";
import { DATA_TABLE_Z_INDEX as E } from "../../data-table.constants.js";
import { useCss as y } from "../../../../utils/hooks/use-css.js";
import { getRectStyles as b } from "./drop-placeholder.styles.js";
const k = ({
  containerRef: o,
  listRef: l,
  sourceIndex: s,
  destinationIndex: d,
  dropProvided: a
}) => {
  const { theme: i } = y(), [r, p] = u({
    top: 0,
    left: 0,
    height: 0,
    width: 0
  }), e = n(() => {
    !s || !d || window.requestAnimationFrame(() => {
      if (l != null && l.current) {
        const t = b(l.current, s, d);
        v(r, t) || p(t);
      }
    });
  }, [s, d]);
  return w(() => {
    e();
    let t = null;
    return o != null && o.current && (t = o.current, t.addEventListener("scroll", e), window.addEventListener("scroll", e)), () => {
      t == null || t.removeEventListener("scroll", e), window.removeEventListener("scroll", e), p(null);
    };
  }, [o, e]), /* @__PURE__ */ c(m, { children: [
    a.placeholder,
    s !== void 0 && r && /* @__PURE__ */ h(
      "div",
      {
        "data-testid": "data-table__drop--placeholder",
        style: {
          zIndex: E.sticky,
          position: "fixed",
          top: r.top,
          width: r.width,
          left: `calc(${r.left} - 1px)`,
          height: `calc(${r.height} - 2px)`,
          border: `1px dashed ${i.colors.brand}`,
          backgroundColor: i.colors.brandWashed
        }
      }
    )
  ] });
};
export {
  k as DropPlaceholder
};
//# sourceMappingURL=drop-placeholder.js.map
