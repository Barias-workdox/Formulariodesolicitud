const t = (r) => ({
  scrollbarColor: "transparent transparent",
  scrollbarWidth: "thin",
  "::-webkit-scrollbar": {
    height: "6px",
    width: "6px"
  },
  "::-webkit-scrollbar-track": {
    background: "transparent"
  },
  "::-webkit-scrollbar-thumb": {
    background: "transparent"
  },
  ":hover": {
    scrollbarColor: `${r.colors.bgNeutralSubtle} transparent`,
    "::-webkit-scrollbar-thumb": {
      background: r.colors.bgNeutralSubtle
    }
  }
});
export {
  t as getCustomScrollBarStyles
};
//# sourceMappingURL=custom-scroll-bar.js.map
