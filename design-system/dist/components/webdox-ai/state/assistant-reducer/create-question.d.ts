import { AssistantReducerFn } from './reducer.interface';
import { CreateQuestionAction } from '../../interfaces';
/**
 * Add a new question in the state
 *
 * @example
 * ```
 * {
 *   conversation: {
 *     questions: [
 *       ...
 *       newQuestion
 *     ]
 *   }
 * }
 * ```
 */
export declare const createQuestion: AssistantReducerFn<CreateQuestionAction>;
