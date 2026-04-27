import { createContext, useContext } from 'react';

import type { DynamicDialogContextValue } from '../dynamic-dialog.interfaces';

const DynamicDialogContext = createContext<DynamicDialogContextValue | undefined>(undefined);

/**
 * Hook to access the DynamicDialog context
 */
export const useDynamicDialog = (): DynamicDialogContextValue => {
  const context = useContext(DynamicDialogContext);

  if (!context) {
    throw new Error('useDynamicDialog must be used within a DynamicDialog component');
  }

  return context;
};

export const DynamicDialogProvider = DynamicDialogContext.Provider;
