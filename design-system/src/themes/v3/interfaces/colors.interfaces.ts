/**
 * Represents the type of UI element the color token applies to.
 *
 * - bg: Background colors for surfaces and containers
 * - text: Text colors for typography elements
 * - icon: Icon colors for visual elements
 * - border: Border colors for boundaries and dividers
 *
 * This type is used as a prefix in the color token naming system.
 *
 * @deprecated The `Element` type is deprecated and will be removed in future versions.
 */
export type Element = 'bg' | 'text' | 'icon' | 'border';

/**
 * Represents the semantic role or meaning of the color in the design system.
 *
 * - brand: Used for primary elements and primary actions.
 * - base: The default or primary color that serves as a foundation for the UI.
 * - neutral: Used in default text and secondary UI elements, such as buttons or navigation elements.
 * - positive: Used to communicate a favorable outcome, such as a success message, completion, or to initiate key actions in the product.
 * - negative: Used to communicate danger states or errors.
 * - warning: Used to alert and prevent errors from occurring.
 * - peace: Used for documents, import and classification, to highlight information and communicate in-progress states.
 * - power: Used for requests, companies, to communicate something new, such as onboarding or information about new features.
 * - nature: Represents natural elements and environmental themes.
 * - sweet: Represents softer, pleasant experiences.
 * - heat: Used to communicate something new, such as onboarding or information about new features.
 *
 * This type is used as part of the color token naming system to define the semantic purpose of colors.
 */
type Role =
  | 'brand'
  | 'neutral'
  | 'positive'
  | 'negative'
  | 'warning'
  | 'peace'
  | 'power'
  | 'nature'
  | 'sweet'
  | 'heat';

type BaseRole = 'base';

/**
 * Represents the intensity or variation of a color role in the design system.
 *
 * - '' (default): The standard intensity of the color role.
 * - washed: The lightest variation, often used for backgrounds or subtle highlights.
 * - subtle: A very light variation, used for secondary backgrounds or hover states.
 * - depressed: A light variation, typically used for pressed states or secondary elements.
 * - subdued: A medium-light variation, used for tertiary elements or disabled states.
 * - medium: A medium-dark variation, used for emphasis or contrast.
 * - strong: The darkest variation, used for high emphasis or strong contrast.
 *
 * This type is used as part of the color token naming system to define the intensity level of colors.
 */
type Modifier =
  | '' // default
  | 'base'
  | 'washed'
  | 'subtle'
  | 'depressed'
  | 'subdued'
  | 'medium'
  | 'strong';

/**
 * Represents the naming pattern for color tokens in the design system.
 *
 * The pattern follows `elementRoleModifier` format, where:
 * - `element` is the UI element type (bg, text, icon, border)
 * - `Role` is capitalized and represents the semantic purpose
 * - `Modifier` is capitalized and represents the intensity level
 *
 * @example
 * ```
 * const primaryBackground: ColorTokenName = 'bgBrand';
 * const subtleWarningText: ColorTokenName = 'textWarningSubtle';
 * ```
 *
 * @deprecated The `ColorTokenName` type is deprecated in favor of a simpler naming convention that does not include the element identifier as a prefix.
 */
type Deprecated_ColorTokenName<E extends Element = Element> =
  `${E}${Capitalize<BaseRole | Role>}${Capitalize<Modifier>}`;

/**
 * Type for background color tokens in the design system.
 * These tokens follow the `bgRoleModifier` pattern and are used for styling background elements.
 *
 * @example
 * ```
 * const primaryBg: BgColorToken = 'bgBrand';
 * const subtleBg: BgColorToken = 'bgNeutralSubtle';
 * ```
 *
 * @deprecated The element identifier `bg` is deprecated in favor of a simpler naming convention.
 */
export type Deprecated_BgColorToken = Deprecated_ColorTokenName<'bg'>;

/**
 * Type for text color tokens in the design system.
 * These tokens follow the `textRoleModifier` pattern and are used for styling text elements.
 *
 * @example
 * ```
 * const warningText: TextColorToken = 'textWarning';
 * const brandText: TextColorToken = 'textBrandStrong';
 * ```
 *
 * @deprecated The element identifier `text` is deprecated in favor of a simpler naming convention.
 */
export type Deprecated_TextColorToken = Deprecated_ColorTokenName<'text'>;

/**
 * Type for icon color tokens in the design system.
 * These tokens follow the `iconRoleModifier` pattern and are used for styling icon elements.
 *
 * @example
 * ```
 * const positiveIcon: IconColorToken = 'iconPositive';
 * const neutralIcon: IconColorToken = 'iconNeutralSubdued';
 * ```
 *
 * @deprecated The element identifier `icon` is deprecated in favor of a simpler naming convention.
 */
export type Deprecated_IconColorToken = Deprecated_ColorTokenName<'icon'>;

/**
 * Type for border color tokens in the design system.
 * These tokens follow the `borderRoleModifier` pattern and are used for styling borders.
 *
 * @example
 * ```
 * const brandBorder: BorderColorToken = 'borderBrand';
 * const subtleBorder: BorderColorToken = 'borderNeutralSubtle';
 * ```
 *
 * @deprecated The element identifier `border` is deprecated in favor of a simpler naming convention.
 */
export type Deprecated_BorderColorToken = Deprecated_ColorTokenName<'border'>;

/**
 * The default or primary color that serves as a foundation for the UI.
 */
type BaseTokens = BaseRole | 'transparent';

/**
 * Represents the naming pattern for color tokens in the design system.
 *
 * The pattern follows `roleModifier` format, where:
 * - `Role` is capitalized and represents the semantic purpose
 * - `Modifier` is capitalized and represents the intensity level
 *
 * @example
 * ```
 * const primaryBackground: ColorTokenName = 'brand';
 * const subtleWarningText: ColorTokenName = 'warningSubtle';
 * ```
 */
export type ColorTokenName = BaseTokens | `${Role}${Capitalize<Modifier>}`;

/**
 * All semantic colors including deprecated tokens
 */
export type SemanticColors = Partial<
  Record<
    | ColorTokenName
    | Deprecated_BgColorToken
    | Deprecated_TextColorToken
    | Deprecated_IconColorToken
    | Deprecated_BorderColorToken,
    string
  >
>;
