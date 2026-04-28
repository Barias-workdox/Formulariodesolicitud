function o(t) {
  if (t === void 0)
    return 0;
  const r = window.getComputedStyle(t);
  return new DOMMatrix(r.transform).m41;
}
export {
  o as getTranslateX
};
//# sourceMappingURL=style.utils.js.map
