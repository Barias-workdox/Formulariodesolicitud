const r = () => ({
  Input: {
    style: ({ $theme: o }) => ({
      backgroundColor: "transparent",
      padding: "10px 0px",
      ...o.typography.ParagraphSmall
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
}), e = () => ({
  TitleContainer: {
    overflow: "auto",
    whiteSpace: "unset",
    wordBreak: "break-all"
  }
}), t = {
  wrapper: (o) => ({
    background: o.colors.bgBase
  }),
  inputWrapper: (o) => ({
    padding: `0px ${o.spacing.spacingMd}`,
    borderBottomColor: o.colors.neutralWashed,
    borderBottomWidth: "1px",
    borderBottomStyle: "solid"
  }),
  bodyStyles: (o) => ({
    display: "flex",
    flexDirection: "column",
    height: "157px",
    rowGap: o.spacing.spacingMd,
    padding: o.spacing.spacingMd,
    overflowY: "auto"
  }),
  noResultsWrapper: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  footerStyles: (o) => ({
    borderTopColor: o.colors.neutralSubtle,
    borderTopWidth: "1px",
    borderTopStyle: "solid",
    padding: o.spacing.spacingMd,
    display: "flex",
    flexDirection: "column"
  })
};
export {
  r as inputStyledOverrides,
  e as popoverStyledOverrides,
  t as userListStyles
};
//# sourceMappingURL=users-list.styles.js.map
