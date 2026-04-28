import { getColorsMap as r } from "../../../button/button.styles.js";
const n = {
  buttonStyles: (t, { state: o }) => {
    const e = r({ $theme: t }).control;
    return {
      ...o === "copied" && e[":active"]
    };
  }
};
export {
  n as styles
};
//# sourceMappingURL=copy-to-clipboard-button.styles.js.map
