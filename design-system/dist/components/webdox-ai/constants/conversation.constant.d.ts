/** All constants related to the chat bot conversation */
export declare class ConversationConstants {
    actions: {
        readonly setConversation: "SET_CONVERSATION";
        readonly reset: "RESET";
        readonly createQuestion: "CREATE_QUESTION";
        readonly persistAnswer: "PERSIST_ANSWER";
        readonly updateDisabled: "UPDATE_DISABLED";
        readonly generativeAnswer: "GENERATIVE_ANSWER";
        readonly updateAnswer: "UPDATE_ANSWER";
        readonly deleteConversation: "DELETE_CONVERSATION";
        readonly contractKindAnswer: "CONTRACT_KIND_ANSWER";
        readonly suggestionsAnswer: "SUGGESTIONS_ANSWER";
        readonly systemAnswer: "SYSTEM_ANSWER";
        readonly stopAnswerGeneration: "STOP_ANSWER_GENERATION";
        readonly deleteQuestion: "DELETE_QUESTION";
        readonly clickCustomPrompt: "CLICK_CUSTOM_PROMPT";
    };
    readonly defaultState: {
        conversation: undefined;
        disabled: true;
        isLoading: false;
    };
}
export declare const conversationConstants: ConversationConstants;
