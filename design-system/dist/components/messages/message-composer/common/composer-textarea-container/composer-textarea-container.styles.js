const s = {
  containerStyles: (e) => ({
    display: "flex",
    alignItems: "flex-end",
    gap: e.spacing.spacingMd
  }),
  composerWrapperStyles: (e, { isEditing: r, $minHeight: o = "4rem", $maxHeight: l = "4rem" }) => ({
    boxSizing: "border-box",
    background: e.colors.neutralWashed,
    flex: 1,
    display: "flex",
    flexDirection: r ? "column" : "row",
    border: `1px solid ${e.colors.neutralSubtle}`,
    overflow: "hidden",
    padding: `${e.spacing.spacingXs} 0`,
    minHeight: o,
    maxHeight: l
  })
}, n = {
  Container: { style: ({ $theme: e }) => s.containerStyles(e) },
  ComposerWrapper: {
    style: ({ $theme: e, ...r }) => s.composerWrapperStyles(e, r)
  }
};
export {
  s as styles,
  n as stylesOverrides
};
//# sourceMappingURL=composer-textarea-container.styles.js.map
