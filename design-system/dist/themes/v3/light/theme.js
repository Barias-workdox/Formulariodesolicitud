import { createDesignSystemTheme as o } from "../utils/theme.utils.js";
import { PRIMITIVE_COLORS as r } from "../tokens/primitives.js";
import { SEMANTIC_COLORS as m } from "./colors/semantics.js";
import { UI_COLORS as e } from "./colors/ui.colors.js";
import { BASE_UI_COLORS_OVERRIDES as i } from "./colors/baseui.colors.js";
const R = o({
  colors: {
    ...r,
    ...m,
    ...e,
    ...i,
    // Custom colors
    divisionLine: r.gray10,
    bgBrandAI: r.brandAI,
    bgBrandAIHover: r.brandAIHover
  }
});
export {
  R as lightTheme
};
//# sourceMappingURL=theme.js.map
