import type { LegalWhisperReducerFn } from './legal-whisper-reducer.interfaces';
import type { UpdateDisabledAction } from '@components/webdox-ai/interfaces/legal-whisper-conversation-state.interfaces';

/**
 * Update disabled state
 */
export const updateDisabled: LegalWhisperReducerFn<UpdateDisabledAction> = ({
  state,
  action: { payload },
}) => {
  const { disabled } = state;

  return {
    ...state,
    disabled: payload.disabled ?? !disabled,
  };
};
