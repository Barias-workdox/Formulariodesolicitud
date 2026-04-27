import type { ReactElement } from 'react';

import { useSidebar } from '@components/sidebar/sidebar.provider';

import { SidebarTrigger } from '../trigger';

import { StyledSidebarHeader } from './sidebar-header.styles';

import type { SidebarHeaderProps } from '../../sidebar.interface';

/**
 * SidebarHeader: Component for the header section of the Sidebar.
 * Remains fixed at the top with proper keyboard navigation order.
 */
export const SidebarHeader = ({
  children,
  showTrigger = true,
}: SidebarHeaderProps): ReactElement => {
  const { isCollapsed, toggleSidebar } = useSidebar();

  return (
    <StyledSidebarHeader $isCollapsed={isCollapsed}>
      {children}
      {showTrigger && <SidebarTrigger onClick={toggleSidebar} />}
    </StyledSidebarHeader>
  );
};
