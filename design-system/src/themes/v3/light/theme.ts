import { createDesignSystemTheme } from '../utils/theme.utils';

import { BASE_UI_COLORS_OVERRIDES, PRIMITIVE_COLORS, SEMANTIC_COLORS, UI_COLORS } from './colors';

export const lightTheme = createDesignSystemTheme({
  colors: {
    ...PRIMITIVE_COLORS,
    ...SEMANTIC_COLORS,
    ...UI_COLORS,
    ...BASE_UI_COLORS_OVERRIDES,

    // Custom colors
    divisionLine: PRIMITIVE_COLORS.gray10,
    bgBrandAI: PRIMITIVE_COLORS.brandAI,
    bgBrandAIHover: PRIMITIVE_COLORS.brandAIHover,
  },
});
