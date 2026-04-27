import { getUniqueId } from '@components/utils/id.util';

import type {
  ChatBotAnswerTypeV2,
  ChatBotConversationTypeV2,
  ChatBotQuestionTypeV2,
} from '../interfaces';
import type { LegalWhisperAnswerType } from '@components/webdox-ai/interfaces/legal-whisper.interfaces';

/** Utility to manage all conversation, questions and answer tasks */
export class ConversationUtils {
  /** Create a new conversation with default values for the ones not supplied */
  public createConversation(values: Partial<ChatBotConversationTypeV2>): ChatBotConversationTypeV2 {
    return {
      id: getUniqueId(),
      createdAt: new Date().toISOString(),
      title: 'title',
      questions: [],
      ...values,
    };
  }

  /** Utility to create a new conversation question */
  public createQuestion(values: Partial<ChatBotQuestionTypeV2>): ChatBotQuestionTypeV2 {
    return {
      id: getUniqueId(),
      answers: [],
      createdAt: new Date().toISOString(),
      isLoading: false,
      value: '',
      isWaiting: false,
      variant: 'persist',
      ...values,
    };
  }

  /** Utility to create a new conversation answer */
  public createAnswer(
    values: Partial<ChatBotAnswerTypeV2 | LegalWhisperAnswerType>,
  ): ChatBotAnswerTypeV2 | LegalWhisperAnswerType {
    return {
      id: getUniqueId(),
      value: '',
      variant: 'persist',
      createdAt: new Date().toISOString(),
      ...values,
    };
  }

  /** Find the first (unique) waiting for answer question index */
  public findWaitingQuestionIndex(questions: Pick<ChatBotQuestionTypeV2, 'isWaiting'>[]): number {
    return questions.findIndex(({ isWaiting }) => isWaiting);
  }

  /** Update the supplied question index with the provided payload in the questions array. Return a clone */
  public getUpdatedQuestions(
    questions: ChatBotQuestionTypeV2[],
    questionIndex: number,
    payload: Partial<ChatBotQuestionTypeV2>,
  ): ChatBotQuestionTypeV2[] {
    if (questionIndex < 0) {
      return questions;
    }

    const foundQuestion = questions[questionIndex];

    const updatedQuestion: ChatBotQuestionTypeV2 = {
      ...foundQuestion,
      ...payload,
    };

    const updatedQuestions = [...questions];

    updatedQuestions.splice(questionIndex, 1, updatedQuestion);

    return updatedQuestions;
  }

  /** Delete the supplied question index in the questions array. Return a clone */
  public deleteQuestionByIndex(
    questions: ChatBotQuestionTypeV2[],
    questionIndex: number,
  ): ChatBotQuestionTypeV2[] {
    if (questionIndex < 0 || questionIndex > questions.length - 1) {
      return questions;
    }

    const updatedQuestions = [...questions];

    updatedQuestions.splice(questionIndex, 1);

    return updatedQuestions;
  }

  /** Update the supplied answer index with the provided payload in the answers array. Return a clone */
  public getUpdatedAnswers(
    answers: ChatBotAnswerTypeV2[],
    answerIndex: number,
    payload: Partial<ChatBotAnswerTypeV2>,
  ): ChatBotAnswerTypeV2[] {
    if (answerIndex < 0) {
      return answers;
    }

    const foundAnswer = answers[answerIndex];

    const updatedAnswer: ChatBotAnswerTypeV2 = {
      ...foundAnswer,
      ...payload,
    };

    const updatedAnswers = [...answers];

    updatedAnswers.splice(answerIndex, 1, updatedAnswer);

    return updatedAnswers;
  }

  /** Check if the current question has no answers, it will mean that the question is loading */
  public checkIsQuestionLoading({
    answers,
    variant,
  }: Pick<ChatBotQuestionTypeV2, 'answers' | 'variant'>): boolean {
    return variant === 'persist' && answers.length === 0;
  }

  /** Check if the conversation is loading based on the isWaiting for answer state */
  public checkIsConversationLoading(
    questions: Pick<ChatBotQuestionTypeV2, 'isWaiting'>[],
  ): boolean {
    return this.findWaitingQuestionIndex(questions) > -1;
  }

  /** Check the conversations questions and return if there aren't any persisted questions and answers */
  public checkIsConversationEmpty(questions: ChatBotQuestionTypeV2[]): boolean {
    return !questions.some(({ variant }) => variant === 'persist');
  }

  /** Find an answer index in the question's answers array by its id */
  public findAnswerIndexByAnswerId(
    answers: ChatBotAnswerTypeV2[],
    answerId: ChatBotAnswerTypeV2['id'],
  ): number {
    return answers.findIndex((answer) => answer.id === answerId);
  }

  /** Given an answer id, find the question index */
  public findQuestionIndexByAnswerId(
    questions: ChatBotQuestionTypeV2[],
    answerId: ChatBotAnswerTypeV2['id'],
  ): number {
    return questions.findIndex(({ answers }) => answers.some((answer) => answer.id === answerId));
  }

  /** Given an array of questions, find the answer based on its id */
  public findAnswerByAnswerId(
    questions: ChatBotQuestionTypeV2[],
    answerId: ChatBotAnswerTypeV2['id'],
  ): ChatBotAnswerTypeV2 | undefined {
    const foundQuestion = questions.find(({ answers }) =>
      answers.some((answer) => answer.id === answerId),
    );

    return foundQuestion?.answers.find(({ id }) => id === answerId);
  }

  /** Find the first answer in the array of questions with the supplied answer variant */
  public findQuestionByVariant(
    questions: ChatBotQuestionTypeV2[],
    variant: ChatBotAnswerTypeV2['variant'],
  ): ChatBotQuestionTypeV2 | undefined {
    return questions.find(({ answers }) => answers.some((answer) => answer.variant === variant));
  }
}

export const conversationUtils = new ConversationUtils();
