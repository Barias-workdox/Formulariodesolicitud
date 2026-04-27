import { COUNTRY_SELECT_DROPDOWN_WIDTH } from '../../legal-whisper-settings.constants';

import type { SelectOverrides } from 'baseui/select';
import type { StyleObject } from 'styletron-react';

export const selectOverrides: SelectOverrides = {
  DropdownContainer: {
    style: ({ $theme }): StyleObject => ({
      width: COUNTRY_SELECT_DROPDOWN_WIDTH,
      marginLeft: $theme.spacing.spacingMd,
    }),
  },
};
