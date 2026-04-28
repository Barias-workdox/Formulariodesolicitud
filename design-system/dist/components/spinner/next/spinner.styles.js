const o = (n, r) => {
  if (r) {
    const e = Math.max(1, Math.round(r * 0.125));
    return {
      size: r,
      strokeWidth: e,
      radius: r / 2 - e / 2,
      center: r / 2
    };
  }
  switch (n) {
    case "small":
      return {
        size: 16,
        strokeWidth: 2,
        radius: 6,
        center: 8
      };
    case "large":
      return {
        size: 24,
        strokeWidth: 3,
        radius: 9,
        center: 12
      };
    default:
      return {
        size: 20,
        strokeWidth: 2.5,
        radius: 8.25,
        center: 10
      };
  }
}, i = (n, r, e) => {
  switch (n) {
    case "brand":
      return {
        primary: r.colors.brand,
        textColor: r.colors.neutral
      };
    case "contrast":
      return {
        primary: r.colors.neutralBase,
        textColor: r.colors.textBase
      };
    case "custom":
      return {
        primary: e && r.colors[e] ? r.colors[e] : e || r.colors.brand,
        textColor: r.colors.neutral
      };
    default:
      return {
        primary: r.colors.brand,
        textColor: r.colors.neutral
      };
  }
}, s = (n) => {
  switch (n) {
    case "small":
      return "microCopy";
    case "medium":
      return "bodySmall";
    case "large":
      return "body";
    default:
      return "body";
  }
}, l = ({
  theme: n,
  config: r,
  isRelative: e,
  opacity: t,
  backgroundColor: a
}) => ({
  container: {
    margin: "auto",
    display: "block",
    shapeRendering: "auto"
  },
  spinnerAnimation: {
    animationName: {
      "0%": {
        transform: "rotate(0deg)"
      },
      "100%": {
        transform: "rotate(360deg)"
      }
    },
    animationDuration: "1s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
    transformOrigin: `${r.center}px ${r.center}px`
  },
  overlay: {
    position: e ? "absolute" : "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: n.colors[a] || a,
    opacity: t,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1e3
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: n.spacing.spacing2xs
  },
  inlineWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: n.spacing.spacing2xs
  },
  hiddenSpinner: {
    opacity: 0,
    pointerEvents: "none"
  }
});
export {
  l as createSpinnerStyles,
  o as getSizeConfig,
  i as getSpinnerColors,
  s as getTextVariantFromSize
};
//# sourceMappingURL=spinner.styles.js.map
