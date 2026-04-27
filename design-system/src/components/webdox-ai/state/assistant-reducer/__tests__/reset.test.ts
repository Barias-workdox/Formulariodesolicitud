import { conversationConstants } from '@components/webdox-ai';

import { reset } from '../reset';

import { getConversationBaseState } from './chat-conversation-state-tests.utils';

describe('reset', () => {
  it('should reset to the default state', () => {
    const state = reset({ state: getConversationBaseState(), action: { type: 'RESET' } });

    expect(state).toEqual(conversationConstants.defaultState);
  });
});
