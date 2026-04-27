import { useContext } from 'react';

import { LegalWhisperConversationsContext } from '../contexts';

import type { LegalWhisperConversationsContextValue } from '../contexts';

/**
 * Retrieves the LegalWhisperConversationsContext value.
 */
export const useLegalWhisperConversationsContext = (): LegalWhisperConversationsContextValue => {
  const context = useContext(LegalWhisperConversationsContext);

  if (!context) {
    throw new Error(
      'useLegalWhisperConversationsContext must be used within a LegalWhisperConversationsProvider',
    );
  }

  return context;
};
