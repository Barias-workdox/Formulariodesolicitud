import { deleteConversation } from '../delete-conversation';

import { getConversationBaseState } from './chat-conversation-state-tests.utils';

import type { DeleteConversationAction } from '@components/webdox-ai/interfaces';

describe('deleteConversation', () => {
  const initialState = getConversationBaseState();

  const action: DeleteConversationAction = {
    type: 'DELETE_CONVERSATION',
  };

  it('should return a new state object with the conversation property set to undefined', () => {
    const result = deleteConversation({ state: initialState, action });

    expect(result).not.toBe(initialState);
    expect(result.conversation).toBeUndefined();
  });

  it('should not modify the original state object', () => {
    const result = deleteConversation({ state: initialState, action });

    expect(result).not.toBe(initialState);
    expect(result.conversation).toBeUndefined();
    expect(initialState.conversation).toBeDefined();
  });
});
