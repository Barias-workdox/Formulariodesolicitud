const r = () => ({
  BaseButton: {
    style: ({ $theme: o }) => ({
      backgroundColor: o.colors.bgBase,
      borderColor: o.colors.bgBase,
      border: `1px solid ${o.colors.bgBase}`,
      ":hover": {
        backgroundColor: o.colors.bgBase,
        borderColor: o.colors.bgBase
      },
      ":active": {
        backgroundColor: o.colors.bgBase,
        borderColor: o.colors.bgBase
      }
    })
  }
});
export {
  r as iconButtonOverrides
};
//# sourceMappingURL=toggle-icon.overrides.js.map
