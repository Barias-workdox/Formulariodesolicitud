import { heightMap as t } from "../../button.styles.js";
const a = {
  BaseButton: {
    style: ({ $size: e, $theme: i }) => ({
      padding: 0,
      width: t[e] || t.default,
      flexShrink: 0,
      [i.mediaQuery.small]: {
        padding: 0
      }
    })
  }
};
export {
  a as iconButtonOverrides
};
//# sourceMappingURL=icon-button.styles.js.map
