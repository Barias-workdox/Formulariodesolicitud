const o = ({
  isOpen: e,
  handleOpen: t
}) => ({
  Root: {
    props: {
      ...e ? { $isFocused: !0 } : {},
      onClick: t
    },
    style: {
      cursor: "pointer"
    }
  },
  Input: {
    style: {
      pointerEvents: "none"
    }
  }
});
export {
  o as getInputOverrides
};
//# sourceMappingURL=input-selector.overrides.js.map
