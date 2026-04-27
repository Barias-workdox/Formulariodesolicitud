import type { ChatConversationState } from '../interfaces/chat-bot-conversation-state.interface';

/** All constants related to the chat bot conversation */
export class ConversationConstants {
  public actions = {
    setConversation: 'SET_CONVERSATION',
    reset: 'RESET',
    createQuestion: 'CREATE_QUESTION',
    persistAnswer: 'PERSIST_ANSWER',
    updateDisabled: 'UPDATE_DISABLED',
    generativeAnswer: 'GENERATIVE_ANSWER',
    updateAnswer: 'UPDATE_ANSWER',
    deleteConversation: 'DELETE_CONVERSATION',
    contractKindAnswer: 'CONTRACT_KIND_ANSWER',
    suggestionsAnswer: 'SUGGESTIONS_ANSWER',
    systemAnswer: 'SYSTEM_ANSWER',
    stopAnswerGeneration: 'STOP_ANSWER_GENERATION',
    deleteQuestion: 'DELETE_QUESTION',
    clickCustomPrompt: 'CLICK_CUSTOM_PROMPT',
  } as const;

  public readonly defaultState = {
    conversation: undefined,
    disabled: true,
    isLoading: false,
  } satisfies ChatConversationState;
}

export const conversationConstants = new ConversationConstants();
