const t = (r) => {
  const e = Number(r.replace(/[-.,[\]()\s]+/g, ""));
  return (e >= 1e10 && e < 11e9 || e >= 15e9 && e < 18e9 || e >= 2e10 && e < 21e9) && e.toString().length === 11;
};
export {
  t as checkPERRUC
};
//# sourceMappingURL=per-validation.util.js.map
