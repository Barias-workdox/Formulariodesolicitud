const p = ({
  $theme: n,
  labelWithHorizontalPadding: a = !1,
  isCharacterLabel: s = !1,
  hasMargin: i = !0
}) => ({
  color: n.colors.neutralStrong,
  paddingTop: n.spacing.spacing2xs,
  paddingBottom: n.spacing.spacing2xs,
  paddingLeft: a ? n.spacing.spacing2xs : 0,
  paddingRight: a ? n.spacing.spacing2xs : 0,
  fontSize: n.typography.ParagraphMedium.fontSize,
  fontStyle: "normal",
  fontWeight: 400,
  letterSpacing: 0,
  lineHeight: "22px",
  wordBreak: "break-word",
  marginTop: 0,
  marginBottom: i ? n.spacing.spacing2xs : 0,
  textAlign: "left",
  flex: 1,
  ...s && {
    flex: "none"
  }
}), e = {
  customLabelContainerStyles: (n) => ({
    display: "flex",
    gap: n.spacing.spacingXs,
    alignItems: "center",
    justifyContent: "space-between",
    flexGrow: 1,
    margin: 0
  }),
  infoTooltipWrapperStyles: {
    display: "flex",
    padding: "6px 0"
  },
  labelTextContainerStyles: (n) => ({
    display: "flex",
    gap: n.spacing.spacing2xs,
    alignItems: "center"
  })
};
export {
  p as labelFontStyle,
  e as styles
};
//# sourceMappingURL=form-control-label.styles.js.map
