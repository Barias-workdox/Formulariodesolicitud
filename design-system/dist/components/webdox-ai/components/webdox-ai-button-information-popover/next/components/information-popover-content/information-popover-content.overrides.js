const a = {
  BaseButton: {
    style: ({ $theme: t }) => ({
      borderColor: t.colors.neutralSubtle,
      padding: `${t.spacing.spacingXs} ${t.spacing.spacingSm}`,
      height: "fit-content",
      justifyContent: "flex-start",
      ...t.typography.ParagraphSmall
    })
  }
};
export {
  a as actionButtonOverrides
};
//# sourceMappingURL=information-popover-content.overrides.js.map
