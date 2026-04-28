const o = {
  Root: {
    style: ({ $isFocused: e, $isHovered: t, $theme: r }) => ({
      borderRadius: 0,
      outlineOffset: e ? "-2px" : "-1px",
      borderBottom: `1px solid ${r.colors.neutralWashed}`,
      ...e ? { outlineWidth: "2px" } : { outlineWidth: t ? "1px" : 0 }
    })
  },
  Input: {
    style: ({ $theme: e }) => ({
      padding: 0,
      height: "40px",
      fontSize: "14px",
      "::placeholder": {
        color: e.colors.neutralDepressed
      }
    })
  },
  StartEnhancer: {
    style: { padding: 0, border: "1px solid transparent" }
  },
  EndEnhancer: {
    style: { padding: 0, border: "1px solid transparent" }
  }
};
export {
  o as inputOverrides
};
//# sourceMappingURL=search-input.styles.js.map
