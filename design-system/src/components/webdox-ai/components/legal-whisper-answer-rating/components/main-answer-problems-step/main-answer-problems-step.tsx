import { useCallback, useEffect } from 'react';

import { RadioGroupControl, useFormContext } from '@components/forms';
import { DetailedRadio } from '@components/radio';
import { Text } from '@components/text';
import { useTranslation } from '@components/utils';
import { noop } from '@utils/noop';

import { MainAnswerProblem } from '../../legal-whisper-answer-rating.constants';
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
 * MainAnswerProblemsStep component allows users to rate the answer provided by the Legal Whisper AI.
 * It includes a rating selector and an optional radio group for feedback on the answer.
 */
export const MainAnswerProblemsStep = ({
  prevStep = noop,
  onSubmit = noop,
}: AnswerRatingStepProps): JSX.Element => {
  const { t } = useTranslation();
  const {
    watch,
    resetField,
    formState: { dirtyFields, errors, isSubmitting },
  } = useFormContext<AnswerRatingForm>();

  const mainAnswerProblemValue = watch('mainAnswerProblem');

  const showObservationTextarea = mainAnswerProblemValue === MainAnswerProblem.Other;

  const invalid = !!errors.mainAnswerProblem || !!errors.observations;
  const isDirty =
    dirtyFields.mainAnswerProblem && (showObservationTextarea ? dirtyFields.observations : true);

  /**
   * Handle the prev step action.
   * It resets the fields to its default value.
   */
  const handlePrevStep = useCallback((): void => {
    resetField('observations');
    resetField('mainAnswerProblem');

    prevStep();
  }, [resetField, prevStep]);

  /**
   * Reset the observations field when the `mainAnswerProblem` value changes.
   */
  useEffect(() => {
    resetField('observations');
  }, [mainAnswerProblemValue, resetField]);

  return (
    <>
      <StyledBody>
        <StepHeader
          onBack={handlePrevStep}
          data-testid={composeDataTestId('__header')}
          title={t('webdoxAI.legalWhisperAnswerRating.mainAnswerProblem.title')}
        />
        <RadioGroupControl
          name="mainAnswerProblem"
          error={false}
          formControlOverrides={radioGroupControlOverrides}
          value={mainAnswerProblemValue}
        >
          <DetailedRadio
            overrides={detailedRadioOverrides}
            data-testid={composeDataTestId('__detailed-radio-not-aligned-with-investigation')}
            description={
              <Text
                variant="bodySmall"
                margin={0}
                color="neutralSubdued"
              >
                {t(
                  'webdoxAI.legalWhisperAnswerRating.mainAnswerProblem.options.notAlignedWithInvestigation',
                )}
              </Text>
            }
            value={MainAnswerProblem.NotAlignedWithInvestigation}
          />
          <DetailedRadio
            overrides={detailedRadioOverrides}
            data-testid={composeDataTestId('__detailed-radio-too-long')}
            description={
              <Text
                variant="bodySmall"
                margin={0}
                color="neutralSubdued"
              >
                {t('webdoxAI.legalWhisperAnswerRating.mainAnswerProblem.options.tooLong')}
              </Text>
            }
            value={MainAnswerProblem.TooLong}
          />
          <DetailedRadioWithTextarea
            description={t('webdoxAI.legalWhisperAnswerRating.mainAnswerProblem.options.other')}
            showObservationTextarea={showObservationTextarea}
            data-testid={composeDataTestId('__detailed-radio-other')}
            value={MainAnswerProblem.Other}
          />
        </RadioGroupControl>
      </StyledBody>
      <StepFooter
        disabled={invalid || !isDirty}
        isLastStep
        onSubmit={onSubmit}
        isLoading={isSubmitting}
      />
    </>
  );
};
