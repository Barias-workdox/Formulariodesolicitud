import { getColorsMap as s } from "../../../button/button.styles.js";
const c = {
  buttonStyles: (o, { state: r }) => {
    const t = s({ $theme: o }).control;
    return {
      borderColor: o.colors.neutralSubtle,
      borderRadius: o.spacing.spacing2xs,
      ...r === "active" && t[":active"]
    };
  }
};
export {
  c as styles
};
//# sourceMappingURL=feedback-button.styles.js.map
