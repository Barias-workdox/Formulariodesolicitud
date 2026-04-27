import { COMMON_HEIGHT_24, COMMON_HEIGHT_32 } from '@constants/common.constants';

import type { CollapsibleBoxContextType } from './collapsible-box.context';
import type { Size } from './collapsible-box.interfaces';
import type { CommonHeight } from '@constants/common.constants';

export const COLLAPSIBLE_BOX_CONTEXT_DEFAULT_VALUES: CollapsibleBoxContextType = {
  size: 'large',
};

export const ELEMENT_SIZE_BY_COLLAPSIBLE_BOX_SIZE: Record<Size, CommonHeight> = {
  large: COMMON_HEIGHT_32,
  small: COMMON_HEIGHT_24,
};
