import { Button } from '@components/button';
import { useTranslation } from '@components/utils';
import { noop } from '@utils/noop';

import { StyledFooter } from '../../styled-components';

export type StepFooterProps = {
  disabled?: boolean;
  isLoading?: boolean;
  isLastStep?: boolean;
  nextStep?(): void;
  onSubmit?(): void;
  addNewFeedback?(): void;
};

/**
 * StepFooter component renders the footer of the step with a button to continue or submit.
 */
export const StepFooter = ({
  disabled,
  isLastStep = false,
  isLoading = false,
  nextStep = noop,
  onSubmit = noop,
}: StepFooterProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <StyledFooter>
      <Button
        data-testid="legal-whisper-answer-rating__step-footer__button"
        kind="primary-whisper"
        fullWidth
        disabled={disabled}
        onClick={isLastStep ? onSubmit : nextStep}
        isLoading={isLoading}
      >
        {isLastStep ? t('webdoxAI.legalWhisperAnswerRating.submitButton') : t('general.continue')}
      </Button>
    </StyledFooter>
  );
};
