import type { SectionedCardCornerSize, SectionedCardSize } from './sectioned-card.interfaces';
import type { FooterBorderRadius, FooterSize } from '@components/footer/footer.interfaces';
import type { HeaderBorderRadius, HeaderSize } from '@components/header/header.interfaces';
import type {
  HeaderTabsBorderRadius,
  HeaderTabsSize,
} from '@components/header-tab/header-tabs.interfaces';
import type { SpacingKey } from '@tokens';

export const HEADER_SIZE_MAP = {
  small: 'xsmall',
  medium: 'medium',
} as const satisfies Record<SectionedCardSize, HeaderSize>;

export const HEADER_TABS_SIZE_MAP = {
  small: 'xsmall',
  medium: 'small',
} as const satisfies Record<SectionedCardSize, HeaderTabsSize>;

export const FOOTER_SIZE_MAP = {
  small: 'large',
  medium: 'large',
} as const satisfies Record<SectionedCardSize, FooterSize>;

export const BORDER_RADIUS_MAP = {
  small: 'borderSm',
  medium: 'borderMd',
} as const satisfies Record<
  SectionedCardCornerSize,
  FooterBorderRadius | HeaderTabsBorderRadius | HeaderBorderRadius
>;

export const SLOT_PADDING_MAP = {
  small: 'spacingXs',
  medium: 'spacingMd',
} as const satisfies Record<SectionedCardSize, SpacingKey>;
