const r = {
  linkStyles: (o) => ({
    ...o.typography.ParagraphXSmall,
    textDecorationColor: o.colors.brand,
    color: o.colors.brand,
    ":hover": {
      textDecorationColor: o.colors.brandMedium,
      color: o.colors.brandMedium
    },
    [o.mediaQuery.large]: {
      ...o.typography.ParagraphSmall
    }
  })
};
export {
  r as styles
};
//# sourceMappingURL=enhanced-empty-state-link.styles.js.map
