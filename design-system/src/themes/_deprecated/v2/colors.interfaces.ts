/**
 * These types define the core concepts of our design system color tokens.
 * They are closely linked to the Figma design definitions available at:
 * https://www.figma.com/file/d6NSl7Hd5iv8ArOc9pgjhl/Nuclear-%5BDS-Lab%5D?type=design&node-id=4682-372&mode=dev
 *
 * The color token types, including Element, Role, and Modifier, help ensure consistency
 * and maintainability in our styling system. They are used to define and manage color values
 * for various elements, roles, and modifiers in our component library.
 *
 * These types serve as a foundation for naming and referencing colors, making it easier to
 * maintain a centralized color system and ensure consistent styling throughout our UI components.
 *
 * @example
 * ```
 * // Accessing a specific color token:
 * const primaryBg: ColorTokenName = 'bgBrand';
 * ```
 */

type Element = 'bg' | 'text' | 'icon' | 'border';

/**
 * Color tokens with the 'base' role have a fundamental or default significance in the styling system.
 */
type BaseRole = 'base' | 'transparent';

type Role =
  | BaseRole
  | 'neutral'
  | 'brand'
  | 'bgBrandAI'
  | 'positive'
  | 'negative'
  | 'warning'
  | 'peace'
  | 'power'
  | 'nature'
  | 'sweet'
  | 'heat';

type Modifier =
  | '' // default
  | 'washed'
  | 'subtle'
  | 'depressed'
  | 'subdued'
  | 'medium'
  | 'strong';

/**
 * The color token types in this library provide a structured and flexible way to define
 * and manage color values for various elements, roles and modifiers in our component
 * library. These types help ensure consistency and maintainability in our styling system.
 
 * The color token types are defined as follows:
 
 * - Element: Represents the type of UI element the color token applies to, such as background, text, icon, or border.
 * - Role: Represents the role or semantic meaning of the color token, such as base, transparent, neutral, brand, positive, negative, warning, peace, power, nature, sweet, heat.
 * - Modifier: Represents additional variations or styles applied to the color token, such as default, washed, subtle, depressed, subdued, medium, or strong.
 
 * These types can be combined to create specific color token names using the `ColorTokenName` type,
 * which follows the pattern `elementRoleModifier`. For example, `bgBrandSubtle`
 * represents a background color token for the brand role with a subtle modifier.
 
 * Use these color token types to maintain a centralized color system, easily
 * reference color values throughout our component library, and ensure consistent styling
 * across our UI components.
 
 * @example
 * ```
 * // Accessing a specific color token:
 * const primaryBg: ColorTokenName = 'bgBrand';
 * ```
 */
export type ColorTokenName<E extends Element = Element> =
  `${E}${Capitalize<Role>}${Capitalize<Modifier>}`;

export type BgColorToken = ColorTokenName<'bg'> | 'bgBrandAI';

export type TextColorToken = ColorTokenName<'text'>;

export type IconColorToken = ColorTokenName<'icon'>;

export type BorderColorToken = ColorTokenName<'border'>;
