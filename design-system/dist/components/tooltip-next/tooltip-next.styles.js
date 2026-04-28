const l = ({
  size: a = "sm",
  zIndex: n,
  hasPointerEventsEnabled: s
}) => ({
  Arrow: {
    style: ({ $theme: r }) => ({
      backgroundColor: r.colors.neutral
    })
  },
  Body: {
    style: ({ $theme: r }) => {
      const o = {
        sm: r.spacing.spacingSm,
        md: r.spacing.spacingMd
      }[a];
      return {
        zIndex: n,
        borderRadius: "4px",
        padding: o,
        backgroundColor: r.colors.neutral,
        pointerEvents: s ? "all" : "none"
      };
    }
  },
  Inner: {
    style: ({ $theme: r }) => {
      const o = {
        sm: r.typography.ParagraphXSmall,
        md: r.typography.ParagraphSmall
      }[a];
      return {
        padding: 0,
        textTransform: "unset",
        background: "transparent",
        color: r.colors.textBase,
        maxWidth: "280px",
        overflowWrap: "break-word",
        ...o
      };
    }
  }
});
export {
  l as getOverrides
};
//# sourceMappingURL=tooltip-next.styles.js.map
