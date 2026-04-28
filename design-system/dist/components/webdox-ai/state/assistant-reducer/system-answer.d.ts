import { AssistantReducerFn } from './reducer.interface';
import { SystemAnswerAction } from '../../interfaces';
/**
 * Add a special system answer in the conversation state
 */
export declare const systemAnswer: AssistantReducerFn<SystemAnswerAction>;
