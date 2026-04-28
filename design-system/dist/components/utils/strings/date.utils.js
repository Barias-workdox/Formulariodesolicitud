import { isValid as c, format as l, parse as d, startOfDay as i, isBefore as O, isAfter as A } from "date-fns";
import { es as y, ptBR as T, enUS as I } from "date-fns/locale";
const F = "P", h = "P, HH:mm", g = "PP", D = "PP, HH:mm", p = {
  base: "dd-MM-yyyy",
  es: "dd-MM-yyyy",
  en: "MM-dd-yyyy",
  pt: "dd-MM-yyyy",
  br: "dd-MM-yyyy"
}, _ = {
  base: "dd-MM-yyyy - HH:mm",
  es: "dd-MM-yyyy - HH:mm",
  en: "MM-dd-yyyy - HH:mm",
  pt: "dd-MM-yyyy - HH:mm",
  br: "dd-MM-yyyy - HH:mm"
}, w = {
  base: y,
  es: y,
  en: I,
  pt: T
}, s = (t) => t === "br" ? T : w[t], E = (t) => {
  if (typeof t == "string")
    return t;
  if (typeof t == "number") {
    const e = new Date(t);
    return c(e) ? e.toISOString() : "";
  }
  return t instanceof Date && c(t) ? t.toISOString() : "";
}, H = (t) => {
  if (typeof t == "boolean")
    return { showTime: t };
  if (typeof t == "object")
    return t;
  if (t === void 0)
    return {};
  throw new Error("Invalid options");
};
function X(t) {
  return p[t];
}
function j(t) {
  return _[t];
}
function b(t) {
  return F;
}
function P(t) {
  return h;
}
function k(t) {
  return "99-99-9999";
}
function a(t) {
  try {
    const e = new Date(t);
    return !isNaN(e.getTime());
  } catch {
    return !1;
  }
}
function N(t, e) {
  return a(t) ? l(new Date(t), b(), {
    locale: s(e)
  }) : "";
}
function v(t, e, n = !0) {
  return a(t) ? n ? l(new Date(t), P(), {
    locale: s(e)
  }) : N(t, e) : "";
}
function R(t, e, n) {
  if (!a(t)) return "";
  const r = s(n);
  return r ? l(new Date(t), e, { locale: r }) : "";
}
function x(t, e, n) {
  return d(t, e, /* @__PURE__ */ new Date(), { locale: s(n) });
}
function M(t, e, n, r) {
  const { showTime: o = n, defaultValue: u = "" } = H(r);
  if (!t) return u;
  const f = E(t);
  return a(f) ? R(f, o ? D : g, e) : u;
}
function V(t, e, n) {
  return M(t, e, !0, n);
}
function Y(t, e, n = !0) {
  const o = x(t, n ? D : g, e);
  return c(o) ? o : null;
}
function C(t, e, n) {
  return M(t, e, !1, n);
}
function m(t) {
  return t ? t.toISOString().substring(0, 10) : null;
}
function U(t) {
  return m(t) ?? "";
}
function S(t) {
  const e = a(t) ? new Date(t) : null;
  return e ? new Date(e.valueOf() + e.getTimezoneOffset() * 60 * 1e3) : null;
}
function B(t) {
  return S(t);
}
function z(t) {
  if (!t) return null;
  const e = m(t);
  if (!e) return null;
  const n = S(e);
  return n ? m(n) : null;
}
function q(t) {
  return z(t) ?? "";
}
function G(t) {
  try {
    const e = new Date(t);
    return Math.floor(e.getTime() / 1e3);
  } catch {
    return NaN;
  }
}
const J = (t, e) => t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate(), K = (t) => {
  const e = new Date(t), n = e.getFullYear(), r = String(e.getMonth() + 1).padStart(2, "0"), o = String(e.getDate()).padStart(2, "0");
  return `${n}-${r}-${o}`;
}, Q = (t, e, n) => {
  const [r, o] = Array.isArray(t) ? t : [t, t], u = i(r), f = i(o);
  return !(e && O(u, i(e)) || n && A(f, i(n)));
};
export {
  w as allDateLocaleMap,
  B as dateWithoutTimezoneOffset,
  S as dateWithoutTimezoneOffsetOrNull,
  R as format,
  N as formatDate,
  C as formatDateAsText,
  U as formatDateToIsoString,
  m as formatDateToIsoStringOrNull,
  q as formatDateToIsoStringWithoutTimezoneOffset,
  z as formatDateToIsoStringWithoutTimezoneOffsetOrNull,
  v as formatDatetime,
  V as formatDatetimeAsText,
  X as getDateFormat,
  b as getDateFormatToken,
  k as getDateMask,
  j as getDatetimeFormat,
  P as getDatetimeFormatToken,
  H as getFormatOptions,
  K as getIsoDateOnly,
  G as getUnixTimestamp,
  J as isSameDay,
  a as isValidDate,
  Q as isWithinBounds,
  x as parse,
  Y as parseTextAsDatetime
};
//# sourceMappingURL=date.utils.js.map
