import { forwardRef, type ReactNode } from 'react';

import {
  DisplayLarge,
  DisplayMedium,
  DisplaySmall,
  HeadingLarge,
  HeadingMedium,
  HeadingSmall,
  HeadingXSmall,
  LabelSmall,
  LabelXSmall,
  ParagraphLarge,
  ParagraphMedium,
  ParagraphSmall,
  ParagraphXSmall,
} from 'baseui/typography';

import { typographies } from '@themes';
import { DEFAULT_FONT } from '@tokens';

import type { TextVariant } from './text.interface';
import type { DesignSystemColorType } from '@themes/theme.interfaces';
import type { BlockProps } from 'baseui/block';
import type { ConfigurationOverride } from 'baseui/helpers/overrides';
import type { StyleObject } from 'styletron-react';

export interface TextProps extends Omit<BlockProps, 'color'> {
  'data-testid'?: string;
  children: ReactNode;
  variant: TextVariant;
  textAlign?: StyleObject['textAlign'];
  fontWeight?: StyleObject['fontWeight'];
  color?: DesignSystemColorType | string;
  htmlFor?: string;
  $style?: ConfigurationOverride;
  onClick?(): void;
}

const textComponents = {
  display1: DisplayLarge,
  display2: DisplayMedium,
  display3: DisplaySmall,
  'title-large': HeadingLarge,
  'title-medium': HeadingMedium,
  'title-small': HeadingSmall,
  subtitle: HeadingXSmall,
  subtitle2: ParagraphLarge,
  paragraph1: ParagraphMedium,
  paragraph2: ParagraphSmall,
  'small-paragraph': ParagraphXSmall,
  'small-details': LabelSmall,
  'upper-details': LabelXSmall,
  h1: HeadingXSmall,
  h2: ParagraphLarge,
  body: ParagraphMedium,
  bodySmall: ParagraphSmall,
  microCopy: ParagraphXSmall,
  upperDetails: LabelXSmall,
};

/**
 * This component renders the text component related to the design system.
 * The main idea is to facilitate the development of the texts to use the same tokens
 * with the design system and also add support for fontWeight from the properties.
 */
export const Text = forwardRef<HTMLElement, TextProps>(function _Text(
  {
    variant,
    fontWeight = '400',
    textAlign = 'start',
    children,
    'data-testid': dataTestId,
    $style = {},
    onClick,
    color,
    ...rest
  },
  textRef,
): JSX.Element {
  const TextComponent = textComponents[variant] ?? textComponents.body;

  return (
    <TextComponent
      overrides={{
        Block: {
          style: (styleProps): StyleObject => ({
            ...(typeof $style === 'function' ? $style(styleProps) : $style),
            ...(typographies[variant] ?? {}),
            ...DEFAULT_FONT,
            fontWeight,
            textAlign,
          }),
          props: {
            ...(dataTestId && { 'data-testid': dataTestId }),
            ref: textRef,
            onClick,
          },
        },
      }}
      color={color as BlockProps['color']}
      {...rest}
    >
      {children}
    </TextComponent>
  );
});
