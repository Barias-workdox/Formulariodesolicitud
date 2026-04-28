import { conversationConstants } from '../constants';
import { ChatBotAnswerTypeV2, ChatBotConversationTypeV2, ChatBotQuestionTypeV2 } from './chat-bot.interfaces';
export type ChatConversationState = {
    conversation?: ChatBotConversationTypeV2;
    /** If the conversation is blocked */
    disabled: boolean;
    /** If a question is loading in the conversation */
    isLoading: boolean;
};
/** Set the conversation, if no questions supplied, will init with the placeholder answers */
export type SetConversationAction = {
    type: typeof conversationConstants.actions.setConversation;
    payload: {
        conversation: ChatBotConversationTypeV2;
        /**
         * If true will add a first placeholder answer
         *
         * @defaultValue `false`
         */
        initialAnswer?: boolean;
    };
};
export type ResetAction = {
    type: typeof conversationConstants.actions.reset;
};
export type CreateQuestionAction = {
    type: typeof conversationConstants.actions.createQuestion;
    payload: Pick<ChatBotQuestionTypeV2, 'value'>;
};
export type PersistAnswerAction = {
    type: typeof conversationConstants.actions.persistAnswer;
    payload: ChatBotAnswerTypeV2;
};
export type StopAnswerGenerationAction = {
    type: typeof conversationConstants.actions.stopAnswerGeneration;
};
export type DeleteQuestionAction = {
    type: typeof conversationConstants.actions.deleteQuestion;
    payload: {
        questionIndex: number;
    };
};
export type UpdateDisabledAction = {
    type: typeof conversationConstants.actions.updateDisabled;
    payload: Partial<Pick<ChatConversationState, 'disabled'>>;
};
export type GenerativeAnswerAction = {
    type: typeof conversationConstants.actions.generativeAnswer;
    payload: Pick<ChatBotAnswerTypeV2, 'staticContent' | 'value'>;
};
export type UpdateAnswerAction = {
    type: typeof conversationConstants.actions.updateAnswer;
    payload: Pick<ChatBotAnswerTypeV2, 'id'> & Partial<Omit<ChatBotAnswerTypeV2, 'id'>>;
};
export type DeleteConversationAction = {
    type: typeof conversationConstants.actions.deleteConversation;
};
export type ContractKindAnswerAction = {
    type: typeof conversationConstants.actions.contractKindAnswer;
    payload: Pick<ChatBotAnswerTypeV2, 'tempProps'>;
};
export type SuggestionsAnswerAction = {
    type: typeof conversationConstants.actions.suggestionsAnswer;
    payload: {
        question: Pick<ChatBotQuestionTypeV2, 'value' | 'variant'>;
        answer: Pick<ChatBotAnswerTypeV2, 'tempProps'>;
    };
};
export type SystemAnswerAction = {
    type: typeof conversationConstants.actions.systemAnswer;
    payload: Pick<ChatBotAnswerTypeV2, 'value' | 'tempProps'>;
};
export type ChatConversationAction = SetConversationAction | ResetAction | CreateQuestionAction | PersistAnswerAction
/** Will force the update of the disabled state or toggle it if a value is not supplied */
 | UpdateDisabledAction | GenerativeAnswerAction | UpdateAnswerAction | DeleteConversationAction | ContractKindAnswerAction | SuggestionsAnswerAction | SystemAnswerAction | StopAnswerGenerationAction | DeleteQuestionAction;
