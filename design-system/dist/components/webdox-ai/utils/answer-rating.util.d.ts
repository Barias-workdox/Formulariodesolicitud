import { AnswerRatingForm, QuoteProblem, QuoteType } from '../components';
/**
 * Checks if a specific field has been used in any of the previously submitted forms.
 */
export declare const checkFieldUsed: (fieldName: string, prevSubmittedValues?: AnswerRatingForm[]) => boolean;
/**
 * Checks if a specific field has been used with a specific value in any of the previously submitted forms.
 */
export declare const checkFieldUsedWithValue: (fieldName: string, value: string | number, prevSubmittedValues?: AnswerRatingForm[]) => boolean;
/**
 * Checks if a specific quote problem has been used in any of the previously submitted forms.
 */
export declare const checkQuoteProblemUsed: (quoteProblem: QuoteProblem, quoteType: QuoteType, prevSubmittedValues?: AnswerRatingForm[]) => boolean;
