import type { FooterSize } from '../footer.interfaces';
import type { SpacingKey } from '@tokens/spacing';

export const PADDING_MAP = {
  small: 'spacingXs',
  medium: 'spacingMd',
  large: 'spacingMd',
} satisfies Record<FooterSize, SpacingKey>;

export const GAP_MAP = {
  small: 'spacingXs',
  medium: 'spacingMd',
  large: 'spacingXs',
} satisfies Record<FooterSize, SpacingKey>;
