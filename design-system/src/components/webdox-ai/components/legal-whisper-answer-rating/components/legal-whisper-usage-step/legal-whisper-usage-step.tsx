import { useCallback, useEffect } from 'react';

import { RadioGroupControl, useFormContext } from '@components/forms';
import { DetailedRadio } from '@components/radio';
import { Text } from '@components/text';
import { useTranslation } from '@components/utils';
import { noop } from '@utils/noop';

import { LegalWhisperUsageProblem } from '../../legal-whisper-answer-rating.constants';
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
 * LegalWhisperUsageStep component allows users to rate the legal whisper usage.
 */
export const LegalWhisperUsageStep = ({
  prevStep = noop,
  onSubmit = noop,
}: AnswerRatingStepProps): JSX.Element => {
  const { t } = useTranslation();
  const {
    watch,
    resetField,
    formState: { errors, dirtyFields, isSubmitting },
  } = useFormContext<AnswerRatingForm>();

  const legalWhisperUsageProblemValue = watch('legalWhisperUsageProblem');

  const showObservationTextarea = legalWhisperUsageProblemValue === LegalWhisperUsageProblem.Other;
  const invalid = !!errors.legalWhisperUsageProblem || !!errors.observations;
  const isDirty =
    dirtyFields.legalWhisperUsageProblem &&
    (showObservationTextarea ? dirtyFields.observations : true);

  /**
   * Handle the prev step action.
   * It resets the fields to its default value.
   */
  const handlePrevStep = useCallback((): void => {
    resetField('observations');
    resetField('legalWhisperUsageProblem');

    prevStep();
  }, [resetField, prevStep]);

  /**
   * Reset the observations field when the `legalWhisperUsageProblem` value changes.
   */
  useEffect(() => {
    resetField('observations');
  }, [legalWhisperUsageProblemValue, resetField]);

  return (
    <>
      <StyledBody>
        <StepHeader
          onBack={handlePrevStep}
          data-testid={composeDataTestId('__header')}
          title={t('webdoxAI.legalWhisperAnswerRating.legalWhisperUsage.title')}
        />
        <RadioGroupControl
          name="legalWhisperUsageProblem"
          error={false}
          formControlOverrides={radioGroupControlOverrides}
        >
          <DetailedRadio
            overrides={detailedRadioOverrides}
            data-testid={composeDataTestId('__detailed-radio-not-intuitive')}
            description={
              <Text
                variant="bodySmall"
                margin={0}
                color="neutralSubdued"
              >
                {t('webdoxAI.legalWhisperAnswerRating.legalWhisperUsage.options.notIntuitive')}
              </Text>
            }
            value={LegalWhisperUsageProblem.NotIntuitive}
          />
          <DetailedRadio
            overrides={detailedRadioOverrides}
            data-testid={composeDataTestId('__detailed-radio-unclear-organization')}
            description={
              <Text
                variant="bodySmall"
                margin={0}
                color="neutralSubdued"
              >
                {t(
                  'webdoxAI.legalWhisperAnswerRating.legalWhisperUsage.options.unclearOrganization',
                )}
              </Text>
            }
            value={LegalWhisperUsageProblem.UnclearOrganization}
          />
          <DetailedRadioWithTextarea
            description={t('webdoxAI.legalWhisperAnswerRating.legalWhisperUsage.options.other')}
            showObservationTextarea={showObservationTextarea}
            data-testid={composeDataTestId('__detailed-radio-other')}
            value={LegalWhisperUsageProblem.Other}
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
