import { GAP_MAP, PADDING_MAP } from '../constants/footer.constants';

import type { FooterSize } from '../footer.interfaces';
import type { SpacingKey } from '@tokens';

/**
 * Utility to get gap size from footer size.
 */
export const getGapSize = (size: FooterSize = 'small'): SpacingKey => {
  return GAP_MAP[size] ?? GAP_MAP['small'];
};

/**
 * Utility to get padding size from footer size.
 */
export const getPaddingSize = (size: FooterSize = 'small'): SpacingKey => {
  return PADDING_MAP[size] ?? PADDING_MAP['small'];
};
