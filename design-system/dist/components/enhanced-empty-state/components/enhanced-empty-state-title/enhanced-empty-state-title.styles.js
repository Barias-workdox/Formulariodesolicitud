const t = {
  textStyles: (r) => {
    const a = {
      color: r.colors.neutral,
      margin: 0,
      fontWeight: 500
    };
    return {
      ...r.typography.ParagraphLarge,
      ...a,
      [r.mediaQuery.large]: {
        ...r.typography.HeadingSmall,
        ...a
      }
    };
  }
};
export {
  t as styles
};
//# sourceMappingURL=enhanced-empty-state-title.styles.js.map
