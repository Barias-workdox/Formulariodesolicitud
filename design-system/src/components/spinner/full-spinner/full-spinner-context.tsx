import { createContext, useContext, useState } from 'react';
import type { PropsWithChildren, ReactElement } from 'react';

import { FullSpinner } from './full-spinner';

interface FullSpinnerContextType {
  showFullSpinner(): void;
  closeFullSpinner(): void;
}

/**
 * Full spinner context instance
 */
const FullSpinnerContext = createContext<FullSpinnerContextType | null>(null);

/**
 * Full spinner provider to be wrapped in the app.
 * Useful to show/close the full spinner with a hook.
 */
export const FullSpinnerProvider = ({ children }: PropsWithChildren<object>): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Show the full spinner modal.
   */
  function showFullSpinner(): void {
    setIsOpen(true);
  }

  /**
   * Close the full spinner modal.
   */
  function closeFullSpinner(): void {
    setIsOpen(false);
  }

  return (
    <FullSpinnerContext.Provider value={{ showFullSpinner, closeFullSpinner }}>
      <FullSpinner isOpen={isOpen} />
      {children}
    </FullSpinnerContext.Provider>
  );
};

/**
 * Hook to show / close the full spinner.
 * Uses the full spinner context to get its values and returns de the show/close functions.
 */
export const useFullSpinner = (): FullSpinnerContextType => {
  const { showFullSpinner, closeFullSpinner } = useContext(FullSpinnerContext);

  return { showFullSpinner, closeFullSpinner };
};
