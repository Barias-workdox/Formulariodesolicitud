const n = {
  buttonStyles: (o) => ({
    background: "transparent",
    border: "none",
    boxShadow: "none",
    height: "48px",
    padding: 0,
    color: o.colors.neutralSubdued,
    ":where(:hover, :focus)": {
      color: o.colors.brandStrong,
      outline: "none"
    },
    ":focus div": {
      color: o.colors.brandStrong,
      outline: `2px solid ${o.colors.brandSubdued}`
    }
  }),
  wrapperStyles: (o) => ({
    display: "flex",
    alignItems: "center",
    padding: o.spacing.spacing2xs,
    cursor: "pointer",
    marginLeft: "auto",
    marginRight: `-${o.spacing.spacingXs}`
  })
};
export {
  n as styles
};
//# sourceMappingURL=order-by-button.styles.js.map
