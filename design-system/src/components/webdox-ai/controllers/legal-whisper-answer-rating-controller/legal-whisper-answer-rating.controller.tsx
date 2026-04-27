import { useCallback, useEffect, useState } from 'react';

import { FormProvider, useForm } from '@components/forms';

import { ANSWER_RATING_FORM_DEFAULT_VALUES, LegalWhisperAnswerRating } from '../../components';
import { composeDataTestId } from '../../components/legal-whisper-answer-rating/utils/compose-data-test-id.util';
import { useAnswerRatingValidationSchema } from '../../hooks';
import { useAnswerRatingNavigation } from '../../hooks/use-answer-rating-navigation.hook';

import type {
  AnswerRatingForm,
  NextStepFunctionParams,
  PrevStepFunctionParams,
} from '../../components';
import type { LegalWhisperAnswerType } from '@components/webdox-ai/interfaces/legal-whisper.interfaces';

export type LegalWhisperAnswerRatingControllerProps = {
  answerToRate: LegalWhisperAnswerType;
  onSubmit(formValues: AnswerRatingForm): Promise<void>;
  onClose(): void;
};

/**
 * Controller for the Legal Whisper Answer Rating component.
 * It manages the form state and validation for the answer rating process.
 */
export const LegalWhisperAnswerRatingController = ({
  answerToRate,
  onSubmit,
  onClose,
}: LegalWhisperAnswerRatingControllerProps): JSX.Element => {
  const [prevSubmittedValues, setPrevSubmittedValues] = useState<AnswerRatingForm[]>();
  const { currentStep, nextStep, prevStep, goToSuccessStep, resetNavigation } =
    useAnswerRatingNavigation();
  const validationSchema = useAnswerRatingValidationSchema({
    isScoreRequired: prevSubmittedValues?.length === 0,
  });

  const methods = useForm<AnswerRatingForm, undefined, AnswerRatingForm, 'zod'>({
    schema: validationSchema,
    defaultValues: ANSWER_RATING_FORM_DEFAULT_VALUES,
    resolverType: 'zod',
    mode: 'onChange',
  });

  /**
   * Handle the next step in the answer rating process.
   * It retrieves the values from the form and passes them to the next step function.
   */
  const handleNextStep = useCallback((): void => {
    const params: NextStepFunctionParams = {
      answerProblem: methods.getValues('answerProblem'),
      quoteProblem: methods.getValues('quoteProblem'),
      quoteType: methods.getValues('quoteType'),
    };

    nextStep(params);
  }, [methods, nextStep]);

  /**
   * Handle the next step in the answer rating process.
   * It retrieves the values from the form and passes them to the next step function.
   */
  const handlePrevStep = useCallback((): void => {
    const params: PrevStepFunctionParams = {
      alreadyRated: prevSubmittedValues?.length > 0,
    };

    prevStep(params);
  }, [prevStep, prevSubmittedValues]);

  /**
   * Handle the form submission.
   */
  const handleSubmit = useCallback(async (): Promise<void> => {
    const formValues = methods.getValues();

    try {
      await onSubmit(formValues);
      setPrevSubmittedValues((prev) => [...(prev || []), formValues]);
      methods.reset(ANSWER_RATING_FORM_DEFAULT_VALUES);
      goToSuccessStep();
      // The error handling has to be handled in the onSubmit function
    } catch (error) {
      console.error('An error occurred while submitting the form:', error);
    }
  }, [goToSuccessStep, methods, onSubmit]);

  /**
   * Effect to reset the form and the navigation to the initial state.
   */
  useEffect(() => {
    resetNavigation();
    setPrevSubmittedValues([]);
    methods.reset();
  }, [answerToRate, methods, resetNavigation]);

  return (
    <FormProvider {...methods}>
      <LegalWhisperAnswerRating
        data-testid={composeDataTestId('')}
        answer={answerToRate}
        prevSubmittedValues={prevSubmittedValues}
        currentStep={currentStep}
        nextStep={handleNextStep}
        prevStep={handlePrevStep}
        onSubmit={methods.handleSubmit(handleSubmit)}
        onClose={onClose}
      />
    </FormProvider>
  );
};
