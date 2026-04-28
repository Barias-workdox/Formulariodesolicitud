const s = ({
  isActive: o
}) => ({
  Root: {
    style: ({ $theme: r }) => ({
      backgroundColor: o ? r.colors.neutralBase : r.colors.transparent,
      transition: "background-color 0.15s ease-out"
    })
  }
}), e = {
  Block: {
    style: ({ $theme: o }) => ({
      margin: `0 ${o.spacing.spacingXs} 0 ${o.spacing.spacingXs}`,
      color: "inherit",
      lineHeight: "140%",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    })
  }
};
export {
  s as getBackgroundIconOverrides,
  e as textOverrides
};
//# sourceMappingURL=account-menu-button.overrides.js.map
