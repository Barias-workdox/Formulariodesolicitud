import { AnswerRatingStep, NextStepFunctionParams, PrevStepFunctionParams } from '../components';
export type UseAnswerRatingNavigationProps = {
    initialStep?: AnswerRatingStep;
};
export type UseAnswerRatingNavigationReturn = {
    currentStep: AnswerRatingStep;
    nextStep(params?: NextStepFunctionParams): void;
    prevStep(params?: PrevStepFunctionParams): void;
    goToSuccessStep(): void;
    resetNavigation(): void;
};
/**
 * Custom hook for answer rating navigation.
 * It manages the current step in the answer rating process and provides functions
 * to navigate to the next and previous steps.
 */
export declare const useAnswerRatingNavigation: (props?: UseAnswerRatingNavigationProps) => UseAnswerRatingNavigationReturn;
