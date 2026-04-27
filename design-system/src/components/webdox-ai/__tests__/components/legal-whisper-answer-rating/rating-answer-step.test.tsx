import { userEvent } from '@testing-library/user-event';

import { FormProvider, useForm } from '@components/forms';
import { legalWhisperAnswerQuotes } from '@components/webdox-ai/__mocks__/legal-whisper-quotes.mock';
import { useAnswerRatingValidationSchema } from '@components/webdox-ai/hooks';
import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import { RatingAnswerStep } from '../../../components/legal-whisper-answer-rating/components/rating-answer-step';
import {
  ANSWER_RATING_FORM_DEFAULT_VALUES,
  RATING_VALUES_ARRAY,
} from '../../../components/legal-whisper-answer-rating/legal-whisper-answer-rating.constants';
import { composeDataTestId } from '../../../components/legal-whisper-answer-rating/utils/compose-data-test-id.util';

import type {
  AnswerRatingForm,
  AnswerRatingStepProps,
} from '../../../components/legal-whisper-answer-rating/legal-whisper-answer-rating.interfaces';
import type { RenderType } from 'test/test-utils';

const mockNextStep = testHelpers.fn();
const mockOnSubmit = testHelpers.fn();

const defaultProps: AnswerRatingStepProps = {
  answer: {
    quotes: legalWhisperAnswerQuotes,
  },
  nextStep: mockNextStep,
  onSubmit: mockOnSubmit,
  prevStep: testHelpers.fn(),
};

const WrappedComponent = (): JSX.Element => {
  const validationSchema = useAnswerRatingValidationSchema();

  const methods = useForm<AnswerRatingForm, undefined, AnswerRatingForm, 'zod'>({
    schema: validationSchema,
    defaultValues: ANSWER_RATING_FORM_DEFAULT_VALUES,
    resolverType: 'zod',
    mode: 'all',
  });

  return (
    <FormProvider {...methods}>
      <RatingAnswerStep {...defaultProps} />
    </FormProvider>
  );
};

const renderComponent = (): RenderType => render(<WrappedComponent />);

describe('RatingAnswerStep - tests', () => {
  const { t } = renderUseTranslation();

  it('should render the component correctly', () => {
    renderComponent();

    // Render the 5 stars
    RATING_VALUES_ARRAY.forEach((ratingValue) => {
      expect(
        screen.getByTestId(composeDataTestId(`__rating-selector--rating-value-${ratingValue}`)),
      ).toBeInTheDocument();
    });

    expect(screen.getByText(t('webdoxAI.legalWhisperAnswerRating.title'))).toBeInTheDocument();
    expect(
      screen.getByText(t('webdoxAI.legalWhisperAnswerRating.submitButton')),
    ).toBeInTheDocument();
  });

  it('should render the answer problem options correctly', async () => {
    renderComponent();

    await userEvent.click(
      screen.getByTestId(composeDataTestId('__rating-selector--rating-value-3')),
    );

    expect(
      screen.getByText(t('webdoxAI.legalWhisperAnswerRating.answerProblem.title')),
    ).toBeInTheDocument();
    expect(
      screen.getByText(t('webdoxAI.legalWhisperAnswerRating.answerProblem.options.mainAnswer')),
    ).toBeInTheDocument();
    expect(
      screen.getByText(t('webdoxAI.legalWhisperAnswerRating.answerProblem.options.mainAnswer')),
    ).toBeInTheDocument();
    expect(
      screen.getByText(t('webdoxAI.legalWhisperAnswerRating.answerProblem.options.quotes')),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        t('webdoxAI.legalWhisperAnswerRating.answerProblem.options.legalWhisperUsage'),
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(t('webdoxAI.legalWhisperAnswerRating.answerProblem.options.systemError')),
    ).toBeInTheDocument();
    expect(screen.getByText(t('general.continue'))).toBeInTheDocument();
  });

  it('should disabled submit button when the score value is empty', () => {
    renderComponent();

    expect(screen.getByText(t('webdoxAI.legalWhisperAnswerRating.submitButton'))).toBeDisabled();
  });

  it('should disabled continue button when the score value is less than 5 and the answer problem is not selected', async () => {
    renderComponent();

    await userEvent.click(
      screen.getByTestId(composeDataTestId('__rating-selector--rating-value-3')),
    );

    expect(screen.getByText(t('general.continue'))).toBeDisabled();
  });

  it('should execute `onSubmit` function correctly', async () => {
    renderComponent();

    await userEvent.click(
      screen.getByTestId(composeDataTestId('__rating-selector--rating-value-5')),
    );
    await userEvent.click(screen.getByText(t('webdoxAI.legalWhisperAnswerRating.submitButton')));

    expect(mockOnSubmit).toHaveBeenCalled();
  });

  it('should execute `nextStep` function correctly', async () => {
    renderComponent();

    await userEvent.click(
      screen.getByTestId(composeDataTestId('__rating-selector--rating-value-3')),
    );
    await userEvent.click(
      screen.getByText(
        t('webdoxAI.legalWhisperAnswerRating.answerProblem.options.legalWhisperUsage'),
      ),
    );
    await userEvent.click(screen.getByText(t('general.continue')));

    expect(mockNextStep).toHaveBeenCalled();
  });
});
