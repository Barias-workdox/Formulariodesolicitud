const t = "46px", s = "44px", n = {
  listStyles: (e) => ({
    margin: 0,
    padding: 0,
    border: `1px solid ${e.colors.neutralWashed}`,
    borderRadius: e.borders.borderSm,
    borderBottom: "unset",
    display: "flex",
    flexDirection: "column"
  }),
  documentInfoStyles: (e) => ({
    display: "flex",
    alignItems: "center",
    gap: e.spacing.spacingXs
  }),
  documentNameTextStyles: () => ({
    wordBreak: "break-all",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    maxHeight: s,
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical"
  })
}, a = (e, { dataTestId: o, isSelected: i }) => ({
  Root: {
    props: {
      "data-testid": o
    },
    style: {
      margin: 0,
      minHeight: "auto",
      ...i && { background: e.colors.neutralWashed },
      ":hover": {
        background: e.colors.neutralWashed
      }
    }
  },
  Content: {
    style: {
      margin: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: e.spacing.spacingXs,
      minHeight: "auto",
      padding: e.spacing.spacingMd,
      borderBottom: `1px solid ${e.colors.neutralWashed}`
    }
  }
}), r = (e) => ({
  Root: {
    style: {
      width: "auto",
      borderBottom: `1px solid ${e.colors.neutralWashed}`,
      minHeight: t
    }
  },
  HeadingContainer: {
    style: {
      margin: 0,
      padding: 0
    }
  },
  Content: {
    style: {
      display: "flex",
      alignItems: "center",
      minHeight: t,
      padding: `0 ${e.spacing.spacingMd}`,
      margin: 0
    }
  }
});
export {
  r as documentsListHeadingOverrides,
  a as documentsListItemOverrides,
  n as styles
};
//# sourceMappingURL=documents-list.styles.js.map
