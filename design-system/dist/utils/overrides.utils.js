function e(t) {
  if (t && typeof t == "object" && t.component)
    return t.component;
}
function p(t) {
  const { props: o = {}, style: n } = t || {};
  return {
    ...o,
    ...n !== void 0 && { $style: n }
  };
}
export {
  e as getOverride,
  p as getOverrideProps
};
//# sourceMappingURL=overrides.utils.js.map
