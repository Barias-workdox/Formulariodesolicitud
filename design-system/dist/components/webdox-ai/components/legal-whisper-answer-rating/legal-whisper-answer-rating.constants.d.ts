import { AnswerRatingForm, StepConfig } from './legal-whisper-answer-rating.interfaces';
export declare const ANSWER_RATING_BASE_TEST_ID = "legal-whisper-answer-rating";
export declare const RATING_DESCRIPTION_WIDTH = "260px";
export declare const RATING_VALUES_ARRAY: readonly [1, 2, 3, 4, 5];
export declare const MAX_RATING_VALUE: 1 | 2 | 4 | 3 | 5;
export declare const ANSWER_RATING_FORM_DEFAULT_VALUES: AnswerRatingForm;
export declare const MAX_OBSERVATIONS_MESSAGE_LENGHT = 1000;
/**
 * Enum representing the different steps in the answer rating process.
 */
export declare enum AnswerRatingStep {
    RatingAnswer = "ratingAnswer",
    MainAnswerProblems = "mainAnswerProblems",
    QuoteTypeToImprove = "quoteTypeToImprove",
    LegalWhisperUsage = "legalWhisperUsage",
    SystemError = "systemError",
    QuoteProblem = "quoteProblem",
    QuotesToImprove = "quotesToImprove",
    SuccessMessage = "successMessage"
}
/**
 * Enum representing the different problems that can occur with an answer.
 * This is used to categorize the issues that users may encounter.
 * Each problem corresponds to a specific step in the answer rating process.
 */
export declare enum AnswerProblem {
    MainAnswer = "mainAnswer",
    Quotes = "quotes",
    LegalWhisperUsage = "legalWhisperUsage",
    SystemError = "systemError"
}
/**
 * Enum representing the different problems that can occur with the main answer.
 */
export declare enum MainAnswerProblem {
    NotAlignedWithInvestigation = "notAlignedWithInvestigation",
    TooLong = "tooLong",
    Other = "other"
}
/**
 * Enum representing the different problems that can occur with the Legal Whisper usage.
 */
export declare enum LegalWhisperUsageProblem {
    NotIntuitive = "notIntuitive",
    UnclearOrganization = "unclearOrganization",
    Other = "other"
}
/**
 * Enum representing the different system errors that can occur with Legal Whisper.
 */
export declare enum SystemError {
    AnswerLoadingError = "answerLoadingError",
    Other = "other"
}
/**
 * Enum representing the different problems that can occur with a quote.
 */
export declare enum QuoteProblem {
    QuoteNotInForce = "quoteNotInForce",
    IrrelevantQuote = "irrelevantQuote",
    IncorrectQuoteInformation = "incorrectQuoteInformation",
    Other = "other"
}
/**
 * Enum representing the different types of quotes.
 */
export declare enum QuoteType {
    Legal = "legal",
    Administrative = "administrative",
    Jurisprudential = "jurisprudential"
}
/**
 * Map of step configurations for the answer rating process.
 * Each step configuration includes information about the step's properties.
 * This is used to manage the flow of the answer rating process.
 */
export declare const answerRatingStepsMap: Record<AnswerRatingStep, StepConfig>;
