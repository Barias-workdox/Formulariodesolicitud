const e = {
  articleTextStyles: (t) => ({
    position: "relative",
    paddingLeft: t.spacing.spacingLg,
    alignContent: "flex-start",
    ":before": {
      content: '""',
      position: "absolute",
      top: "18%",
      left: t.spacing.spacingXs,
      transform: "translateY(-50%)",
      width: "4px",
      height: "4px",
      backgroundColor: t.colors.neutralSubdued,
      borderRadius: "50%"
    }
  }),
  headerTextStyles: () => ({
    textTransform: "uppercase",
    fontSize: "12px",
    fontWeight: "500"
  })
};
export {
  e as styles
};
//# sourceMappingURL=legal-quotes.styles.js.map
