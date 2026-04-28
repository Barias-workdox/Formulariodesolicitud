const n = {
  containerStyles: {
    position: "relative",
    display: "flex",
    alignItems: "center"
  },
  colorPickerStyles: (o, { color: a, isValid: r }) => ({
    "-webkit-appearance": "none",
    cursor: "pointer",
    backgroundColor: r ? a : o.colors.bgBase,
    width: o.spacing.spacing3xl,
    height: o.spacing.spacing3xl,
    position: "absolute",
    right: o.spacing.spacingXs,
    border: "2px solid rgba(0,0,0,.2)",
    borderRadius: o.spacing.spacing2xs,
    "::-webkit-color-swatch-wrapper": {
      padding: 0
    },
    "::-webkit-color-swatch": {
      border: "none"
    },
    ":after": {
      content: r ? "" : '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: `linear-gradient(45deg, ${o.colors.negative} 25%, transparent 25%, transparent 50%, ${o.colors.negative} 50%, ${o.colors.negative} 75%, transparent 75%, ${o.colors.bgBase})`,
      backgroundSize: "6px 6px",
      backgroundColor: o.colors.bgBase
    }
  })
};
export {
  n as styles
};
//# sourceMappingURL=color-picker.styles.js.map
