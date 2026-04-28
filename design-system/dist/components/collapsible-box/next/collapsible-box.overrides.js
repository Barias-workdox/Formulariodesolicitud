const o = ({
  gap: e
}) => ({
  Root: {
    style: ({ $theme: l }) => ({
      display: "flex",
      flexDirection: "column",
      gap: e ?? l.spacing.spacingMd
    })
  }
});
export {
  o as getCollapsibleBoxOverrides
};
//# sourceMappingURL=collapsible-box.overrides.js.map
