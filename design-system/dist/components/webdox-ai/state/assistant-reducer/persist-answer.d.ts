import { AssistantReducerFn } from './reducer.interface';
import { PersistAnswerAction } from '../../interfaces';
/**
 * Once we have the answer to a question ready, we can persist it.
 * and move away from the waiting state, it going to look the last waiting question to be updated
 */
export declare const persistAnswer: AssistantReducerFn<PersistAnswerAction>;
