import { LegalWhisperReducerFn } from './legal-whisper-reducer.interfaces';
import { PersistAnswerAction } from '../../interfaces/legal-whisper-conversation-state.interfaces';
/**
 * Once we have the answer to a question ready, we can persist it.
 * and move away from the waiting state, it going to look the last waiting question to be updated
 */
export declare const persistAnswer: LegalWhisperReducerFn<PersistAnswerAction>;
