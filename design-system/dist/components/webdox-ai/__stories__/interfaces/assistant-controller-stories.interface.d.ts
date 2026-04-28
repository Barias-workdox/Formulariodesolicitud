import { chatConversationExamples } from '../constants/chat-conversation-examples/chat-conversation-examples';
export type FakeConversationParamsType = {
    isPageRefEnabled: boolean;
};
export type ChatConversationExamples = keyof typeof chatConversationExamples;
