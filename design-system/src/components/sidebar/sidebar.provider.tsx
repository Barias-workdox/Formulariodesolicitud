import type { FC } from 'react';
import { createContext, useCallback, useContext, useMemo, useState } from 'react';

import { useResponsiveProps } from '@utils/use-responsive-props.util';

import type { SidebarContextType, SidebarProviderProps } from './sidebar.interface';

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

/**
 * Custom hook to consume the sidebar context.
 * Ensures the hook is used within a SidebarProvider.
 */
export const useSidebar = (): SidebarContextType => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }

  return context;
};

/**
 * SidebarProvider: Component that manages the collapsible state of the sidebar
 * and provides it through a React context.
 */
export const SidebarProvider: FC<SidebarProviderProps> = ({
  children,
  defaultCollapsed = false,
  onToggle,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  const [isContentScrollable, setIsContentScrollable] = useState(false);

  /**
   * Responsive behavior:
   * - Below 1024px (large breakpoint): always collapsed
   * - 1024px and up: use internal state (expanded by default)
   */
  const isLargeUp =
    useResponsiveProps<boolean>(
      {
        large: true,
      },
      false,
    ) ?? false;

  const isForcedCollapsed = !isLargeUp;
  const effectiveIsCollapsed = isForcedCollapsed ? true : isCollapsed;

  /**
   * Toggles the sidebar between collapsed and expanded states.
   * Updates the internal state and calls the optional onToggle callback.
   */
  const toggleSidebar = useCallback(() => {
    // On small screens the sidebar must remain collapsed.
    if (isForcedCollapsed) return;

    setIsCollapsed((prev) => {
      const newState = !prev;

      onToggle?.(newState);

      return newState;
    });
  }, [isForcedCollapsed, onToggle]);

  const setContentScrollable = useCallback((isScrollable: boolean) => {
    setIsContentScrollable(isScrollable);
  }, []);

  /**
   * Memoized context value containing the sidebar state and toggle function.
   * Prevents unnecessary re-renders of consuming components when dependencies haven't changed.
   */
  const value = useMemo(
    () => ({
      isCollapsed: effectiveIsCollapsed,
      toggleSidebar,
      isContentScrollable,
      setIsContentScrollable: setContentScrollable,
    }),
    [effectiveIsCollapsed, toggleSidebar, isContentScrollable, setContentScrollable],
  );

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
};
