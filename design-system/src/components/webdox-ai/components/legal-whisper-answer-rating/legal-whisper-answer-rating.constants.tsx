import type { AnswerRatingForm, StepConfig } from './legal-whisper-answer-rating.interfaces';

export const ANSWER_RATING_BASE_TEST_ID = 'legal-whisper-answer-rating';

export const RATING_DESCRIPTION_WIDTH = '260px';

export const RATING_VALUES_ARRAY = [1, 2, 3, 4, 5] as const;

export const MAX_RATING_VALUE = RATING_VALUES_ARRAY[RATING_VALUES_ARRAY.length - 1];

export const ANSWER_RATING_FORM_DEFAULT_VALUES: AnswerRatingForm = {
  score: 0,
  answerProblem: undefined,
} as const;

export const MAX_OBSERVATIONS_MESSAGE_LENGHT = 1000;

/**
 * Enum representing the different steps in the answer rating process.
 */
export enum AnswerRatingStep {
  RatingAnswer = 'ratingAnswer',
  MainAnswerProblems = 'mainAnswerProblems',
  QuoteTypeToImprove = 'quoteTypeToImprove',
  LegalWhisperUsage = 'legalWhisperUsage',
  SystemError = 'systemError',
  QuoteProblem = 'quoteProblem',
  QuotesToImprove = 'quotesToImprove',
  SuccessMessage = 'successMessage',
}

/**
 * Enum representing the different problems that can occur with an answer.
 * This is used to categorize the issues that users may encounter.
 * Each problem corresponds to a specific step in the answer rating process.
 */
export enum AnswerProblem {
  MainAnswer = 'mainAnswer',
  Quotes = 'quotes',
  LegalWhisperUsage = 'legalWhisperUsage',
  SystemError = 'systemError',
}

/**
 * Enum representing the different problems that can occur with the main answer.
 */
export enum MainAnswerProblem {
  NotAlignedWithInvestigation = 'notAlignedWithInvestigation',
  TooLong = 'tooLong',
  Other = 'other',
}

/**
 * Enum representing the different problems that can occur with the Legal Whisper usage.
 */
export enum LegalWhisperUsageProblem {
  NotIntuitive = 'notIntuitive',
  UnclearOrganization = 'unclearOrganization',
  Other = 'other',
}

/**
 * Enum representing the different system errors that can occur with Legal Whisper.
 */
export enum SystemError {
  AnswerLoadingError = 'answerLoadingError',
  Other = 'other',
}

/**
 * Enum representing the different problems that can occur with a quote.
 */
export enum QuoteProblem {
  QuoteNotInForce = 'quoteNotInForce',
  IrrelevantQuote = 'irrelevantQuote',
  IncorrectQuoteInformation = 'incorrectQuoteInformation',
  Other = 'other',
}

/**
 * Enum representing the different types of quotes.
 */
export enum QuoteType {
  Legal = 'legal',
  Administrative = 'administrative',
  Jurisprudential = 'jurisprudential',
}

/**
 * Enum representing the next steps for each answer problem.
 * This mapping is used to determine the next step in the answer rating process
 * based on the selected answer problem.
 */
const AnswerProblemNextStepMap: Record<AnswerProblem, AnswerRatingStep> = {
  [AnswerProblem.MainAnswer]: AnswerRatingStep.MainAnswerProblems,
  [AnswerProblem.Quotes]: AnswerRatingStep.QuoteTypeToImprove,
  [AnswerProblem.LegalWhisperUsage]: AnswerRatingStep.LegalWhisperUsage,
  [AnswerProblem.SystemError]: AnswerRatingStep.SystemError,
};

/**
 * Map of step configurations for the answer rating process.
 * Each step configuration includes information about the step's properties.
 * This is used to manage the flow of the answer rating process.
 */
export const answerRatingStepsMap: Record<AnswerRatingStep, StepConfig> = {
  [AnswerRatingStep.RatingAnswer]: {
    nextStep: ({ answerProblem }) => AnswerProblemNextStepMap[answerProblem],
    prevStep: AnswerRatingStep.RatingAnswer,
  },
  [AnswerRatingStep.MainAnswerProblems]: {
    nextStep: AnswerRatingStep.MainAnswerProblems,
    prevStep: ({ alreadyRated }) =>
      alreadyRated ? AnswerRatingStep.SuccessMessage : AnswerRatingStep.RatingAnswer,
  },
  [AnswerRatingStep.QuoteTypeToImprove]: {
    nextStep: AnswerRatingStep.QuoteProblem,
    prevStep: ({ alreadyRated }) =>
      alreadyRated ? AnswerRatingStep.SuccessMessage : AnswerRatingStep.RatingAnswer,
  },
  [AnswerRatingStep.QuoteProblem]: {
    nextStep: AnswerRatingStep.QuotesToImprove,
    prevStep: AnswerRatingStep.QuoteTypeToImprove,
  },
  [AnswerRatingStep.QuotesToImprove]: {
    nextStep: AnswerRatingStep.QuotesToImprove,
    prevStep: AnswerRatingStep.QuoteProblem,
  },
  [AnswerRatingStep.LegalWhisperUsage]: {
    nextStep: AnswerRatingStep.LegalWhisperUsage,
    prevStep: ({ alreadyRated }) =>
      alreadyRated ? AnswerRatingStep.SuccessMessage : AnswerRatingStep.RatingAnswer,
  },
  [AnswerRatingStep.SystemError]: {
    nextStep: AnswerRatingStep.SystemError,
    prevStep: ({ alreadyRated }) =>
      alreadyRated ? AnswerRatingStep.SuccessMessage : AnswerRatingStep.RatingAnswer,
  },
  [AnswerRatingStep.SuccessMessage]: {
    nextStep: ({ answerProblem }) => AnswerProblemNextStepMap[answerProblem],
    prevStep: AnswerRatingStep.SuccessMessage,
  },
};
