import type { AllTextVariant } from './text.interface';
import type { Typography } from 'baseui/themes';

/**
 * Maps text variant definitions from the design system to their corresponding typography components in BaseUI.
 */
export const textComponentsMap: Record<AllTextVariant, keyof Typography> = {
  display1: 'DisplayLarge',
  display2: 'DisplayMedium',
  display3: 'DisplaySmall',
  'title-large': 'HeadingLarge',
  'title-medium': 'HeadingMedium',
  'title-small': 'HeadingSmall',
  subtitle: 'HeadingXSmall',
  subtitle2: 'ParagraphLarge',
  paragraph1: 'ParagraphMedium',
  paragraph2: 'ParagraphSmall',
  'small-paragraph': 'ParagraphXSmall',
  'small-details': 'LabelSmall',
  'upper-details': 'LabelXSmall',
  h1: 'HeadingXSmall',
  h2: 'ParagraphLarge',
  body: 'ParagraphMedium',
  bodySmall: 'ParagraphSmall',
  microCopy: 'ParagraphXSmall',
  upperDetails: 'LabelXSmall',
};
