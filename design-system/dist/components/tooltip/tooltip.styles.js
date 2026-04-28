const n = (o) => ({
  color: o.colors.textBase,
  textTransform: "none",
  marginTop: 0,
  marginBottom: 0,
  letterSpacing: 0,
  wordBreak: "break-word"
}), a = (o, t, r) => ({
  Body: {
    style: {
      zIndex: r
    }
  },
  Inner: {
    style: ({ $theme: e }) => ({
      maxWidth: o ?? "60vw",
      backgroundColor: e.colors.neutral,
      ...t
    })
  }
});
export {
  a as tooltipCaptionOverridesStyles,
  n as tooltipCaptionStyles
};
//# sourceMappingURL=tooltip.styles.js.map
