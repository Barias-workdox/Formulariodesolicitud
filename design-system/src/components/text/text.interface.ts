/**
 * @deprecated This type contains deprecated text variants that should not be used in new code.
 * Use the TextVariant type instead which contains the current supported variants.
 */
type DeprecatedTextVariant =
  | 'display1' // @deprecated Not used
  | 'display2' // @deprecated Not used
  | 'display3' // @deprecated Not used
  | 'title-large' // @deprecated Not used
  | 'title-medium' // @deprecated Not used
  | 'title-small' // @deprecated Not used
  | 'subtitle' // @deprecated Use 'h1' instead
  | 'subtitle2' // @deprecated Use 'h2' instead
  | 'paragraph1' // @deprecated Use 'body' instead
  | 'paragraph2' // @deprecated Use 'bodySmall' instead
  | 'small-paragraph' // @deprecated Use 'microcopy' instead
  | 'small-details' // @deprecated Use 'microcopy' instead
  | 'upper-details'; // @deprecated Use 'upperDetails' instead

export type TextVariant = 'h1' | 'h2' | 'body' | 'bodySmall' | 'microCopy' | 'upperDetails';

export type AllTextVariant = TextVariant | DeprecatedTextVariant;
