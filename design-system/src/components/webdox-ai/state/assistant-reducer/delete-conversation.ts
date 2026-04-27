import type { AssistantReducerFn } from './reducer.interface';
import type { DeleteConversationAction } from '@components/webdox-ai/interfaces';

/**
 * Remove conversation from state
 */
export const deleteConversation: AssistantReducerFn<DeleteConversationAction> = ({ state }) => {
  return {
    ...state,
    conversation: undefined,
  };
};
