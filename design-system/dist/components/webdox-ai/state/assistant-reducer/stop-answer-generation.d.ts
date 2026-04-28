import { AssistantReducerFn } from './reducer.interface';
import { StopAnswerGenerationAction } from '../../interfaces';
/**
 * Reducer function to stop the answer generation process.
 *
 * This function modifies the state by locating the index of the question that
 * is waiting for an answer and removes it from the conversation. If no waiting
 * question is found, it returns the current state without modifications.
 */
export declare const stopAnswerGeneration: AssistantReducerFn<StopAnswerGenerationAction>;
