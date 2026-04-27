import type { ColorTokenName, Element, SemanticColors } from '../interfaces';

const DEPRECATED_ELEMENTS: Element[] = ['bg', 'text', 'icon', 'border'];

/**
 * Generates deprecated semantic color tokens based on the provided semantic colors.
 */
export const getDeprecatedSemanticColors = (
  semanticColorsBase: Partial<Record<ColorTokenName, string>>,
): SemanticColors => {
  const deprecatedColors: SemanticColors = {};

  DEPRECATED_ELEMENTS.map((element) => {
    Object.entries(semanticColorsBase).forEach(([key, value]) => {
      deprecatedColors[
        `${element}${key.charAt(0).toUpperCase()}${key.slice(1)}` as keyof SemanticColors
      ] = value;
    });
  });

  return deprecatedColors;
};

/**
 * Extracts a group of colors from the provided colors object based on the specified prefix.
 *
 * @example Extracting background colors:
 * const bgColors = extractGroup(colors, 'bg');
 * // Returns an object containing all color tokens that start with 'bg', such as 'bgBase', 'bgSubtle', etc.
 *
 * @deprecated This function is intended for internal use only and may be removed in future versions. Please use with caution.
 */
export const extractGroup = (
  colors: Record<string, string>,
  prefix: string,
): Record<string, string> => {
  const result: Record<string, string> = {};

  for (const [key, value] of Object.entries(colors)) {
    if (key.startsWith(prefix)) {
      result[key] = value;
    }
  }

  return result;
};
