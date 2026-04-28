import { ColorTokenName, SemanticColors } from '../interfaces';
/**
 * Generates deprecated semantic color tokens based on the provided semantic colors.
 */
export declare const getDeprecatedSemanticColors: (semanticColorsBase: Partial<Record<ColorTokenName, string>>) => SemanticColors;
/**
 * Extracts a group of colors from the provided colors object based on the specified prefix.
 *
 * @example Extracting background colors:
 * const bgColors = extractGroup(colors, 'bg');
 * // Returns an object containing all color tokens that start with 'bg', such as 'bgBase', 'bgSubtle', etc.
 *
 * @deprecated This function is intended for internal use only and may be removed in future versions. Please use with caution.
 */
export declare const extractGroup: (colors: Record<string, string>, prefix: string) => Record<string, string>;
