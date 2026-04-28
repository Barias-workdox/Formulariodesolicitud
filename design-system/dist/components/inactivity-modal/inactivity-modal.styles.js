const s = (n) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  padding: n.spacing.spacing2xs8
}), e = (n) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  padding: n.spacing.spacingMd
}), o = (n) => ({
  ...e(n),
  backgroundColor: n.colors.warningWashed
}), r = (n) => ({
  ...e(n),
  backgroundColor: n.colors.sweetWashed
}), t = {
  bodyWrapperStyles: s,
  warningIconWrapperStyles: o,
  expiredIconWrapperStyles: r
};
export {
  r as expiredIconWrapperStyles,
  t as styles,
  o as warningIconWrapperStyles
};
//# sourceMappingURL=inactivity-modal.styles.js.map
