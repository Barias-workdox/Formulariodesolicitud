const l = () => ({
  Dialog: {
    style: ({ $theme: e }) => ({
      backgroundColor: e.colors.neutralBase,
      margin: 0,
      display: "flex",
      flexDirection: "column"
    })
  },
  Close: {
    style: {
      display: "none"
    }
  },
  DialogContainer: {
    style: () => ({
      overflow: "hidden"
    })
  }
}), o = {
  modalHeaderStyles: (e) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `${e.spacing.spacingMd} ${e.spacing.spacingXl}`,
    backgroundColor: e.colors.bgBase,
    margin: 0,
    borderBottom: `1px solid ${e.colors.neutralWashed}`
  }),
  documentNameWrapper: { display: "flex", alignItems: "center" },
  documentNameStyles: (e) => ({
    margin: 0,
    marginLeft: e.spacing.spacingMd
  }),
  modalBodyStyles: (e) => ({
    flex: "1",
    backgroundColor: e.colors.neutralBase,
    margin: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  })
};
export {
  o as documentViewerModalStyles,
  l as modalStyledOverrides
};
//# sourceMappingURL=document-viewer-modal.styles.js.map
