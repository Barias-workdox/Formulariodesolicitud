const h = (n) => {
  const d = (r) => {
    const l = /^(\d|\.|-)+$/, a = /\D/gi, i = [3, 7, 13, 17, 19, 23, 29, 37, 41, 43, 47, 53, 59, 67, 71];
    if (!r || !l.test(r))
      return !1;
    const e = r.replace(a, "");
    if ([9, 10].indexOf(e.length) === -1)
      return !1;
    const u = e.substr(e.length - 1), c = e.substr(0, e.length - 1).split("").reverse();
    let o = 0, t = 0;
    for (; t < c.length; t++)
      o += parseInt(c[t], 10) * i[t];
    let s = o % 11;
    return s >= 2 && (s = 11 - s), s === parseInt(u, 10);
  };
  return /^((\d{6,11})|(\d{6}-\d{5}))?$/.test(n) || d(n);
};
export {
  h as checkCOLNIT
};
//# sourceMappingURL=col-validation.util.js.map
