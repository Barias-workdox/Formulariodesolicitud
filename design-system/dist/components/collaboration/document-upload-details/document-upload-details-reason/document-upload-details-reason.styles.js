const a = {
  wrapper: (r) => ({
    backgroundColor: r.colors.neutralWashed,
    padding: r.spacing.spacingXs,
    borderRadius: r.borders.borderSm
  }),
  title: (r) => ({
    display: "flex",
    alignItems: "center",
    marginBottom: r.spacing.spacingXs
  }),
  reasonText: (r) => ({
    margin: 0,
    lineHeight: r.spacing.spacingXl,
    wordBreak: "break-word"
  })
};
export {
  a as reasonStyles
};
//# sourceMappingURL=document-upload-details-reason.styles.js.map
