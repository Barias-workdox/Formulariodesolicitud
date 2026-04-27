import type { AssistantReducerFn } from './reducer.interface';
import type { UpdateDisabledAction } from '@components/webdox-ai/interfaces';

/**
 * Update disabled state
 */
export const updateDisabled: AssistantReducerFn<UpdateDisabledAction> = ({
  state,
  action: { payload },
}) => {
  const { disabled } = state;

  return {
    ...state,
    disabled: payload.disabled ?? !disabled,
  };
};
