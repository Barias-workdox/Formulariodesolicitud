const o = (s, a) => {
  const p = { ...a.typography.ParagraphSmall }, t = { ...a.typography.ParagraphMedium };
  return {
    "32px": p,
    compact: p,
    "44px": t,
    default: t
  }[s] ?? t;
};
export {
  o as getTextStyles
};
//# sourceMappingURL=user-select.styles.js.map
