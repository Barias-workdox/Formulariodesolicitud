import { isNil } from 'lodash';

import type { AnswerRatingForm, QuoteProblem, QuoteType } from '../components';

/**
 * Checks if a specific field has been used in any of the previously submitted forms.
 */
export const checkFieldUsed = (
  fieldName: string,
  prevSubmittedValues: AnswerRatingForm[] = [],
): boolean => {
  return prevSubmittedValues.some((form) => {
    const value = form[fieldName];

    return !isNil(value);
  });
};

/**
 * Checks if a specific field has been used with a specific value in any of the previously submitted forms.
 */
export const checkFieldUsedWithValue = (
  fieldName: string,
  value: string | number,
  prevSubmittedValues: AnswerRatingForm[] = [],
): boolean => {
  return prevSubmittedValues.some((form) => {
    const formValue = form[fieldName];

    return !isNil(formValue) && formValue === value;
  });
};

/**
 * Checks if a specific quote problem has been used in any of the previously submitted forms.
 */
export const checkQuoteProblemUsed = (
  quoteProblem: QuoteProblem,
  quoteType: QuoteType,
  prevSubmittedValues: AnswerRatingForm[] = [],
): boolean => {
  return prevSubmittedValues.some((form) => {
    const value = form.quoteProblem;
    const type = form.quoteTypeToImprove;

    return !isNil(value) && !isNil(type) && value === quoteProblem && type === quoteType;
  });
};
