import $ from "lodash/deburr";
const a = (t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), f = (t, c = {}) => {
  if (t == null)
    return "";
  const {
    removeProtocol: s = !0,
    replacement: r = "-",
    collapseRepeatingSeparators: l = !0,
    trimSeparators: i = !0,
    toLowerCase: g = !0,
    keepUnderscores: o = !1,
    deburr: u = !0
  } = c, p = (u ? $(String(t)) : String(t)).trim();
  let e = (s ? p.replace(/^[a-zA-Z][a-zA-Z0-9+.-]*:\/\//, "").replace(/^[a-zA-Z][a-zA-Z0-9+.-]*:/, "") : p).replace(/\s+/g, r);
  if (e = e.replace(/[^\w-]+/g, r), o || (e = e.replace(/_+/g, r)), l) {
    const n = new RegExp(`${a(r)}+`, "g");
    e = e.replace(n, r), o && (e = e.replace(/_+/g, "_"));
  }
  if (i) {
    const n = o ? new RegExp(`^(?:${a(r)}|_)+|(?:${a(r)}|_)+$`, "g") : new RegExp(`^(?:${a(r)})+|(?:${a(r)})+$`, "g");
    e = e.replace(n, "");
  }
  return g ? e.toLowerCase() : e;
};
export {
  f as sanitizeUrl
};
//# sourceMappingURL=url.utils.js.map
