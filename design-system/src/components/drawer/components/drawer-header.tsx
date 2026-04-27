import type { PropsWithChildren, ReactNode } from 'react';

import { Close } from '@carbon/icons-react';
import { StyledNavigationItem } from 'baseui/header-navigation';

import { useCss } from '@components/utils/hooks/use-css';

import { IconButton } from '../../button/variants/icon-button';
import { HeaderNavigation } from '../../navigation';

import { drawerHeaderStyles } from './drawer.styles';

export type DrawerHeaderProps = PropsWithChildren<{
  'data-testid'?: string;
  icon?: ReactNode;
  title: ReactNode;
  onClose?(params?: unknown): void;
}>;

/** Styled drawer header component */
export const DrawerHeader = ({
  'data-testid': dataTestId = 'design-system__drawer--component',
  children,
  onClose,
  icon,
  title,
}: DrawerHeaderProps): JSX.Element => {
  const { headerContainerStyles, theme } = useCss(drawerHeaderStyles);

  return (
    <HeaderNavigation showBorderBottom>
      <StyledNavigationItem $style={{ paddingLeft: theme.sizing.scale300 }}>
        <div className={headerContainerStyles}>
          {icon}
          {title}
        </div>
      </StyledNavigationItem>
      {children}
      <StyledNavigationItem
        $style={{
          marginLeft: 'auto',
          paddingRight: theme.sizing.scale300,
          paddingLeft: theme.sizing.scale300,
        }}
      >
        <IconButton
          data-testid={`${dataTestId}-close-drawer-button`}
          kind="control"
          size="32px"
          onClick={onClose}
        >
          <Close size={16} />
        </IconButton>
      </StyledNavigationItem>
    </HeaderNavigation>
  );
};
