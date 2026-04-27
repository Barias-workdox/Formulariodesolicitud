import { useCallback, useEffect } from 'react';

import { ChevronLeft } from '@carbon/icons-react';

import { IconButton } from '@components/button';
import { RadioGroupControl, useFormContext } from '@components/forms';
import { DetailedRadio } from '@components/radio';
import { Text } from '@components/text';
import { useTranslation } from '@components/utils';
import { noop } from '@utils/noop';

import { LegalWhisperUsageProblem, SystemError } from '../../legal-whisper-answer-rating.constants';
import {
  detailedRadioOverrides,
  radioGroupControlOverrides,
} from '../../legal-whisper-answer-rating.styles';
import { StyledBody, StyledTitleContainer } from '../../styled-components';
import { composeDataTestId } from '../../utils/compose-data-test-id.util';
import { DetailedRadioWithTextarea } from '../detailed-radio-with-textarea';
import { StepFooter } from '../step-footer';

import type {
  AnswerRatingForm,
  AnswerRatingStepProps,
} from '../../legal-whisper-answer-rating.interfaces';

/**
 * SystemErrorStep component allows users to indicate a system error.
 */
export const SystemErrorStep = ({
  prevStep = noop,
  onSubmit = noop,
}: AnswerRatingStepProps): JSX.Element => {
  const { t } = useTranslation();
  const {
    watch,
    resetField,
    formState: { errors, dirtyFields, isSubmitting },
  } = useFormContext<AnswerRatingForm>();

  const systemErrorValue = watch('systemError');

  const showObservationTextarea = systemErrorValue === SystemError.Other;

  const invalid = !!errors.systemError || !!errors.observations;
  const isDirty =
    dirtyFields.systemError && (showObservationTextarea ? dirtyFields.observations : true);

  /**
   * Handle the prev step action.
   * It resets the fields to its default value.
   */
  const handlePrevStep = useCallback((): void => {
    resetField('observations');
    resetField('systemError');

    prevStep();
  }, [resetField, prevStep]);

  /**
   * Reset the observations field when the `systemError` value changes.
   */
  useEffect(() => {
    resetField('observations');
  }, [systemErrorValue, resetField]);

  return (
    <>
      <StyledBody>
        <StyledTitleContainer>
          <IconButton
            onClick={handlePrevStep}
            size="32px"
            data-testid={composeDataTestId('__header--back-button')}
          >
            <ChevronLeft />
          </IconButton>
          <Text
            variant="body"
            fontWeight="500"
            display="flex"
            alignItems="center"
            margin={0}
          >
            {t('webdoxAI.legalWhisperAnswerRating.systemError.title')}
          </Text>
        </StyledTitleContainer>
        <RadioGroupControl
          name="systemError"
          error={false}
          formControlOverrides={radioGroupControlOverrides}
        >
          <DetailedRadio
            overrides={detailedRadioOverrides}
            data-testid={composeDataTestId('__detailed-radio-answer-loading-error')}
            description={
              <Text
                variant="bodySmall"
                margin={0}
                color="neutralSubdued"
              >
                {t('webdoxAI.legalWhisperAnswerRating.systemError.options.answerLoadingError')}
              </Text>
            }
            value={SystemError.AnswerLoadingError}
          />
          <DetailedRadioWithTextarea
            description={t('webdoxAI.legalWhisperAnswerRating.systemError.options.other')}
            showObservationTextarea={showObservationTextarea}
            data-testid={composeDataTestId('__detailed-radio-other')}
            value={LegalWhisperUsageProblem.Other}
          />
        </RadioGroupControl>
      </StyledBody>
      <StepFooter
        disabled={invalid || !isDirty}
        isLoading={isSubmitting}
        isLastStep
        onSubmit={onSubmit}
      />
    </>
  );
};
