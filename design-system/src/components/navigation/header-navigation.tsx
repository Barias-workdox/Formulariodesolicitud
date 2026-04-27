import type { ReactElement } from 'react';

import {
  HeaderNavigation as BaseHeaderNavigation,
  StyledNavigationList,
} from 'baseui/header-navigation';

import type { DesignSystemTheme } from '../../themes';
import type {
  HeaderNavigationProps as BaseHeaderNavigationProps,
  HeaderNavigationOverrides,
} from 'baseui/header-navigation';

interface HeaderNavigationProps extends Omit<BaseHeaderNavigationProps, 'overrides'> {
  showBorderBottom?: boolean;
  overrides?: HeaderNavigationOverrides;
}

/**
 * Simplest header navigation with horizontal padding and bottom border, useful for views and drawer headers
 */
export const HeaderNavigation = ({
  children,
  showBorderBottom,
  overrides = {},
}: HeaderNavigationProps): ReactElement => (
  <BaseHeaderNavigation
    overrides={{
      Root: {
        style: ({ $theme }: { $theme: DesignSystemTheme }) => ({
          paddingLeft: '1rem',
          paddingRight: '1rem',
          background: 'white',
          borderBottom: showBorderBottom ? `1px solid ${$theme.colors.divisionLine}` : 'none',
        }),
        ...overrides.Root,
      },
    }}
  >
    <StyledNavigationList $align="center">{children}</StyledNavigationList>
  </BaseHeaderNavigation>
);
