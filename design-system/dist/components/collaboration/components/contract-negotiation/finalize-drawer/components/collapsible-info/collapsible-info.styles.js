const s = (a) => ({
  Title: { style: { ...a.typography.ParagraphSmall } },
  HeaderContainer: {
    style: {
      padding: `${a.spacing.spacingXs} ${a.spacing.spacingXl}`,
      borderBottom: `1px solid ${a.colors.neutralWashed}`
    }
  }
}), i = {
  collapsibleContainerStyles: (a) => ({
    padding: a.spacing.spacingXl
  }),
  statusContainerStyles: (a) => ({
    borderBottom: `1px solid ${a.colors.neutralWashed}`,
    paddingBottom: a.spacing.spacingMd
  }),
  lastEditionContainerStyles: (a) => ({
    borderBottom: `1px solid ${a.colors.neutralWashed}`,
    paddingBottom: a.spacing.spacingMd,
    paddingTop: a.spacing.spacingMd
  }),
  approvalsContainerStyles: (a) => ({
    paddingTop: a.spacing.spacingMd
  }),
  thirdPartiesContainerStyles: (a) => ({
    paddingTop: a.spacing.spacingXs,
    display: "grid",
    gap: a.spacing.spacingMd
  }),
  titleTextStyles: (a) => ({
    ...a.typography.LabelXSmall,
    paddingBottom: a.spacing.spacingXs
  })
};
export {
  s as collapsibleBoxOverrides,
  i as styles
};
//# sourceMappingURL=collapsible-info.styles.js.map
