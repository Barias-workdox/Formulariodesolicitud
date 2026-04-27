import type {
  AnswerProblem,
  AnswerRatingStep,
  QuoteProblem,
  QuoteType,
} from './legal-whisper-answer-rating.constants';
import type { FieldValues } from '@components/forms';
import type { LegalWhisperAnswerType } from '@components/webdox-ai/interfaces/legal-whisper.interfaces';

type QuotesToImproveField = {
  name: string;
};

export type AnswerRatingForm = FieldValues & {
  score: number;
  answerProblem?: AnswerProblem;
  mainAnswerProblem?: string;
  legalWhisperUsageProblem?: string;
  systemError?: string;
  quoteTypeToImprove?: QuoteType;
  quoteProblem?: QuoteProblem;
  observations?: string;
  quotesToImprove?: QuotesToImproveField[];
};

export type AnswerRatingStepProps = {
  answer: Pick<LegalWhisperAnswerType, 'quotes'>;
  prevSubmittedValues?: AnswerRatingForm[];
  nextStep(): void;
  prevStep(): void;
  onSubmit(): void;
  onClose?(): void;
};

export type NextStepFunctionParams = {
  answerProblem?: AnswerProblem;
  quoteProblem?: QuoteProblem;
  quoteType?: QuoteType;
};

export type PrevStepFunctionParams = {
  /** To determine if the answer has already been rated */
  alreadyRated?: boolean;
};

export type NextStepFunction = (params: NextStepFunctionParams) => AnswerRatingStep;

export type PrevStepFunction = (params: PrevStepFunctionParams) => AnswerRatingStep;

export type StepConfig = {
  nextStep: AnswerRatingStep | NextStepFunction;
  prevStep: AnswerRatingStep | PrevStepFunction;
};
