import { ChatConversationState } from '../../interfaces';
export type UnwrapArrayType<T> = T extends (infer U)[] ? U : T;
export interface AssistantReducerEntry<TAction> {
    state: ChatConversationState;
    action: TAction;
}
export interface AssistantReducerFn<TAction> {
    (params: AssistantReducerEntry<TAction>): ChatConversationState;
}
