import {
  BORDER_RADIUS_MAP,
  FOOTER_SIZE_MAP,
  HEADER_SIZE_MAP,
  HEADER_TABS_SIZE_MAP,
  SLOT_PADDING_MAP,
} from '../sectioned-card.constants';

import type { SectionedCardSize } from '../sectioned-card.interfaces';
import type { FooterBorderRadius, FooterSize } from '@components/footer/footer.interfaces';
import type { HeaderSize } from '@components/header/header.interfaces';
import type { HeaderTabsSize } from '@components/header-tab/header-tabs.interfaces';
import type { SpacingKey } from '@tokens';

/**
 * Utility function to get the corresponding Header size for a given SectionedCard size.
 */
export const getHeaderSize = (size: SectionedCardSize = 'small'): HeaderSize => {
  return HEADER_SIZE_MAP[size] || HEADER_SIZE_MAP.small;
};

/**
 * Utility function to get the corresponding HeaderTabs size for a given SectionedCard size.
 */
export const getHeaderTabsSize = (size: SectionedCardSize = 'small'): HeaderTabsSize => {
  return HEADER_TABS_SIZE_MAP[size] || HEADER_TABS_SIZE_MAP.small;
};

/**
 * Utility function to get the corresponding Footer size for a given SectionedCard size.
 */
export const getFooterSize = (size: SectionedCardSize = 'small'): FooterSize => {
  return FOOTER_SIZE_MAP[size] || FOOTER_SIZE_MAP.small;
};

/**
 * Utility function to get the corresponding Footer border radius for a given SectionedCard size.
 */
export const getBorderRadiusSize = (size: SectionedCardSize = 'small'): FooterBorderRadius => {
  return BORDER_RADIUS_MAP[size] || BORDER_RADIUS_MAP.small;
};

/**
 * Utility function to get the corresponding slot padding for a given SectionedCard size.
 */
export const getSlotPadding = (size: SectionedCardSize = 'small'): SpacingKey => {
  return SLOT_PADDING_MAP[size] || SLOT_PADDING_MAP.small;
};
