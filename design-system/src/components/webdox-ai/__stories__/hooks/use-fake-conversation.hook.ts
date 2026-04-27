import { useCallback, useEffect, useRef, useState } from 'react';
import type { Dispatch } from 'react';

import { faker } from '@faker-js/faker';

import { conversationConstants } from '@components/webdox-ai/constants';
import { useChatBotChunkGenerativeText, useConversationState } from '@components/webdox-ai/hooks';
import { conversationUtils } from '@components/webdox-ai/utils/conversation.util';

import { chatConversationExamples } from '../constants/chat-conversation-examples';
import { chatStoriesUtils } from '../utils';

import { useGenerativeAnswerChunk } from './use-generative-answer-chunk.hook';

import type {
  ChatConversationAction,
  ChatConversationState,
  GenerativeAnswerChunkType,
} from '../../interfaces';
import type { ChatConversationExamples } from '../interfaces';

export type UseFakeConversationReturnType = {
  conversationState: ChatConversationState;
  conversationDispatch: Dispatch<ChatConversationAction>;
  onCreateMessage(value: string): Promise<void>;
  setCustomConversation(conversationExampleType?: ChatConversationExamples | 'reset'): void;
};

/**
 * Hook used to handle a fake conversation in the storybook by a chat bot conversation
 * controller
 */
export const useFakeConversation = (): UseFakeConversationReturnType => {
  const chunksRef = useRef<GenerativeAnswerChunkType[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const { state, dispatch } = useConversationState();
  const { accumulatedText, generativeText } = useChatBotChunkGenerativeText({
    chunks: chunksRef,
    isGenerating,
  });

  const handleGenerativeAnswerFinish = useCallback(() => {
    chunksRef.current = [];
    setIsGenerating(false);

    dispatch({
      type: conversationConstants.actions.persistAnswer,
      payload: {
        ...conversationUtils.createAnswer({
          value: chatStoriesUtils.getFakeAnswerMarkdown(true),
          references: [
            {
              id: 1,
              sentence: faker.lorem.sentence(),
            },
            {
              id: 2,
              sentence: faker.lorem.sentence(),
            },
            {
              id: 3,
              sentence: faker.lorem.sentence(),
            },
            {
              id: 4,
              sentence: faker.lorem.sentence(),
            },
            {
              id: 5,
              sentence: faker.lorem.sentence(),
            },
            {
              id: 6,
              sentence: faker.lorem.sentence(),
            },
          ],
        }),
      },
    });
  }, [dispatch]);

  /** Use the generative answer with fake data */
  useGenerativeAnswerChunk({
    chunksRef,
    isGenerating,
    isPageRefEnabled: true,
    // cleanup the generative answer and start the persistent answer
    onFinish: handleGenerativeAnswerFinish,
  });

  const initConversation = useCallback(() => {
    dispatch({
      type: conversationConstants.actions.updateDisabled,
      payload: { disabled: false },
    });
  }, [dispatch]);

  /** Init the conversation */
  useEffect(() => {
    initConversation();
  }, [initConversation]);

  /** Start the generative answer flow */
  useEffect(() => {
    if (isGenerating) {
      dispatch({
        type: conversationConstants.actions.generativeAnswer,
        payload: {
          staticContent: accumulatedText,
          value: generativeText,
        },
      });
    }
  }, [isGenerating, accumulatedText, generativeText, dispatch]);

  /** Handle create message flow, with loading from server, generative and persist answers */
  const handleCreateMessage = async (value: string): Promise<void> => {
    dispatch({
      type: conversationConstants.actions.createQuestion,
      payload: {
        value,
      },
    });

    // Dispatch generative
    setTimeout(() => {
      setIsGenerating(true);
    }, chatStoriesUtils.timeout);
  };

  /**
   * Set a custom conversation with
   * predefined questions and answers
   */
  const setCustomConversation: UseFakeConversationReturnType['setCustomConversation'] = (
    conversationExampleType = 'feedbackExample',
  ): void => {
    if (conversationExampleType === 'reset') {
      initConversation();

      return;
    }

    dispatch({
      type: 'SET_CONVERSATION',
      payload: chatConversationExamples[conversationExampleType],
    });
    dispatch({
      type: conversationConstants.actions.updateDisabled,
      payload: { disabled: false },
    });
  };

  return {
    onCreateMessage: handleCreateMessage,
    conversationState: state,
    conversationDispatch: dispatch,
    setCustomConversation,
  };
};
