import { useCallback, useMemo, useState } from 'react';

import { AnswerRatingStep, answerRatingStepsMap } from '../components';

import type { NextStepFunctionParams, PrevStepFunctionParams } from '../components';

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
export const useAnswerRatingNavigation = (
  props?: UseAnswerRatingNavigationProps,
): UseAnswerRatingNavigationReturn => {
  const { initialStep = AnswerRatingStep.RatingAnswer } = props || {};

  const [currentStep, setCurrentStep] = useState<AnswerRatingStep>(initialStep);

  const stepMap = useMemo(() => {
    return answerRatingStepsMap[currentStep];
  }, [currentStep]);

  /**
   * Handle the next step in the answer rating process.
   */
  const handleNextStep: UseAnswerRatingNavigationReturn['nextStep'] = useCallback(
    (params = {}): void => {
      if (typeof stepMap.nextStep === 'function') {
        const nextStepValue = stepMap.nextStep(params);

        setCurrentStep(nextStepValue);
      } else {
        setCurrentStep(stepMap.nextStep);
      }
    },
    [stepMap],
  );

  /**
   * Handle the previous step in the answer rating process.
   */
  const handlePrevStep: UseAnswerRatingNavigationReturn['prevStep'] = useCallback(
    (params = {}): void => {
      if (typeof stepMap.prevStep === 'function') {
        const prevStepValue = stepMap.prevStep(params);

        setCurrentStep(prevStepValue);
      } else {
        setCurrentStep(stepMap.prevStep);
      }
    },
    [stepMap],
  );

  /**
   * Handle the go to success step in the answer rating process.
   */
  const handleGoToSuccessStep: UseAnswerRatingNavigationReturn['goToSuccessStep'] = (): void => {
    setCurrentStep(AnswerRatingStep.SuccessMessage);
  };

  /**
   * Handle resetting the navigation to the initial step.
   */
  const handleResetNavigation: UseAnswerRatingNavigationReturn['resetNavigation'] =
    useCallback((): void => {
      setCurrentStep(AnswerRatingStep.RatingAnswer);
    }, []);

  return {
    currentStep,
    nextStep: handleNextStep,
    prevStep: handlePrevStep,
    goToSuccessStep: handleGoToSuccessStep,
    resetNavigation: handleResetNavigation,
  };
};
