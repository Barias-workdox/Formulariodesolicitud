import type { ChatConversationState } from '@components/webdox-ai';

export const baseConversationStateId = {
  id: '1',
  createdAt: '2022-01-01T00:00:00.000Z',
};

const initialState: ChatConversationState = {
  isLoading: false,
  disabled: false,
};

const baseConversationState: ChatConversationState['conversation'] = {
  questions: [],
  ...baseConversationStateId,
  title: 'title',
};

type GetBaseStateParams = Partial<Omit<ChatConversationState, 'conversation'>> & {
  conversation?: Partial<Omit<ChatConversationState['conversation'], 'questions'>> & {
    questions?: Partial<ChatConversationState['conversation']['questions']>;
  };
};

/**
 * Get base state
 */
export const getConversationBaseState = (
  params: GetBaseStateParams = initialState,
): ChatConversationState => ({
  ...initialState,
  ...params,
  conversation: {
    ...baseConversationState,
    ...params.conversation,
    questions: [...baseConversationState.questions, ...(params?.conversation?.questions || [])],
  },
});
