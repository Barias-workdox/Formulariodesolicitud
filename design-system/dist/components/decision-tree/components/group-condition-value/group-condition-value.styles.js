const n = {
  Input: {
    style: ({ $theme: p }) => ({
      fontSize: p.typography.ParagraphSmall.fontSize,
      padding: `${p.spacing.spacingXs} ${p.spacing.spacingSm}`
    })
  }
}, s = {
  Input: {
    props: {
      overrides: {
        Input: n.Input
      }
    }
  }
};
export {
  s as dateInputOverrides,
  n as inputOverrides
};
//# sourceMappingURL=group-condition-value.styles.js.map
