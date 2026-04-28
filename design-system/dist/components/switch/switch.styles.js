const s = (o, r, l) => ({
  Root: {
    style: () => ({
      alignItems: "center"
    })
  },
  Toggle: {
    style: () => ({
      boxShadow: o.lighting.shadowBoxSwitch,
      backgroundColor: l ? o.colors.neutralDepressed : r ? o.colors.positive : o.colors.bgBase,
      ":hover": {
        boxShadow: r ? null : o.lighting.shadowDefault
      },
      ":focus": {
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: o.colors.brand
      }
    })
  },
  ToggleTrack: {
    style: () => ({
      margin: o.spacing.spacing2xs,
      ":active": {
        backgroundColor: o.colors.neutralDepressed
      },
      ":focus": {
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: o.colors.brand
      }
    })
  }
}), e = {
  containerStyles: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row"
  }
};
export {
  s as checkboxOverridesStyles,
  e as styles
};
//# sourceMappingURL=switch.styles.js.map
