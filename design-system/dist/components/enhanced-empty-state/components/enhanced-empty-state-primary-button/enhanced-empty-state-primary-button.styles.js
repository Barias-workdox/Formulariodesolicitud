const t = {
  BaseButton: {
    style: ({ $theme: e }) => ({
      width: "fit-content",
      display: "none",
      [e.mediaQuery.large]: {
        display: "inline-flex"
      }
    })
  }
}, n = {
  BaseButton: {
    style: ({ $theme: e }) => ({
      width: "fit-content",
      display: "inline-flex",
      [e.mediaQuery.large]: {
        display: "none"
      }
    })
  }
};
export {
  t as desktopButtonOverrides,
  n as mobileButtonOverrides
};
//# sourceMappingURL=enhanced-empty-state-primary-button.styles.js.map
