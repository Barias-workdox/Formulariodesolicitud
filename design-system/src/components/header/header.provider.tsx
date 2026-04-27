import type { ReactNode } from 'react';
import React, { createContext, useContext } from 'react';

import type { HeaderProps } from './header.interfaces';

const HeaderContext = createContext<HeaderProps | undefined>(undefined);

export interface HeaderProviderProps {
  children: ReactNode;
  defaultProps?: HeaderProps;
}

/**
 * Header Provider component to supply header context to its children.
 */
export const HeaderProvider: React.FC<HeaderProviderProps> = ({ children, defaultProps }) => {
  return <HeaderContext.Provider value={defaultProps}>{children}</HeaderContext.Provider>;
};

/**
 * Custom hook to access Header context.
 */
export const useHeader = (): HeaderProps => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error('useHeader must be used within a HeaderProvider');
  }

  return context;
};
