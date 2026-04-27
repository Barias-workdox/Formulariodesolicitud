import { themedStyled } from '@themes/utilities';

import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { PopoverOverrides } from 'baseui/popover';
import type { StyleObject } from 'styletron-react';

type GetPopoverOverridesParams = { zIndex?: StyleObject['zIndex'] };

/**
 * Generates a set of style overrides for Popover components.
 */
export const getPopoverOverrides = ({
  zIndex,
}: GetPopoverOverridesParams = {}): PopoverOverrides => ({
  Body: {
    style: ({ $theme }: { $theme: DesignSystemTheme }): StyleObject => ({
      boxShadow: $theme.lighting.shadowDefault,
      // Required to be over DocumentViewerModal, which has zIndex: 4
      zIndex,
    }),
  },
  Inner: {
    style: ({ $theme }): StyleObject => ({
      backgroundColor: $theme.colors.bgBase,
    }),
  },
  Arrow: {
    style: ({ $theme }): StyleObject => ({
      backgroundColor: $theme.colors.bgBase,
    }),
  },
});

export const StyledWrapper = themedStyled('div', { display: 'inline-flex' });
