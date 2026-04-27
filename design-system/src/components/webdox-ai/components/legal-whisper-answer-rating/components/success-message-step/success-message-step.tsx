import { useCallback, useEffect } from 'react';

import { CheckmarkOutline } from '@carbon/icons-react';

import { BackgroundIcon } from '@components/background-icon';
import { Button } from '@components/button';
import { RadioGroupControl, useFormContext } from '@components/forms';
import { DetailedRadio } from '@components/radio';
import { Text } from '@components/text';
import { useTranslation } from '@components/utils';
import {
  checkFieldUsed,
  checkFieldUsedWithValue,
} from '@components/webdox-ai/utils/answer-rating.util';
import { noop } from '@utils/noop';

import {
  ANSWER_RATING_FORM_DEFAULT_VALUES,
  AnswerProblem,
  MAX_RATING_VALUE,
} from '../../legal-whisper-answer-rating.constants';
import {
  radioGroupControlOverrides,
  radioWithoutMarkOverrides,
} from '../../legal-whisper-answer-rating.styles';
import {
  StyledBody,
  StyledFooter,
  StyledSuccessMessageOptionsContainer,
} from '../../styled-components';
import { StyledSuccessMessageContainer } from '../../styled-components/styled-success-message-container';

import { CustomRadioDescription } from './components/custom-radio-description';

import type {
  AnswerRatingForm,
  AnswerRatingStepProps,
} from '../../legal-whisper-answer-rating.interfaces';

/**
 * SuccessMessageStep component displays a success message after form submission.
 * It allows users to indicate any additional issues with the answer provided.
 */
export const SuccessMessageStep = ({
  prevSubmittedValues,
  nextStep = noop,
  onClose = noop,
}: AnswerRatingStepProps): JSX.Element => {
  const { t } = useTranslation();

  const { setValue, reset, watch } = useFormContext<AnswerRatingForm>();

  const answerProblemValue = watch('answerProblem');

  const shouldShowAnswerProblemOptions = !checkFieldUsedWithValue(
    'score',
    MAX_RATING_VALUE,
    prevSubmittedValues,
  );
  const shouldShowMainAnswerProblem = !checkFieldUsed('mainAnswerProblem', prevSubmittedValues);
  const shouldShowLegalWhisperUsage = !checkFieldUsed(
    'legalWhisperUsageProblem',
    prevSubmittedValues,
  );
  const shouldShowSystemError = !checkFieldUsed('systemError', prevSubmittedValues);

  /**
   * Handle change event for the radio buttons.
   */
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      setValue('answerProblem', event.target.value as AnswerProblem);
      nextStep();
    },
    [setValue, nextStep],
  );

  /**
   * Reset the form to its default values when the component mounts.
   */
  useEffect(() => {
    reset(ANSWER_RATING_FORM_DEFAULT_VALUES);

    // TODO: Evaluate if we can add the missing dependencies
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <StyledBody>
        <StyledSuccessMessageContainer>
          <BackgroundIcon
            Icon={CheckmarkOutline}
            size="44px"
            backgroundColor="positiveWashed"
            iconColor="positive"
          />
          <Text
            variant="body"
            fontWeight="500"
            margin={0}
            textAlign="center"
          >
            {t('webdoxAI.legalWhisperAnswerRating.successMessage.title')}
          </Text>
          <Text
            variant="bodySmall"
            margin={0}
            color="neutralSubdued"
            textAlign="center"
          >
            {t('webdoxAI.legalWhisperAnswerRating.successMessage.subtitle')}
          </Text>
        </StyledSuccessMessageContainer>
        {shouldShowAnswerProblemOptions && (
          <StyledSuccessMessageOptionsContainer>
            <Text
              variant="body"
              fontWeight="500"
              margin={0}
              textAlign="center"
            >
              {t('webdoxAI.legalWhisperAnswerRating.successMessage.anyOtherProblem')}
            </Text>
            <RadioGroupControl
              data-testid="success-message-step__radio-group"
              name="answerProblem"
              error={false}
              formControlOverrides={radioGroupControlOverrides}
              onChange={handleChange}
              value={answerProblemValue}
            >
              {shouldShowMainAnswerProblem && (
                <DetailedRadio
                  data-testid={`radio-group__option--${AnswerProblem.MainAnswer}`}
                  overrides={radioWithoutMarkOverrides}
                  description={
                    <CustomRadioDescription>
                      {t('webdoxAI.legalWhisperAnswerRating.answerProblem.options.mainAnswer')}
                    </CustomRadioDescription>
                  }
                  value={AnswerProblem.MainAnswer}
                />
              )}
              <DetailedRadio
                data-testid={`radio-group__option--${AnswerProblem.Quotes}`}
                overrides={radioWithoutMarkOverrides}
                description={
                  <CustomRadioDescription>
                    {t('webdoxAI.legalWhisperAnswerRating.answerProblem.options.quotes')}
                  </CustomRadioDescription>
                }
                value={AnswerProblem.Quotes}
              />
              {shouldShowLegalWhisperUsage && (
                <DetailedRadio
                  data-testid={`radio-group__option--${AnswerProblem.LegalWhisperUsage}`}
                  overrides={radioWithoutMarkOverrides}
                  description={
                    <CustomRadioDescription>
                      {t(
                        'webdoxAI.legalWhisperAnswerRating.answerProblem.options.legalWhisperUsage',
                      )}
                    </CustomRadioDescription>
                  }
                  value={AnswerProblem.LegalWhisperUsage}
                />
              )}
              {shouldShowSystemError && (
                <DetailedRadio
                  data-testid={`radio-group__option--${AnswerProblem.SystemError}`}
                  overrides={radioWithoutMarkOverrides}
                  description={
                    <CustomRadioDescription>
                      {t('webdoxAI.legalWhisperAnswerRating.answerProblem.options.systemError')}
                    </CustomRadioDescription>
                  }
                  value={AnswerProblem.SystemError}
                />
              )}
            </RadioGroupControl>
          </StyledSuccessMessageOptionsContainer>
        )}
      </StyledBody>
      <StyledFooter>
        <Button
          data-testid="success-message-step__close-button"
          kind="primary-whisper"
          fullWidth
          onClick={onClose}
        >
          {t('webdoxAI.legalWhisperAnswerRating.successMessage.closeButton')}
        </Button>
      </StyledFooter>
    </>
  );
};
