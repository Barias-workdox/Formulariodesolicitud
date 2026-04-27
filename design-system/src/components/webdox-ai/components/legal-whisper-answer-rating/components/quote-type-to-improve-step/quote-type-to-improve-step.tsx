import { useCallback } from 'react';

import { RadioGroupControl, useFormContext } from '@components/forms';
import { DetailedRadio } from '@components/radio';
import { Text } from '@components/text';
import { useTranslation } from '@components/utils';
import { noop } from '@utils/noop';

import { QuoteType } from '../../legal-whisper-answer-rating.constants';
import {
  detailedRadioOverrides,
  radioGroupControlOverrides,
} from '../../legal-whisper-answer-rating.styles';
import { StyledBody } from '../../styled-components';
import { composeDataTestId } from '../../utils/compose-data-test-id.util';
import { StepFooter } from '../step-footer';
import { StepHeader } from '../step-header';

import type {
  AnswerRatingForm,
  AnswerRatingStepProps,
} from '../../legal-whisper-answer-rating.interfaces';

/**
 * QuoteTypeToImproveStep component allows users to rate the quote type to improve.
 */
export const QuoteTypeToImproveStep = ({
  answer: { quotes } = {},
  prevStep = noop,
  nextStep = noop,
}: AnswerRatingStepProps): JSX.Element => {
  const { t } = useTranslation();
  const {
    resetField,
    formState: { dirtyFields, errors },
  } = useFormContext<AnswerRatingForm>();

  const isDirty = dirtyFields.quoteTypeToImprove;
  const invalid = !!errors.quoteTypeToImprove;

  const { administrativeQuotes = [], jurisprudentialQuotes = [], legalQuotes = [] } = quotes || {};

  /**
   * Handle the prev step action.
   * It resets the fields to its default value.
   */
  const handlePrevStep = useCallback((): void => {
    resetField('quoteTypeToImprove');

    prevStep();
  }, [resetField, prevStep]);

  return (
    <>
      <StyledBody>
        <StepHeader
          onBack={handlePrevStep}
          data-testid={composeDataTestId('__header')}
          title={t('webdoxAI.legalWhisperAnswerRating.quoteTypeToImprove.title')}
        />
        <RadioGroupControl
          name="quoteTypeToImprove"
          error={false}
          formControlOverrides={radioGroupControlOverrides}
        >
          {legalQuotes.length > 0 && (
            <DetailedRadio
              overrides={detailedRadioOverrides}
              data-testid={composeDataTestId('__detailed-radio-legal')}
              description={
                <Text
                  variant="bodySmall"
                  margin={0}
                  color="neutralSubdued"
                >
                  {t('webdoxAI.legalWhisperAnswerRating.quoteTypeToImprove.options.legal')}
                </Text>
              }
              value={QuoteType.Legal}
            />
          )}
          {jurisprudentialQuotes.length > 0 && (
            <DetailedRadio
              overrides={detailedRadioOverrides}
              data-testid={composeDataTestId('__detailed-radio-jurisprudential')}
              description={
                <Text
                  variant="bodySmall"
                  margin={0}
                  color="neutralSubdued"
                >
                  {t(
                    'webdoxAI.legalWhisperAnswerRating.quoteTypeToImprove.options.jurisprudential',
                  )}
                </Text>
              }
              value={QuoteType.Jurisprudential}
            />
          )}
          {administrativeQuotes.length > 0 && (
            <DetailedRadio
              overrides={detailedRadioOverrides}
              data-testid={composeDataTestId('__detailed-radio-administrative')}
              description={
                <Text
                  variant="bodySmall"
                  margin={0}
                  color="neutralSubdued"
                >
                  {t('webdoxAI.legalWhisperAnswerRating.quoteTypeToImprove.options.administrative')}
                </Text>
              }
              value={QuoteType.Administrative}
            />
          )}
        </RadioGroupControl>
      </StyledBody>
      <StepFooter
        disabled={invalid || !isDirty}
        nextStep={nextStep}
      />
    </>
  );
};
