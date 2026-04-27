import { useCallback, useEffect } from 'react';
import type { Dispatch } from 'react';

import { conversationConstants } from '@components/webdox-ai/constants';
import { useLegalWhisperConversationState } from '@components/webdox-ai/hooks/use-legal-whisper-conversation-state.hook';
import { conversationUtils } from '@components/webdox-ai/utils/conversation.util';

import { chatStoriesUtils } from '../utils';

import type {
  ConversationAction as LegalWhisperConversationAction,
  LegalWhisperConversationState,
} from '@components/webdox-ai/interfaces/legal-whisper-conversation-state.interfaces';

export type useLegalWhisperFakeConversationParamsType = {
  isPageRefEnabled: boolean;
};

export type useLegalWhisperFakeConversationReturnType = {
  conversationState: LegalWhisperConversationState;
  conversationDispatch: Dispatch<LegalWhisperConversationAction>;
  onCreateMessage(value: string): Promise<void>;
};

/**
 * Hook used to handle a fake conversation in the storybook by a chat bot conversation
 * controller
 */
export const useLegalWhisperFakeConversation = (): useLegalWhisperFakeConversationReturnType => {
  const { state, dispatch } = useLegalWhisperConversationState();

  const initConversation = useCallback(() => {
    dispatch({
      type: conversationConstants.actions.setConversation,
      payload: {
        conversation: {
          createdAt: '2023-01-01',
          id: 'conversation-1',
          title: 'title',
          questions: [],
          userId: 'user-1',
          customerId: 'customer-1',
        },
      },
    });

    dispatch({
      type: conversationConstants.actions.updateDisabled,
      payload: { disabled: false },
    });
  }, [dispatch]);

  /** Init the conversation */
  useEffect(() => {
    initConversation();
  }, [initConversation]);

  /** Handle create message flow, with loading from server, generative and persist answers */
  const handleCreateMessage = async (value: string): Promise<void> => {
    dispatch({
      type: conversationConstants.actions.createQuestion,
      payload: {
        value,
      },
    });

    // Dispatch persistent answer
    setTimeout(() => {
      dispatch({
        type: conversationConstants.actions.persistAnswer,
        payload: {
          ...conversationUtils.createAnswer({
            value: chatStoriesUtils.getFakeAnswerMarkdown(true),
            quotes: {
              legalQuotes: chatStoriesUtils.getFakeLegalQuotes(),
              jurisprudentialQuotes: chatStoriesUtils.getFakeJurisprudentialQuotes(),
              administrativeQuotes: chatStoriesUtils.getFakeAdministrativeQuotes(),
            },
          }),
        },
      });
    }, chatStoriesUtils.timeout);
  };

  return {
    onCreateMessage: handleCreateMessage,
    conversationState: state,
    conversationDispatch: dispatch,
  };
};
