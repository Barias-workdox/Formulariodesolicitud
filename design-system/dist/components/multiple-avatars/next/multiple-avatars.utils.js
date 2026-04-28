const f = (t) => Math.floor(t * 10) / 10, i = (t) => f(t).toFixed(1).replace(/\.0$/, ""), u = (t) => {
  const n = Math.max(0, t);
  if (n < 1e3)
    return `+${n}`;
  if (n < 1e6) {
    const r = n / 1e3, e = Math.min(r, 999.9);
    return `+${i(e)}K`;
  }
  const o = n / 1e6;
  return `+${i(o)}M`;
}, m = (t) => t === "24px" ? 4 : 8, g = (t, n) => {
  const r = (t ?? []).map((c) => c.name).filter(Boolean), e = r.slice(0, 10), s = Math.max(0, r.length - e.length);
  if (e.length === 0) return "";
  const a = e.join(", ");
  if (s <= 0) return a;
  const l = n("multipleAvatars.additional", { count: s });
  return `${a}, ${l}`;
}, M = ({
  item: t,
  appearance: n,
  kind: o
}) => o === "groups" || n === "initials" ? !1 : !!t.src;
export {
  u as getCounterText,
  g as getCounterTooltipContent,
  m as getOverlapPxFromSize,
  M as shouldRenderImage
};
//# sourceMappingURL=multiple-avatars.utils.js.map
