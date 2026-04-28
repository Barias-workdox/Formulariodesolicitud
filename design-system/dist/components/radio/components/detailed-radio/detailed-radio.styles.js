const s = ({
  "data-testid": o
}) => ({
  Root: {
    style: ({
      $theme: r,
      $checked: a
    }) => ({
      alignItems: "center",
      alignSelf: "stretch",
      backgroundColor: a ? r.colors.brandWashed : r.colors.bgBase,
      border: `1px solid ${a ? r.colors.brand : r.colors.neutralSubtle}`,
      display: "flex",
      flexDirection: "row",
      gap: r.spacing.spacingXs,
      padding: r.spacing.spacingXl,
      ":hover": {
        backgroundColor: r.colors.neutralWashed
      }
    }),
    props: {
      "data-testid": o
    }
  },
  Label: {
    style: {
      width: "100%"
    }
  },
  RadioMarkInner: {
    style: ({ $checked: r }) => ({
      height: r ? "6px" : "12px",
      width: r ? "6px" : "12px"
    })
  },
  RadioMarkOuter: {
    style: () => ({
      height: "16px",
      width: "16px"
    })
  }
});
export {
  s as detailedRadioOverrides
};
//# sourceMappingURL=detailed-radio.styles.js.map
