const t = {
  containerStyles: (e) => ({
    display: "flex",
    alignItems: "center",
    padding: `0 ${e.spacing.spacingMd}`,
    borderBottom: `1px solid ${e.colors.divisionLine}`
  })
}, a = {
  containerStyles: {
    maxHeight: "190px",
    overflowY: "auto"
  },
  itemLabelTemplateStyles: (e) => ({
    display: "flex",
    gap: e.spacing.spacingXs,
    alignItems: "center",
    justifyContent: "flex-start",
    whiteSpace: "break-spaces"
  }),
  emptyListStyles: (e) => ({
    padding: `${e.spacing.spacingXs} ${e.spacing.spacingMd}`,
    display: "flex",
    justifyContent: "center"
  }),
  userDataStyles: {
    display: "flex",
    flexDirection: "column"
  },
  labelStyles: (e) => ({
    marginLeft: "auto",
    color: e.colors.neutralSubdued
  })
}, o = ({
  dataTestId: e
}) => ({
  Root: {
    style: ({ $theme: s }) => ({
      borderColor: s.colors.bgBase,
      background: s.colors.bgBase,
      paddingLeft: 0,
      paddingRight: 0
    })
  },
  Input: {
    props: {
      "data-testid": `${e}__input`
    },
    style: ({ $theme: s }) => ({
      background: s.colors.bgBase,
      paddingLeft: s.spacing.spacingMd,
      paddingRight: 0,
      fontSize: s.typography.ParagraphSmall.fontSize
    })
  }
}), n = {
  Inner: {
    style: ({ $theme: e }) => ({
      backgroundColor: e.colors.bgBase
    })
  }
};
export {
  o as getSearcherInputOverrides,
  a as listStyles,
  n as popoverOverrides,
  t as searcherStyles
};
//# sourceMappingURL=mentions-popover.styles.js.map
