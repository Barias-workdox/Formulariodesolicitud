const o = (t) => typeof t != "string" ? "" : t.charAt(0).toUpperCase() + t.slice(1), r = (t) => t.normalize("NFD").replace(/[\u0300-\u036f]/g, ""), n = (t, e) => r(t).toLowerCase().includes(r(e).toLowerCase()), a = (t) => Intl.NumberFormat("en", { notation: "compact" }).format(t);
export {
  o as capitalize,
  a as formatCompactNumber,
  n as includesStringNormalized,
  r as normalizeStringNFD
};
//# sourceMappingURL=text.utils.js.map
