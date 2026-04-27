import { createContext, useContext } from 'react';
import type { PropsWithChildren, ReactElement } from 'react';

interface CardContextType {
  disabled?: boolean;
}

interface CardProviderProps {
  disabled?: boolean;
}

/**
 * Card context instance
 */
const CardContext = createContext<CardContextType | null>(null);

/**
 * Card provider to be wrapped in the component.
 */
export const CardProvider = ({
  children,
  disabled,
}: PropsWithChildren<CardProviderProps>): ReactElement => {
  return <CardContext.Provider value={{ disabled }}>{children}</CardContext.Provider>;
};

/**
 * Gets card context values
 */
export const useCard = (): CardContextType => {
  const context = useContext(CardContext);
  if (!context) {
    console.warn('useCard must be used within a CardProvider');

    return {};
  }

  return context;
};
