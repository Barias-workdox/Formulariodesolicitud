const t = (o, r) => ({
  error: {
    background: o.colors.negativeWashed,
    border: o.colors.negativeSubdued,
    text: o.colors.negativeStrong,
    outline: o.colors.negativeStrong
  },
  info: {
    background: o.colors.brandWashed,
    border: o.colors.brand,
    text: o.colors.neutral,
    outline: o.colors.neutral
  },
  infoLight: {
    background: o.colors.brandWashed,
    border: o.colors.brandSubdued,
    text: o.colors.brandStrong,
    outline: o.colors.brandStrong
  },
  success: {
    background: o.colors.positiveWashed,
    border: o.colors.positive,
    text: o.colors.positiveStrong,
    outline: o.colors.positiveStrong
  },
  warning: {
    background: o.colors.warningWashed,
    border: o.colors.warning,
    text: o.colors.warningStrong,
    outline: o.colors.warningStrong
  }
})[r], l = (o) => ({
  backgroundColor: o.background,
  borderLeft: `4px solid ${o.border}`,
  color: o.text,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "14px",
  justifyContent: "flex-start",
  fontFamily: "Roboto",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "26px",
  letterSpacing: 0,
  textAlign: "left",
  padding: "1rem .75rem"
});
export {
  l as containerStyles,
  t as getColors
};
//# sourceMappingURL=alert.styles.js.map
