const c = (o, n) => {
  const s = [];
  let t = o;
  return n.forEach((f, r) => {
    const e = t == null ? void 0 : t.find(({ id: a }) => a === f);
    e && (s[r] = e, t = e.items);
  }), s;
};
export {
  c as getItemsTraversed
};
//# sourceMappingURL=list-factory.utils.js.map
