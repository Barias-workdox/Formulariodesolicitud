const r = (o) => `0px 8px 24px 0px ${o.colors.neutralWashed}`, s = {
  Body: {
    style: ({ $theme: o }) => ({
      margin: o.spacing.spacingMd,
      borderRadius: o.spacing.spacing2xs,
      border: `solid 1px ${o.colors.neutralSubtle}`,
      boxShadow: r(o)
    })
  },
  Inner: {
    style: ({ $theme: o }) => ({
      display: "flex",
      flexDirection: "column",
      gap: o.spacing.spacingMd,
      padding: o.spacing.spacingXs,
      backgroundColor: o.colors.bgBase,
      borderRadius: "inherit"
    })
  },
  Arrow: {
    style: ({ $theme: o }) => ({
      border: `solid 1px ${o.colors.neutralSubtle}`,
      boxShadow: r(o),
      backgroundColor: o.colors.bgBase
    })
  }
};
export {
  s as customPopoverOverrides
};
//# sourceMappingURL=information-popover.styles.js.map
