import { LegalWhisperReducerFn } from './legal-whisper-reducer.interfaces';
import { SetConversationAction } from '../../interfaces/legal-whisper-conversation-state.interfaces';
/**
 * When the conversation is empty we can add a custom first answer to the user
 * with brain information
 */
export declare const setConversation: LegalWhisperReducerFn<SetConversationAction>;
