const m = (n, s) => {
  const r = [], o = Math.ceil(n.length / s);
  return Array.from({ length: o }).forEach((g, d) => {
    const h = d * s, t = Math.min(h + s, n.length), e = n.blob.slice(h, t);
    r.push({
      name: n.name,
      id: n.id,
      blob: e,
      index: d,
      parts: o,
      length: t - h
    });
  }), r;
}, E = (n, s) => n.reduce((r, o) => (o.length > s ? r = r.concat(m(o, s)) : r.push(o), r), []), j = (n, s, r) => {
  const o = n.reduce((t, e) => {
    var c;
    return (t[c = e.id] || (t[c] = [])).push(e), t;
  }, {}), g = Object.values(o).filter((t) => t.length > 1), h = Object.values(o).filter((t) => t.length === 1).flat().reduce((t, e) => {
    const c = e.length, u = t.at(-1), l = ((u == null ? void 0 : u.reduce((i, b) => i + b.length, 0)) ?? 0) + c > s, p = ((u == null ? void 0 : u.length) ?? 0) >= r;
    return c > s || !u || l || p ? t.push([e]) : u.push(e), t;
  }, []);
  return [
    ...g.map((t) => t.map((e) => [e])),
    ...h.map((t) => [t])
  ];
};
export {
  j as getBatchesGroups,
  m as getChunks,
  E as getChunksToUpload
};
//# sourceMappingURL=upload-manager.utils.js.map
