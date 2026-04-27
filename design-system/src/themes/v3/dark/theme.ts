import { PRIMITIVE_COLORS } from '../tokens/primitives';
import { createDesignSystemTheme } from '../utils/theme.utils';

import { BASE_UI_COLORS_OVERRIDES, SEMANTIC_COLORS, UI_COLORS } from './colors';

export const darkTheme = createDesignSystemTheme({
  colors: {
    ...BASE_UI_COLORS_OVERRIDES,
    ...PRIMITIVE_COLORS,
    ...SEMANTIC_COLORS,
    ...UI_COLORS,

    // Custom colors
    divisionLine: PRIMITIVE_COLORS.gray100,
    bgBrandAI: PRIMITIVE_COLORS.brandAI,
    bgBrandAIHover: PRIMITIVE_COLORS.brandAIHover,
  },
  dark: true,
});
