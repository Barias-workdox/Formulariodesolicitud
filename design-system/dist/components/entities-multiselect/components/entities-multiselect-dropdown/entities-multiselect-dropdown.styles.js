const n = () => ({
  Input: {
    style: ({ $theme: r }) => ({
      backgroundColor: "transparent",
      padding: "10px 0px",
      ...r.typography.ParagraphSmall
    })
  },
  InputContainer: {
    style: {
      backgroundColor: "transparent"
    }
  },
  Root: {
    style: {
      border: "none",
      backgroundColor: "transparent",
      padding: 0
    }
  },
  StartEnhancer: {
    style: {
      backgroundColor: "transparent",
      paddingLeft: 0
    }
  }
});
export {
  n as inputStyledOverrides
};
//# sourceMappingURL=entities-multiselect-dropdown.styles.js.map
