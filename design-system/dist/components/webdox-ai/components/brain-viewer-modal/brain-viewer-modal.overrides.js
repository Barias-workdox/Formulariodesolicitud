const l = ({ zIndex: e }) => ({
  Close: {
    style: {
      display: "none"
    }
  },
  Root: {
    style: {
      zIndex: e
    }
  },
  Dialog: {
    style: {
      margin: 0,
      height: "100vh",
      display: "flex",
      flexDirection: "column"
    }
  }
});
export {
  l as getModalOverrides
};
//# sourceMappingURL=brain-viewer-modal.overrides.js.map
