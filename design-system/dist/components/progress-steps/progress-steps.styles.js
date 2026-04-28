const e = {
  rootStyles: () => ({
    display: "flex",
    alignItems: "center"
  }),
  wrapperStepStyles: () => ({
    position: "relative",
    alignSelf: "stretch"
  }),
  compressedDividerStyles: (t) => ({
    width: "16px",
    height: "1px",
    backgroundColor: t.colors.neutralSubtle,
    flexShrink: 0
  }),
  dividerStyles: (t) => ({
    position: "absolute",
    width: "calc(100% - 30px)",
    height: "1px",
    backgroundColor: t.colors.neutralSubtle,
    top: "15px",
    transform: "translateX(-50%)"
  })
};
export {
  e as styles
};
//# sourceMappingURL=progress-steps.styles.js.map
