const s = ["bg", "text", "icon", "border"], n = (o) => {
  const e = {};
  return s.map((r) => {
    Object.entries(o).forEach(([t, c]) => {
      e[`${r}${t.charAt(0).toUpperCase()}${t.slice(1)}`] = c;
    });
  }), e;
}, a = (o, e) => {
  const r = {};
  for (const [t, c] of Object.entries(o))
    t.startsWith(e) && (r[t] = c);
  return r;
};
export {
  a as extractGroup,
  n as getDeprecatedSemanticColors
};
//# sourceMappingURL=colors.utils.js.map
