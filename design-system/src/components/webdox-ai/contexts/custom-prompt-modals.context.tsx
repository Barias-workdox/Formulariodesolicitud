import { createContext } from 'react';

import type { CustomPromptAction } from '@components/webdox-ai/constants';
import type { CustomPrompt } from '@components/webdox-ai/interfaces';

/**
 * A context for managing actions related to custom prompt modals.
 */
export type CustomPromptModalsContextValue = {
  isEditingDisabled: boolean;
  openModal(params: { kind: CustomPromptAction; customPrompt?: CustomPrompt }): void;
};

/**
 * A context for managing actions related to documents in the repository.
 */
export const CustomPromptModalsContext = createContext<CustomPromptModalsContextValue>({
  isEditingDisabled: false,
  openModal() {
    console.info('openModal not implemented');
  },
});
