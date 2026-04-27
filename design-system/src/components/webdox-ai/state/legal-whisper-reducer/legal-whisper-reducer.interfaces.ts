import type { LegalWhisperConversationState } from '@components/webdox-ai/interfaces/legal-whisper-conversation-state.interfaces';

export interface LegalWhisperReducerEntry<TAction> {
  state: LegalWhisperConversationState;
  action: TAction;
}

export interface LegalWhisperReducerFn<TAction> {
  (params: LegalWhisperReducerEntry<TAction>): LegalWhisperConversationState;
}
