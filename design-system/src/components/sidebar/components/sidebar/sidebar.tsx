import type { ReactElement } from 'react';
import { forwardRef, useEffect } from 'react';

import { useTranslation } from '@components/utils';
import { useIsScrollable } from '@components/utils/hooks/use-is-scrollable';
import { useSyncedRef } from '@hooks/use-synced-ref.hook';

import { useSidebar } from '../../sidebar.provider';

import { StyledSidebar, StyledSidebarContent, StyledSidebarFooter } from './sidebar.styles';

import type { SidebarProps } from '../../sidebar.interface';

/**
 * Sidebar: The main container of the Sidebar component.
 * Applies general styles and adapts to the collapsed state.
 * Includes proper ARIA roles for accessibility.
 */
const SidebarComponent = ({ children }: SidebarProps): ReactElement => {
  const { isCollapsed } = useSidebar();
  const { t } = useTranslation();

  return (
    <StyledSidebar
      $isCollapsed={isCollapsed}
      aria-label={t('sidebar.ariaLabels.mainMenu')}
      id="sidebar-navigation"
    >
      {children}
    </StyledSidebar>
  );
};

// Create an accessible content component with default props
const SidebarContent = forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof StyledSidebarContent>
>((props, ref) => {
  const { t } = useTranslation();
  const { isCollapsed, setIsContentScrollable } = useSidebar();
  const internalContentRef = useSyncedRef<HTMLDivElement>({ externalRef: ref });
  const { vertical: isVerticallyScrollable } = useIsScrollable(internalContentRef);

  useEffect(() => {
    setIsContentScrollable(isVerticallyScrollable);
  }, [isVerticallyScrollable, setIsContentScrollable]);

  return (
    <StyledSidebarContent
      ref={internalContentRef}
      role="region"
      aria-label={t('sidebar.ariaLabels.content')}
      $isCollapsed={isCollapsed}
      {...props}
    />
  );
});

SidebarContent.displayName = 'SidebarContent';

const SidebarFooter = forwardRef<HTMLDivElement, React.ComponentProps<typeof StyledSidebarFooter>>(
  (props, ref) => {
    const { isCollapsed, isContentScrollable } = useSidebar();

    return (
      <StyledSidebarFooter
        ref={ref}
        $isCollapsed={isCollapsed}
        $isScrollable={isContentScrollable}
        {...props}
      />
    );
  },
);

SidebarFooter.displayName = 'SidebarFooter';

// Export the main component with compound components
export const Sidebar = Object.assign(SidebarComponent, {
  Content: SidebarContent,
  Footer: SidebarFooter,
});
