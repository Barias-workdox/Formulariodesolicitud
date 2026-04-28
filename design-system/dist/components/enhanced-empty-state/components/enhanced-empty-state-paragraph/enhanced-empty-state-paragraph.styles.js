const r = {
  textStyles: (a) => ({
    ...a.typography.ParagraphXSmall,
    [a.mediaQuery.large]: {
      ...a.typography.ParagraphSmall
    }
  })
};
export {
  r as styles
};
//# sourceMappingURL=enhanced-empty-state-paragraph.styles.js.map
