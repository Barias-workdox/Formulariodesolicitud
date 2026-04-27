import type { ReactNode } from 'react';
import React, { createContext, useContext } from 'react';

import type { FooterProps } from './footer.interfaces';

const FooterContext = createContext<FooterProps | undefined>(undefined);

export interface FooterProviderProps {
  children: ReactNode;
  defaultProps?: FooterProps;
}

/**
 * Footer Provider component to supply footer context to its children.
 */
export const FooterProvider: React.FC<FooterProviderProps> = ({ children, defaultProps }) => {
  return <FooterContext.Provider value={defaultProps}>{children}</FooterContext.Provider>;
};

/**
 * Custom hook to access Footer context.
 */
export const useFooter = (): FooterProps => {
  const context = useContext(FooterContext);
  if (!context) {
    throw new Error('useFooter must be used within a FooterProvider');
  }

  return context;
};
