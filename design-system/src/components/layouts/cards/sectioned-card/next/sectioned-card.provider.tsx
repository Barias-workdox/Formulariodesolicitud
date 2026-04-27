import type { ReactNode } from 'react';
import React, { createContext, useContext, useState } from 'react';

import type { SectionedCardProps } from './sectioned-card.interfaces';

type SectionedCardContextType = SectionedCardProps & {
  activeKey?: React.Key | null;
  setActiveKey?(key?: React.Key | null): void;
};

const SectionedCardContext = createContext<SectionedCardContextType | undefined>(undefined);

export interface SectionedCardProviderProps {
  children: ReactNode;
  defaultProps?: SectionedCardProps;
}

/**
 * Sectioned Card Provider component to supply sectioned card context to its children.
 */
export const SectionedCardProvider: React.FC<SectionedCardProviderProps> = ({
  children,
  defaultProps,
}) => {
  /**
   * state used to manage activeKey for Header Tabs functionality
   */
  const [activeKey, setActiveKey] = useState<React.Key | null>();

  return (
    <SectionedCardContext.Provider value={{ ...defaultProps, activeKey, setActiveKey }}>
      {children}
    </SectionedCardContext.Provider>
  );
};

/**
 * Custom hook to access Sectioned Card context.
 */
export const useSectionedCard = (): SectionedCardContextType => {
  const context = useContext(SectionedCardContext);
  if (!context) {
    throw new Error('useSectionedCard must be used within a SectionedCardProvider');
  }

  return context;
};
