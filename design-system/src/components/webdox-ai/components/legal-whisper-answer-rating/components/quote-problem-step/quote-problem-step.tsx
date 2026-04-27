import { useCallback, useEffect } from 'react';

import { RadioGroupControl, useFormContext } from '@components/forms';
import { DetailedRadio } from '@components/radio';
import { Text } from '@components/text';
import { useTranslation } from '@components/utils';
import { checkQuoteProblemUsed } from '@components/webdox-ai/utils/answer-rating.util';
import { noop } from '@utils/noop';

import { QuoteProblem } from '../../legal-whisper-answer-rating.constants';
import {
  detailedRadioOverrides,
  radioGroupControlOverrides,
} from '../../legal-whisper-answer-rating.styles';
import { StyledBody } from '../../styled-components';
import { composeDataTestId } from '../../utils/compose-data-test-id.util';
import { DetailedRadioWithTextarea } from '../detailed-radio-with-textarea';
import { StepFooter } from '../step-footer';
import { StepHeader } from '../step-header';

import type {
  AnswerRatingForm,
  AnswerRatingStepProps,
} from '../../legal-whisper-answer-rating.interfaces';

/**
 * QuoteProblemStep component allows users to indicate the quote problem.
 */
export const QuoteProblemStep = ({
  prevSubmittedValues,
  prevStep = noop,
  nextStep = noop,
  onSubmit = noop,
}: AnswerRatingStepProps): JSX.Element => {
  const { t } = useTranslation();
  const {
    watch,
    resetField,
    formState: { errors, dirtyFields, isSubmitting },
  } = useFormContext<AnswerRatingForm>();

  const quoteProblemValue = watch('quoteProblem');
  const quoteTypeToImproveValue = watch('quoteTypeToImprove');

  const showObservationTextarea = quoteProblemValue === QuoteProblem.Other;

  const invalid = !!errors.quoteProblem || !!errors.observations;
  const isDirty =
    dirtyFields.quoteProblem && (showObservationTextarea ? dirtyFields.observations : true);

  const shouldShowQuoteNotInForce = !checkQuoteProblemUsed(
    QuoteProblem.QuoteNotInForce,
    quoteTypeToImproveValue,
    prevSubmittedValues,
  );
  const shouldShowIrrelevantQuote = !checkQuoteProblemUsed(
    QuoteProblem.IrrelevantQuote,
    quoteTypeToImproveValue,
    prevSubmittedValues,
  );
  const shouldShowIncorrectQuoteInformation = !checkQuoteProblemUsed(
    QuoteProblem.IncorrectQuoteInformation,
    quoteTypeToImproveValue,
    prevSubmittedValues,
  );

  /**
   * Handle the prev step action.
   * It resets the fields to its default value.
   */
  const handlePrevStep = useCallback((): void => {
    resetField('observations');
    resetField('quoteProblem');

    prevStep();
  }, [resetField, prevStep]);

  /**
   * Reset the observations field when the `quoteProblem` value changes.
   */
  useEffect(() => {
    resetField('observations');
  }, [quoteProblemValue, resetField]);

  return (
    <>
      <StyledBody>
        <StepHeader
          data-testid={composeDataTestId('__header')}
          title={t('webdoxAI.legalWhisperAnswerRating.quoteProblem.title', {
            quoteType: String(
              t(
                `webdoxAI.legalWhisperAnswerRating.quoteTypeToImprove.options.${quoteTypeToImproveValue}`,
              ),
            ).toLowerCase(),
          })}
          onBack={handlePrevStep}
        />
        <RadioGroupControl
          name="quoteProblem"
          error={false}
          formControlOverrides={radioGroupControlOverrides}
        >
          {shouldShowQuoteNotInForce && (
            <DetailedRadio
              overrides={detailedRadioOverrides}
              data-testid={composeDataTestId('__detailed-radio-quote-not-in-force')}
              description={
                <Text
                  variant="bodySmall"
                  margin={0}
                  color="neutralSubdued"
                >
                  {t('webdoxAI.legalWhisperAnswerRating.quoteProblem.options.quoteNotInForce')}
                </Text>
              }
              value={QuoteProblem.QuoteNotInForce}
            />
          )}
          {shouldShowIrrelevantQuote && (
            <DetailedRadio
              overrides={detailedRadioOverrides}
              data-testid={composeDataTestId('__detailed-radio-irrelevant-quote')}
              description={
                <Text
                  variant="bodySmall"
                  margin={0}
                  color="neutralSubdued"
                >
                  {t('webdoxAI.legalWhisperAnswerRating.quoteProblem.options.irrelevantQuote')}
                </Text>
              }
              value={QuoteProblem.IrrelevantQuote}
            />
          )}
          {shouldShowIncorrectQuoteInformation && (
            <DetailedRadio
              overrides={detailedRadioOverrides}
              data-testid={composeDataTestId('__detailed-radio-incorrect-quote-information')}
              description={
                <Text
                  variant="bodySmall"
                  margin={0}
                  color="neutralSubdued"
                >
                  {t(
                    'webdoxAI.legalWhisperAnswerRating.quoteProblem.options.incorrectQuoteInformation',
                  )}
                </Text>
              }
              value={QuoteProblem.IncorrectQuoteInformation}
            />
          )}
          <DetailedRadioWithTextarea
            description={t('webdoxAI.legalWhisperAnswerRating.quoteProblem.options.other')}
            showObservationTextarea={showObservationTextarea}
            data-testid={composeDataTestId('__detailed-radio-other')}
            value={QuoteProblem.Other}
          />
        </RadioGroupControl>
      </StyledBody>
      <StepFooter
        disabled={invalid || !isDirty}
        isLastStep={showObservationTextarea}
        nextStep={nextStep}
        onSubmit={onSubmit}
        isLoading={isSubmitting}
      />
    </>
  );
};
