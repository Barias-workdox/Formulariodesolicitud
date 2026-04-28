const r = {
  textStyles: (t) => ({
    wordBreak: "break-word",
    textAlign: "justify",
    color: t.colors.neutralSubdued,
    margin: 0,
    ":has(*) :first-child": {
      marginTop: 0
    },
    ":has(*) :last-child": {
      marginBottom: 0
    }
  })
};
export {
  r as styles
};
//# sourceMappingURL=generative-answer-variant.styles.js.map
