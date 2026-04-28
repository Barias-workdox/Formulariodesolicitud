import { ChatConversationState } from '../../..';
export declare const baseConversationStateId: {
    id: string;
    createdAt: string;
};
type GetBaseStateParams = Partial<Omit<ChatConversationState, 'conversation'>> & {
    conversation?: Partial<Omit<ChatConversationState['conversation'], 'questions'>> & {
        questions?: Partial<ChatConversationState['conversation']['questions']>;
    };
};
/**
 * Get base state
 */
export declare const getConversationBaseState: (params?: GetBaseStateParams) => ChatConversationState;
export {};
