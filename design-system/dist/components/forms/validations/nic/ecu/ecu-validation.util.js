import { checkContainsOnlyNumbers as g } from "../util/nic-validation.util.js";
const v = (t) => {
  const r = new RegExp(/^(?:0[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|30[0-9])/);
  return g(t) && r.test(t) && t.length == 10;
}, w = (t) => {
  const { length: l } = t, C = 9, d = Array.from(Array(6).keys()), k = 6, m = 2, p = 2, E = Array.from(Array(23).keys()), y = 3, I = ["000", "0000"], R = 0, e = {
    legal: {
      longCheck: 9,
      coefficients: [4, 3, 2, 7, 6, 5, 4, 3, 2],
      module: 11
    },
    institution: {
      longCheck: 8,
      coefficients: [3, 2, 7, 6, 5, 4, 3, 2],
      module: 11
    },
    natural: {
      longCheck: 9,
      coefficients: [2, 1, 2, 1, 2, 1, 2, 1, 2],
      module: 10
    }
  }, x = /^\d+$/, P = (n) => {
    let i = 0;
    for (; n; )
      i += n % 10, n = Math.floor(n / 10);
    return i;
  }, a = (n, i, o) => {
    const s = i.reduce((f, b, D) => {
      const u = parseInt(n[D]) * b;
      return u >= 10 && o === 10 ? f + P(u) : f + u;
    }, 0) % o;
    return s === R ? 0 : o - s;
  };
  if (x.test(t) && [13, 10].includes(l)) {
    const n = E.includes(parseInt(t.slice(0, p))), i = !I.includes(t.slice(l - y));
    if (n && i) {
      const o = parseInt(t[m]);
      if (d.includes(o)) {
        const c = parseInt(t[e.natural.longCheck]), s = a(
          t,
          e.natural.coefficients,
          e.natural.module
        );
        return c === s;
      } else if (o === k) {
        const c = parseInt(t[e.institution.longCheck]), s = a(
          t,
          e.institution.coefficients,
          e.institution.module
        );
        return c === s;
      } else if (o === C) {
        const c = parseInt(t[e.legal.longCheck]), s = a(
          t,
          e.legal.coefficients,
          e.legal.module
        );
        return c === s;
      }
    }
  }
  return !1;
}, A = (t) => {
  const r = new RegExp(
    /^(?:0[1-9](?:[0-5]|6|9)|1[0-9](?:[0-5]|6|9)|2[0-4](?:[0-5]|6|9)|30(?:[0-5]|6|9))\d/
  ), h = new RegExp(/00[1-9]$/), l = r.test(t) && h.test(t);
  return g(t) && l && t.length == 13;
};
export {
  v as checkCIandCEEcuador,
  A as checkRUCEcuador,
  w as legacyCheckECURUC
};
//# sourceMappingURL=ecu-validation.util.js.map
