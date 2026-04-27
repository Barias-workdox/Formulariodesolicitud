import type { HeaderSize } from '../header.interfaces';
import type { BackgroundIconSize } from '@components/background-icon/next';
import type { SizeType } from '@components/button';
import type { FileTypeIconSize } from '@components/file-type-icon';
import type { TextVariant } from '@components/text';
import type { SpacingKey } from '@tokens/spacing';

export const TEXT_VARIANT_MAP = {
  xsmall: 'bodySmall',
  small: 'body',
  medium: 'h2',
} satisfies Record<HeaderSize, TextVariant>;

export const ICON_SIZE_MAP = {
  xsmall: '24px',
  small: '24px',
  medium: '32px',
} satisfies Record<HeaderSize, BackgroundIconSize>;

export const FILE_ICON_SIZE_MAP = {
  xsmall: 24,
  small: 24,
  medium: 32,
} satisfies Record<HeaderSize, FileTypeIconSize>;

export const ACTION_BUTTON_SIZE_MAP = {
  xsmall: '24px',
  small: '32px',
  medium: '32px',
} satisfies Record<HeaderSize, SizeType>;

export const TITLE_WEIGHT_MAP = {
  xsmall: '500',
  small: '700',
  medium: '700',
} as const satisfies Record<HeaderSize, string>;

export const PADDING_MAP = {
  xsmall: 'spacingXs',
  small: 'spacingXs',
  medium: 'spacingMd',
} satisfies Record<HeaderSize, SpacingKey>;

export const GAP_MAP = {
  xsmall: 'spacingXs',
  small: 'spacingXs',
  medium: 'spacingSm',
} satisfies Record<HeaderSize, SpacingKey>;
