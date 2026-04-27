import { noop } from '@utils/noop';

import { LegalWhisperUsageStep } from './components/legal-whisper-usage-step';
import { MainAnswerProblemsStep } from './components/main-answer-problems-step';
import { QuoteProblemStep } from './components/quote-problem-step';
import { QuoteTypeToImproveStep } from './components/quote-type-to-improve-step';
import { QuotesToImproveStep } from './components/quotes-to-improve-step';
import { RatingAnswerStep } from './components/rating-answer-step';
import { SuccessMessageStep } from './components/success-message-step';
import { SystemErrorStep } from './components/system-error-step';
import { AnswerRatingStep } from './legal-whisper-answer-rating.constants';
import { StyledContainer } from './styled-components';

import type {
  AnswerRatingForm,
  AnswerRatingStepProps,
} from './legal-whisper-answer-rating.interfaces';
import type { LegalWhisperAnswerType } from '@components/webdox-ai/interfaces/legal-whisper.interfaces';

export type LegalWhisperAnswerRatingProps = {
  currentStep: AnswerRatingStep;
  answer: LegalWhisperAnswerType;
  prevSubmittedValues?: AnswerRatingForm[];
  nextStep?(): void;
  prevStep?(): void;
  onSubmit?(): void;
  onClose?(): void;
};

const answerRatingStepMap: Record<AnswerRatingStep, React.ComponentType<AnswerRatingStepProps>> = {
  [AnswerRatingStep.LegalWhisperUsage]: LegalWhisperUsageStep,
  [AnswerRatingStep.MainAnswerProblems]: MainAnswerProblemsStep,
  [AnswerRatingStep.QuoteProblem]: QuoteProblemStep,
  [AnswerRatingStep.QuotesToImprove]: QuotesToImproveStep,
  [AnswerRatingStep.QuoteTypeToImprove]: QuoteTypeToImproveStep,
  [AnswerRatingStep.RatingAnswer]: RatingAnswerStep,
  [AnswerRatingStep.SuccessMessage]: SuccessMessageStep,
  [AnswerRatingStep.SystemError]: SystemErrorStep,
};

/**
 * LegalWhisperAnswerRating component allows users to rate the answer provided by the Legal Whisper AI.
 */
export const LegalWhisperAnswerRating = ({
  currentStep,
  answer,
  prevSubmittedValues = [],
  nextStep = noop,
  prevStep = noop,
  onSubmit = noop,
  onClose = noop,
}: LegalWhisperAnswerRatingProps): JSX.Element => {
  const Step = answerRatingStepMap[currentStep];

  return (
    <StyledContainer>
      <Step
        answer={answer}
        prevSubmittedValues={prevSubmittedValues}
        nextStep={nextStep}
        prevStep={prevStep}
        onSubmit={onSubmit}
        onClose={onClose}
      />
    </StyledContainer>
  );
};
