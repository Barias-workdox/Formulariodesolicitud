const s = (r) => ({
  BaseButton: {
    props: {
      ...r && { "data-testid": r }
    },
    style: ({ $theme: o }) => ({
      backgroundColor: o.colors.bgBase,
      border: `1px solid ${o.colors.neutralWashed}`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: o.spacing.spacingMd,
      paddingBottom: o.spacing.spacingMd,
      ":hover": {
        backgroundColor: o.colors.neutralBase
      },
      ":focus": {
        backgroundColor: o.colors.neutralBase
      }
    })
  }
});
export {
  s as oauthButtonStyledOverrides
};
//# sourceMappingURL=oauth-button.styles.js.map
