import type { ListItemProps } from '@components/list';
import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export const listItemOverrides: ListItemProps['overrides'] = {
  Root: {
    style: ({ $theme }: { $theme: DesignSystemTheme }): StyleObject => ({
      ':active': {
        color: $theme.colors.neutral,
        backgroundColor: $theme.colors.neutralWashed,
      },
    }),
  },
};
