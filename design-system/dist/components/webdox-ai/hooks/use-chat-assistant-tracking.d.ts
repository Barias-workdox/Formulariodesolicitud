import { AssistantTrackingEventReturnType, UseChatAssistantTrackingReturnType } from '../interfaces/chat-assistant-tracking.interface';
type UseChatAssistantTrackingParamsType = {
    /** Callback to run with the tracking dynamic values as payload */
    callback(values: AssistantTrackingEventReturnType): void;
};
/**
 * All events to track the chat bot actions between the user and Webdox AI
 */
export declare const useChatAssistantTracking: ({ callback, }: UseChatAssistantTrackingParamsType) => UseChatAssistantTrackingReturnType;
export {};
