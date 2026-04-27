import { updateDisabled } from '../update-disabled';

import { getConversationBaseState } from './chat-conversation-state-tests.utils';

import type { UpdateDisabledAction } from '@components/webdox-ai/interfaces';

describe('updateDisabled', () => {
  it('should toggle the disabled state when payload.disabled is undefined', () => {
    const state = getConversationBaseState({
      disabled: false,
    });
    const action: UpdateDisabledAction = {
      type: 'UPDATE_DISABLED',
      payload: {},
    };
    const newState = updateDisabled({ state, action });

    expect(newState.disabled).toBeTruthy();
  });

  it('should update the disabled state when payload.disabled is defined', () => {
    const state = getConversationBaseState({
      disabled: true,
    });
    const action: UpdateDisabledAction = {
      type: 'UPDATE_DISABLED',
      payload: {
        disabled: false,
      },
    };
    const newState = updateDisabled({ state, action });

    expect(newState.disabled).toBeFalsy();
  });
});
