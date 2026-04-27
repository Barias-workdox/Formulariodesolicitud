import {
  POPOVER_CONTENT_HEIGHT,
  POPOVER_CONTENT_WIDTH,
} from './conversation-selector-with-popover.constants';

import type { PopoverOverrides } from 'baseui/popover';

export const popoverOverrides: PopoverOverrides = {
  Body: {
    style: {
      height: '100%',
      width: '100%',
      maxHeight: POPOVER_CONTENT_HEIGHT,
      maxWidth: POPOVER_CONTENT_WIDTH,
    },
  },
  Inner: {
    style: {
      height: '100%',
      width: '100%',
    },
  },
};
