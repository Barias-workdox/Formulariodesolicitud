const a = ({
  dataTestId: r
}) => ({
  Root: {
    props: {
      "data-testid": r
    }
  },
  Row: {
    style: ({ $theme: o }) => ({
      backgroundImage: `linear-gradient(135deg,
        ${o.colors.neutralWashed},
        ${o.colors.neutralWashed},
        ${o.colors.neutralWashed},
        ${o.colors.neutralWashed},
        ${o.colors.neutralWashed},
        ${o.colors.neutralWashed},
        ${o.colors.neutralSubtle},
        ${o.colors.neutralWashed},
        ${o.colors.neutralWashed},
        ${o.colors.neutralWashed},
        ${o.colors.neutralWashed},
        ${o.colors.neutralWashed},
        ${o.colors.neutralWashed})`
    })
  }
});
export {
  a as getSkeletonOverrides
};
//# sourceMappingURL=skeleton.overrides.js.map
