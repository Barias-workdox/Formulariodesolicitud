const e = (o) => ({
  Body: {
    style: {
      width: `${o}px`
    }
  }
}), l = {
  containerWrapper: (o, { disabled: r }) => ({
    backgroundColor: o.colors.neutralBase,
    borderWidth: "1px",
    outline: "none",
    position: "relative",
    borderColor: o.colors.neutralBase,
    borderBottomColor: o.colors.neutralSubdued,
    borderStyle: "solid",
    ...r ? {
      pointerEvents: "none",
      backgroundColor: o.colors.neutralWashed
    } : {}
  }),
  contentStyles: {
    display: "flex",
    alignItems: "center",
    width: "100%"
  },
  valueWrapper: () => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
    padding: "10px 0 10px 10px",
    overflow: "inherit"
  }),
  counterBadge: (o, { disabled: r }) => ({
    backgroundColor: o.colors.brandWashed,
    color: o.colors.brandMedium,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "1000px",
    padding: `0 ${o.spacing.spacingXs}`,
    fontSize: "12px",
    fontWeight: 500,
    margin: 0,
    marginRight: o.spacing.spacing2xs,
    ...r ? {
      backgroundColor: o.colors.neutralSubtle,
      color: o.colors.neutralDepressed
    } : {}
  }),
  contentWrapper: {
    flex: 1,
    display: "flex",
    overflow: "hidden",
    flexDirection: "column"
  },
  textValueWrapper: () => ({
    overflow: "inherit"
  }),
  textValue: (o, { disabled: r }) => ({
    overflow: "inherit",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    color: o.colors.neutralStrong,
    margin: 0,
    ...r ? {
      color: o.colors.neutralDepressed
    } : {}
  })
};
export {
  e as popoverStyledOverrides,
  l as userMultiselectStyles
};
//# sourceMappingURL=user-multiselect.styles.js.map
