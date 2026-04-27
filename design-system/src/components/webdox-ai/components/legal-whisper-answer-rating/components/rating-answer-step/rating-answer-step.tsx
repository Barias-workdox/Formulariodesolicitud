import { useEffect, useState } from 'react';

import { LicenseDraft } from '@carbon/icons-react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

import { RadioGroupControl, useFormContext } from '@components/forms';
import { DetailedRadio } from '@components/radio';
import { Text } from '@components/text';
import { useTranslation } from '@components/utils';
import { COMMON_ICON_SIZE_24 } from '@constants/common.constants';
import { noop } from '@utils/noop';

import { AnswerProblem, MAX_RATING_VALUE } from '../../legal-whisper-answer-rating.constants';
import {
  detailedRadioOverrides,
  radioGroupControlOverrides,
} from '../../legal-whisper-answer-rating.styles';
import { StyledBody, StyledTitleContainer } from '../../styled-components';
import { composeDataTestId } from '../../utils/compose-data-test-id.util';
import { RatingSelectorControl } from '../rating-selector';
import { StepFooter } from '../step-footer';

import { StyledOptionsContainer } from './styled-components';

import type {
  AnswerRatingForm,
  AnswerRatingStepProps,
} from '../../legal-whisper-answer-rating.interfaces';

/**
 * RatingAnswerStep component allows users to rate the answer provided by the Legal Whisper AI.
 * It includes a rating selector and an optional radio group for feedback on the answer.
 */
export const RatingAnswerStep = ({
  nextStep = noop,
  onSubmit = noop,
}: AnswerRatingStepProps): JSX.Element => {
  const [rating, setRating] = useState(0);

  const [animateRef] = useAutoAnimate();

  const { t } = useTranslation();
  const {
    watch,
    setValue,
    formState: { dirtyFields, errors, isSubmitting },
  } = useFormContext<AnswerRatingForm>();

  const scoreValue = watch('score');

  const isScoreDirty = dirtyFields.score;
  const showAnswerProblem = isScoreDirty && scoreValue < MAX_RATING_VALUE;
  const invalid = !!errors.score || !!errors.answerProblem;
  const isDirty = isScoreDirty && (showAnswerProblem ? dirtyFields.answerProblem : true);

  /**
   * Reset the answerProblem field when the score value changes.
   */
  useEffect(() => {
    if (scoreValue === MAX_RATING_VALUE) {
      setValue('answerProblem', undefined, { shouldValidate: true, shouldDirty: true });
    }
  }, [scoreValue, setValue]);

  return (
    <>
      <StyledBody>
        <StyledTitleContainer>
          <LicenseDraft size={COMMON_ICON_SIZE_24} />
          <Text
            variant="body"
            fontWeight="500"
            display="flex"
            alignItems="center"
            margin={0}
          >
            {t('webdoxAI.legalWhisperAnswerRating.title')}
          </Text>
        </StyledTitleContainer>
        <RatingSelectorControl
          data-testid={composeDataTestId('__rating-selector')}
          onChange={setRating}
          value={rating}
          name="score"
        />
        <StyledOptionsContainer ref={animateRef}>
          {showAnswerProblem && (
            <>
              <Text
                variant="body"
                fontWeight="500"
                display="flex"
                alignItems="center"
                margin={0}
              >
                {t('webdoxAI.legalWhisperAnswerRating.answerProblem.title')}
              </Text>
              <RadioGroupControl
                name="answerProblem"
                error={false}
                formControlOverrides={radioGroupControlOverrides}
              >
                <DetailedRadio
                  overrides={detailedRadioOverrides}
                  data-testid={composeDataTestId('__detailed-radio-main-answer')}
                  description={
                    <Text
                      variant="bodySmall"
                      margin={0}
                      color="neutralSubdued"
                    >
                      {t('webdoxAI.legalWhisperAnswerRating.answerProblem.options.mainAnswer')}
                    </Text>
                  }
                  value={AnswerProblem.MainAnswer}
                />
                <DetailedRadio
                  overrides={detailedRadioOverrides}
                  data-testid={composeDataTestId('__detailed-radio-quotes')}
                  description={
                    <Text
                      variant="bodySmall"
                      margin={0}
                      color="neutralSubdued"
                    >
                      {t('webdoxAI.legalWhisperAnswerRating.answerProblem.options.quotes')}
                    </Text>
                  }
                  value={AnswerProblem.Quotes}
                />
                <DetailedRadio
                  overrides={detailedRadioOverrides}
                  data-testid={composeDataTestId('__detailed-radio-legal-whisper-usage')}
                  description={
                    <Text
                      variant="bodySmall"
                      margin={0}
                      color="neutralSubdued"
                    >
                      {t(
                        'webdoxAI.legalWhisperAnswerRating.answerProblem.options.legalWhisperUsage',
                      )}
                    </Text>
                  }
                  value={AnswerProblem.LegalWhisperUsage}
                />
                <DetailedRadio
                  overrides={detailedRadioOverrides}
                  data-testid={composeDataTestId('__detailed-radio-system-error')}
                  description={
                    <Text
                      variant="bodySmall"
                      margin={0}
                      color="neutralSubdued"
                    >
                      {t('webdoxAI.legalWhisperAnswerRating.answerProblem.options.systemError')}
                    </Text>
                  }
                  value={AnswerProblem.SystemError}
                />
              </RadioGroupControl>
            </>
          )}
        </StyledOptionsContainer>
      </StyledBody>
      <StepFooter
        disabled={invalid || !isDirty}
        isLoading={isSubmitting}
        isLastStep={!showAnswerProblem}
        onSubmit={onSubmit}
        nextStep={nextStep}
      />
    </>
  );
};
