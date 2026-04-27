import { userEvent } from '@testing-library/user-event';

import { FormProvider, useForm } from '@components/forms';
import { legalWhisperAnswerQuotes } from '@components/webdox-ai/__mocks__/legal-whisper-quotes.mock';
import { useAnswerRatingValidationSchema } from '@components/webdox-ai/hooks';
import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import { MainAnswerProblemsStep } from '../../../components/legal-whisper-answer-rating/components/main-answer-problems-step';
import { ANSWER_RATING_FORM_DEFAULT_VALUES } from '../../../components/legal-whisper-answer-rating/legal-whisper-answer-rating.constants';
import { composeDataTestId } from '../../../components/legal-whisper-answer-rating/utils/compose-data-test-id.util';

import type {
  AnswerRatingForm,
  AnswerRatingStepProps,
} from '../../../components/legal-whisper-answer-rating/legal-whisper-answer-rating.interfaces';
import type { RenderType } from 'test/test-utils';

const mockPrevStep = testHelpers.fn();
const mockOnSubmit = testHelpers.fn();

const defaultProps: AnswerRatingStepProps = {
  answer: {
    quotes: legalWhisperAnswerQuotes,
  },
  nextStep: testHelpers.fn(),
  prevStep: mockPrevStep,
  onSubmit: mockOnSubmit,
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
      <MainAnswerProblemsStep {...defaultProps} />
    </FormProvider>
  );
};

const renderComponent = (): RenderType => render(<WrappedComponent />);

describe('MainAnswerProblemsStep - tests', () => {
  const { t } = renderUseTranslation();

  it('should render the component correctly', () => {
    renderComponent();

    expect(
      screen.getByText(t('webdoxAI.legalWhisperAnswerRating.mainAnswerProblem.title')),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        t(
          'webdoxAI.legalWhisperAnswerRating.mainAnswerProblem.options.notAlignedWithInvestigation',
        ),
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(t('webdoxAI.legalWhisperAnswerRating.mainAnswerProblem.options.tooLong')),
    ).toBeInTheDocument();
    expect(
      screen.getByText(t('webdoxAI.legalWhisperAnswerRating.mainAnswerProblem.options.other')),
    ).toBeInTheDocument();
    expect(
      screen.getByText(t('webdoxAI.legalWhisperAnswerRating.submitButton')),
    ).toBeInTheDocument();
  });

  it('should render the observations textarea when "Other" is selected', async () => {
    renderComponent();

    await userEvent.click(
      screen.getByText(t('webdoxAI.legalWhisperAnswerRating.mainAnswerProblem.options.other')),
    );

    expect(
      screen.getByPlaceholderText(t('webdoxAI.legalWhisperAnswerRating.observationsPlaceholder')),
    ).toBeInTheDocument();
  });

  it('should execute `onSubmit` function correctly', async () => {
    renderComponent();

    await userEvent.click(
      screen.getByText(t('webdoxAI.legalWhisperAnswerRating.mainAnswerProblem.options.tooLong')),
    );
    await userEvent.click(screen.getByText(t('webdoxAI.legalWhisperAnswerRating.submitButton')));

    expect(mockOnSubmit).toHaveBeenCalled();
  });

  it('should execute `prevStep` function correctly', async () => {
    renderComponent();

    await userEvent.click(screen.getByTestId(composeDataTestId('__header--back-button')));

    expect(mockPrevStep).toHaveBeenCalled();
  });
});
