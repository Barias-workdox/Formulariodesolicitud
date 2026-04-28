const d = (n, c) => Object.entries(n).reduce((o, [t, r]) => {
  const e = [c, t].filter(Boolean).join(".");
  return typeof (r == null ? void 0 : r.type) == "string" ? [...o, [e, r]] : typeof r == "object" ? [...o, ...d(r, e)] : o;
}, []), b = (n, c) => !!c.split(".").reduce((o, t, r, e) => o[t] === void 0 ? (e.splice(1), !1) : o[t], n), g = async function({
  values: n,
  context: c,
  options: o,
  formMethods: t,
  schema: r,
  resolver: e
}) {
  const l = await e(r)(n, c, o), { errors: P } = l, {
    formState: { errors: a = {}, touchedFields: j = {} } = {},
    setError: u,
    clearErrors: y
  } = t || {}, p = d(a), h = d(P);
  return p.forEach(([s, i]) => {
    !h.some(
      ([E, f]) => s === E && i.type === f.type
    ) && y !== void 0 && y(s);
  }), h.forEach(([s, i]) => {
    const w = p.some(
      ([f, m]) => s === f && i.type === m.type
    ), E = b(j, s);
    !w && u !== void 0 && E && u(s, i);
  }), l;
};
export {
  g as allErrorsSyncResolver,
  d as getErrorsPaths
};
//# sourceMappingURL=resolver.js.map
