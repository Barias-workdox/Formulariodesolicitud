import { getTranslateX as f } from "../../../../utils/style.utils.js";
const $ = (t, n, e) => {
  const g = t == null ? void 0 : t.children[n], c = t == null ? void 0 : t.children[e], { top: w, height: R } = (t == null ? void 0 : t.getBoundingClientRect()) ?? { top: 0, height: 0 }, { width: d } = (g == null ? void 0 : g.getBoundingClientRect()) ?? { width: 0 }, o = (c == null ? void 0 : c.getBoundingClientRect()) ?? { left: 0, width: 0 }, r = Math.max(e - 1, 0), h = t == null ? void 0 : t.children[r], p = (h == null ? void 0 : h.getBoundingClientRect()) ?? { left: 0, width: 0 }, B = e === n || !e ? (
    // If the destination is the same as the source or if the destination index is not set
    p.left + p.width - f(h)
  ) : (
    // Otherwise, calculate the left position based on the destination element and index relationship
    o.left - f(c) + (e > n ? o.width : 0)
  );
  return { top: `${w}px`, left: `${B}px`, height: `${R}px`, width: `${d}px` };
};
export {
  $ as getRectStyles
};
//# sourceMappingURL=drop-placeholder.styles.js.map
