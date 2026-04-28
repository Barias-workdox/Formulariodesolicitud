import { ChatBotAnswerTypeV2, ChatBotConversationTypeV2, ChatBotQuestionTypeV2 } from '../interfaces';
import { LegalWhisperAnswerType } from '../interfaces/legal-whisper.interfaces';
/** Utility to manage all conversation, questions and answer tasks */
export declare class ConversationUtils {
    /** Create a new conversation with default values for the ones not supplied */
    createConversation(values: Partial<ChatBotConversationTypeV2>): ChatBotConversationTypeV2;
    /** Utility to create a new conversation question */
    createQuestion(values: Partial<ChatBotQuestionTypeV2>): ChatBotQuestionTypeV2;
    /** Utility to create a new conversation answer */
    createAnswer(values: Partial<ChatBotAnswerTypeV2 | LegalWhisperAnswerType>): ChatBotAnswerTypeV2 | LegalWhisperAnswerType;
    /** Find the first (unique) waiting for answer question index */
    findWaitingQuestionIndex(questions: Pick<ChatBotQuestionTypeV2, 'isWaiting'>[]): number;
    /** Update the supplied question index with the provided payload in the questions array. Return a clone */
    getUpdatedQuestions(questions: ChatBotQuestionTypeV2[], questionIndex: number, payload: Partial<ChatBotQuestionTypeV2>): ChatBotQuestionTypeV2[];
    /** Delete the supplied question index in the questions array. Return a clone */
    deleteQuestionByIndex(questions: ChatBotQuestionTypeV2[], questionIndex: number): ChatBotQuestionTypeV2[];
    /** Update the supplied answer index with the provided payload in the answers array. Return a clone */
    getUpdatedAnswers(answers: ChatBotAnswerTypeV2[], answerIndex: number, payload: Partial<ChatBotAnswerTypeV2>): ChatBotAnswerTypeV2[];
    /** Check if the current question has no answers, it will mean that the question is loading */
    checkIsQuestionLoading({ answers, variant, }: Pick<ChatBotQuestionTypeV2, 'answers' | 'variant'>): boolean;
    /** Check if the conversation is loading based on the isWaiting for answer state */
    checkIsConversationLoading(questions: Pick<ChatBotQuestionTypeV2, 'isWaiting'>[]): boolean;
    /** Check the conversations questions and return if there aren't any persisted questions and answers */
    checkIsConversationEmpty(questions: ChatBotQuestionTypeV2[]): boolean;
    /** Find an answer index in the question's answers array by its id */
    findAnswerIndexByAnswerId(answers: ChatBotAnswerTypeV2[], answerId: ChatBotAnswerTypeV2['id']): number;
    /** Given an answer id, find the question index */
    findQuestionIndexByAnswerId(questions: ChatBotQuestionTypeV2[], answerId: ChatBotAnswerTypeV2['id']): number;
    /** Given an array of questions, find the answer based on its id */
    findAnswerByAnswerId(questions: ChatBotQuestionTypeV2[], answerId: ChatBotAnswerTypeV2['id']): ChatBotAnswerTypeV2 | undefined;
    /** Find the first answer in the array of questions with the supplied answer variant */
    findQuestionByVariant(questions: ChatBotQuestionTypeV2[], variant: ChatBotAnswerTypeV2['variant']): ChatBotQuestionTypeV2 | undefined;
}
export declare const conversationUtils: ConversationUtils;
