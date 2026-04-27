import type { HeaderTabsSize } from '../header-tabs.interfaces';
import type { SpacingKey } from '@tokens/spacing';
import type { Typography } from 'baseui/themes';

export const PADDING_MAP = {
  xsmall: 'spacingXs',
  small: 'spacingMd',
} satisfies Record<HeaderTabsSize, SpacingKey>;

export const PADDING_TOP_MAP = {
  xsmall: 'spacingXs',
  small: 'spacing2xs',
} satisfies Record<HeaderTabsSize, SpacingKey>;

export const TAB_PADDING_MAP = {
  xsmall: 'spacing2xs',
  small: 'spacingXs',
} satisfies Record<HeaderTabsSize, SpacingKey>;

export const TAB_FONT_SIZE_MAP = {
  xsmall: 'ParagraphSmall',
  small: 'ParagraphMedium',
} satisfies Record<HeaderTabsSize, keyof Typography>;
