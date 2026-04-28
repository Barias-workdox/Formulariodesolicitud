import { DEFAULT_SIZES as p } from "../constants/file.constants.js";
const m = (e, t) => {
  if (e && t) {
    const s = Array.isArray(t) ? t : t.split(","), n = e.name || "", o = (e.type || "").toLowerCase(), a = o.replace(/\/.*$/, "");
    return s.some((i) => {
      const r = i.trim().toLowerCase();
      return r.charAt(0) === "." ? n.toLowerCase().endsWith(r) : r.endsWith("/*") ? a === r.replace(/\/.*$/, "") : o === r;
    });
  }
  return !0;
};
function h(e, t = 2) {
  const n = t < 0 ? 0 : t, o = Math.floor(Math.log(e) / Math.log(1024));
  return `${parseFloat((e / Math.pow(1024, o)).toFixed(n))} ${p[o]}`;
}
export {
  h as bytesToShortNotation,
  m as isFiletypeAccepted
};
//# sourceMappingURL=file.utils.js.map
