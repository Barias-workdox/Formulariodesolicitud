import { AssistantReducerFn } from './reducer.interface';
import { SetConversationAction } from '../../interfaces';
/**
 * When the conversation is empty we can add a custom first answer to the user
 * with brain information
 */
export declare const setConversation: AssistantReducerFn<SetConversationAction>;
