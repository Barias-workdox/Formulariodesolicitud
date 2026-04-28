import { AnswerRatingForm } from '../../components';
import { LegalWhisperAnswerType } from '../../interfaces/legal-whisper.interfaces';
export type LegalWhisperAnswerRatingControllerProps = {
    answerToRate: LegalWhisperAnswerType;
    onSubmit(formValues: AnswerRatingForm): Promise<void>;
    onClose(): void;
};
/**
 * Controller for the Legal Whisper Answer Rating component.
 * It manages the form state and validation for the answer rating process.
 */
export declare const LegalWhisperAnswerRatingController: ({ answerToRate, onSubmit, onClose, }: LegalWhisperAnswerRatingControllerProps) => JSX.Element;
