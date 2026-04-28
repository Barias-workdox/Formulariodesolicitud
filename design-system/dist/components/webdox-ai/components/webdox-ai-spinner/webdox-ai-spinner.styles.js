import { COMMON_ICON_SIZE_12 as n } from "../../../../constants/common.constants.js";
const o = {
  iconStyles: (t) => ({
    width: n,
    height: n,
    position: "absolute",
    color: t.colors.brand
  }),
  spinnerStyles: {
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
    transformOrigin: `${n} ${n}`
  }
};
export {
  o as styles
};
//# sourceMappingURL=webdox-ai-spinner.styles.js.map
