import type { ReactNode } from 'react';
import React, { createContext, useContext } from 'react';

import type { HeaderTabsProps } from './header-tabs.interfaces';

const HeaderTabsContext = createContext<HeaderTabsProps | undefined>(undefined);

export interface HeaderTabsProviderProps {
  children: ReactNode;
  defaultProps?: HeaderTabsProps;
}

/**
 * Header tabs Provider component to supply header tabs context to its children.
 */
export const HeaderTabsProvider: React.FC<HeaderTabsProviderProps> = ({
  children,
  defaultProps,
}) => {
  return <HeaderTabsContext.Provider value={defaultProps}>{children}</HeaderTabsContext.Provider>;
};

/**
 * Custom hook to access HeaderTabs context.
 */
export const useHeaderTabs = (): HeaderTabsProps => {
  const context = useContext(HeaderTabsContext);
  if (!context) {
    throw new Error('useHeaderTabs must be used within a HeaderTabsProvider');
  }

  return context;
};
