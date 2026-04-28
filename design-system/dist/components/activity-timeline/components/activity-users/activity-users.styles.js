const s = {
  containerStyles: (t) => ({
    borderLeft: `3px solid ${t.colors.neutralSubtle}`,
    paddingLeft: t.spacing.spacingMd,
    marginBottom: t.spacing.spacingXs,
    ":last-child": {
      marginBottom: 0
    }
  }),
  textStyles: () => ({
    // FIXME: Update to the new spacing system
    paddingLeft: "12px"
  })
};
export {
  s as styles
};
//# sourceMappingURL=activity-users.styles.js.map
