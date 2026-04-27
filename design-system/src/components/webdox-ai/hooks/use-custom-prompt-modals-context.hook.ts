import { useContext } from 'react';

import { CustomPromptModalsContext } from '../contexts/custom-prompt-modals.context';

import type { CustomPromptModalsContextValue } from '../contexts/custom-prompt-modals.context';

/**
 * Retrieves the CustomPromptModalsContext value.
 */
export const useCustomPromptModalsContext = (): CustomPromptModalsContextValue => {
  const context = useContext(CustomPromptModalsContext);

  if (!context) {
    throw new Error(
      'useCustomPromptModalsContext must be used within a CustomPromptModalsProvider',
    );
  }

  return context;
};
