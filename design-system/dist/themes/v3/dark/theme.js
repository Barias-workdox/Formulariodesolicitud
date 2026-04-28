import { PRIMITIVE_COLORS as r } from "../tokens/primitives.js";
import { createDesignSystemTheme as o } from "../utils/theme.utils.js";
import { SEMANTIC_COLORS as e } from "./colors/semantics.js";
import { UI_COLORS as m } from "./colors/ui.colors.js";
import { BASE_UI_COLORS_OVERRIDES as I } from "./colors/baseui.colors.js";
const S = o({
  colors: {
    ...I,
    ...r,
    ...e,
    ...m,
    // Custom colors
    divisionLine: r.gray100,
    bgBrandAI: r.brandAI,
    bgBrandAIHover: r.brandAIHover
  },
  dark: !0
});
export {
  S as darkTheme
};
//# sourceMappingURL=theme.js.map
