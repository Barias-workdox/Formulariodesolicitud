import { LegalWhisperReducerFn } from './legal-whisper-reducer.interfaces';
import { CreateQuestionAction } from '../../interfaces/legal-whisper-conversation-state.interfaces';
/**
 * Add a new question in the state
 */
export declare const createQuestion: LegalWhisperReducerFn<CreateQuestionAction>;
