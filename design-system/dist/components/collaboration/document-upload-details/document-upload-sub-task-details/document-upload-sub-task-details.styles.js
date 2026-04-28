const e = {
  wrapperStyles: (r, { documentUploaded: o }) => ({
    padding: r.spacing.spacingMd,
    border: `1px solid ${r.colors.neutralSubtle}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: r.spacing.spacingMd,
    backgroundColor: r.colors.bgBase,
    borderRadius: r.borders.borderSm,
    cursor: "default",
    ...o && {
      backgroundColor: r.colors.brandWashed,
      border: "none",
      cursor: "pointer"
    }
  }),
  documentTitle: (r, { documentUploaded: o }) => ({
    overflow: "hidden",
    textOverflow: "ellipsis",
    margin: 0,
    textDecoration: "none",
    color: r.colors.neutral,
    ...o && {
      textDecoration: "underline"
    }
  }),
  titleWrapper: (r) => ({
    display: "flex",
    alignItems: "center",
    marginRight: r.spacing.spacingMd
  })
};
export {
  e as subtasksStyles
};
//# sourceMappingURL=document-upload-sub-task-details.styles.js.map
