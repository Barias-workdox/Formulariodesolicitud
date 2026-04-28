/**
 * @deprecated This type contains deprecated text variants that should not be used in new code.
 * Use the TextVariant type instead which contains the current supported variants.
 */
type DeprecatedTextVariant = 'display1' | 'display2' | 'display3' | 'title-large' | 'title-medium' | 'title-small' | 'subtitle' | 'subtitle2' | 'paragraph1' | 'paragraph2' | 'small-paragraph' | 'small-details' | 'upper-details';
export type TextVariant = 'h1' | 'h2' | 'body' | 'bodySmall' | 'microCopy' | 'upperDetails';
export type AllTextVariant = TextVariant | DeprecatedTextVariant;
export {};
