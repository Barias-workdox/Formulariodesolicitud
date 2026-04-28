const s = ({
  completed: o
}) => ({
  BarContainer: {
    style: {
      marginLeft: 0,
      marginRight: 0
    }
  },
  BarProgress: {
    style: ({ $theme: r }) => ({
      backgroundColor: o ? r.colors.positive : r.colors.brand
    })
  }
});
export {
  s as getProgressBarOverrides
};
//# sourceMappingURL=progress-bar.overrides.js.map
