import { conversationConstants } from '@components/webdox-ai/constants';

import type { AssistantReducerFn } from './reducer.interface';
import type { ResetAction } from '@components/webdox-ai/interfaces';

/**
 * Reset state
 */
export const reset: AssistantReducerFn<ResetAction> = () => {
  return conversationConstants.defaultState;
};
