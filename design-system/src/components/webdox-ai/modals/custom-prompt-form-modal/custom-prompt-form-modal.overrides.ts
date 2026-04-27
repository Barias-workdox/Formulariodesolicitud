import type { InputControlProps } from '@components/forms';
import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export const inputOverrides: InputControlProps['overrides'] = {
  Root: {
    style: ({
      $theme,
      $isFocused,
    }: {
      $theme: DesignSystemTheme;
      $isFocused: boolean;
    }): StyleObject => ({
      ...($isFocused && {
        borderColor: $theme.colors.power,
      }),
    }),
  },
};
