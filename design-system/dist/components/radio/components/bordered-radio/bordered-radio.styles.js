const s = ({
  "data-testid": a
}) => ({
  Root: {
    props: {
      "data-testid": a
    },
    style: ({ $theme: o, $checked: r }) => ({
      alignItems: "center",
      backgroundColor: r ? o.colors.brandWashed : o.colors.bgBase,
      border: `1px solid ${r ? o.colors.brand : o.colors.divisionLine}`,
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      gap: o.spacing.spacing2xs,
      padding: `12px 12px ${o.spacing.spacingXl} 12px`,
      transition: "background-color 0.3s ease",
      ":hover": {
        backgroundColor: r ? o.colors.brandWashed : o.colors.neutralBase
      },
      alignSelf: "stretch",
      margin: 0
    })
  },
  RadioMarkOuter: {
    style: ({
      $theme: o,
      $checked: r
    }) => ({
      alignSelf: "flex-start",
      backgroundColor: "transparent",
      border: `1px solid ${r ? o.colors.brand : o.colors.neutralSubdued}`,
      height: "14px",
      width: "14px"
    })
  },
  RadioMarkInner: {
    style: ({
      $theme: o,
      $checked: r
    }) => ({
      backgroundColor: r ? o.colors.brand : "transparent"
    })
  },
  Label: {
    style: {
      padding: 0
    }
  }
});
export {
  s as getOverrides
};
//# sourceMappingURL=bordered-radio.styles.js.map
