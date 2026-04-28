import { AnswerRatingStep } from './legal-whisper-answer-rating.constants';
import { AnswerRatingForm } from './legal-whisper-answer-rating.interfaces';
import { LegalWhisperAnswerType } from '../../interfaces/legal-whisper.interfaces';
export type LegalWhisperAnswerRatingProps = {
    currentStep: AnswerRatingStep;
    answer: LegalWhisperAnswerType;
    prevSubmittedValues?: AnswerRatingForm[];
    nextStep?(): void;
    prevStep?(): void;
    onSubmit?(): void;
    onClose?(): void;
};
/**
 * LegalWhisperAnswerRating component allows users to rate the answer provided by the Legal Whisper AI.
 */
export declare const LegalWhisperAnswerRating: ({ currentStep, answer, prevSubmittedValues, nextStep, prevStep, onSubmit, onClose, }: LegalWhisperAnswerRatingProps) => JSX.Element;
