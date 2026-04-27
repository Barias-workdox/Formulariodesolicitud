import { userEvent } from '@testing-library/user-event';

import { FormProvider, useForm } from '@components/forms';
import { legalWhisperAnswerQuotes } from '@components/webdox-ai/__mocks__/legal-whisper-quotes.mock';
import {
  ANSWER_RATING_FORM_DEFAULT_VALUES,
  LegalWhisperUsageProblem,
  MainAnswerProblem,
  MAX_RATING_VALUE,
  SystemError,
} from '@components/webdox-ai/components';
import { SuccessMessageStep } from '@components/webdox-ai/components/legal-whisper-answer-rating/components/success-message-step';
import { useAnswerRatingValidationSchema } from '@components/webdox-ai/hooks';
import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import type {
  AnswerRatingForm,
  AnswerRatingStepProps,
} from '../../../components/legal-whisper-answer-rating/legal-whisper-answer-rating.interfaces';
import type { RenderType } from 'test/test-utils';

const mockNextStep = testHelpers.fn();
const mockOnClose = testHelpers.fn();

const prevSubmittedValuesMock = {
  score: MAX_RATING_VALUE,
};

const defaultProps: AnswerRatingStepProps = {
  answer: {
    quotes: legalWhisperAnswerQuotes,
  },
  prevSubmittedValues: [prevSubmittedValuesMock],
  nextStep: mockNextStep,
  onClose: mockOnClose,
  prevStep: testHelpers.fn(),
  onSubmit: testHelpers.fn(),
};

const WrappedComponent = (props?: Partial<AnswerRatingStepProps>): JSX.Element => {
  const validationSchema = useAnswerRatingValidationSchema();

  const methods = useForm<AnswerRatingForm, undefined, AnswerRatingForm, 'zod'>({
    schema: validationSchema,
    defaultValues: ANSWER_RATING_FORM_DEFAULT_VALUES,
    resolverType: 'zod',
    mode: 'all',
  });

  return (
    <FormProvider {...methods}>
      <SuccessMessageStep
        {...defaultProps}
        {...props}
      />
    </FormProvider>
  );
};

const renderComponent = (props?: Partial<AnswerRatingStepProps>): RenderType =>
  render(<WrappedComponent {...props} />);

describe('SuccessMessageStep - tests', () => {
  const { t } = renderUseTranslation();

  it('should render the component correctly', () => {
    renderComponent();

    expect(
      screen.getByText(t('webdoxAI.legalWhisperAnswerRating.successMessage.title')),
    ).toBeInTheDocument();
    expect(
      screen.getByText(t('webdoxAI.legalWhisperAnswerRating.successMessage.subtitle')),
    ).toBeInTheDocument();
    expect(
      screen.getByText(t('webdoxAI.legalWhisperAnswerRating.successMessage.closeButton')),
    ).toBeInTheDocument();
  });

  it('should render answers problem options when score is < MAX_RATING_VALUE', () => {
    renderComponent({ prevSubmittedValues: [{ score: 1 }] });

    expect(
      screen.getByText(t('webdoxAI.legalWhisperAnswerRating.successMessage.anyOtherProblem')),
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
  });

  it('should not render answers with prev submitted values', () => {
    renderComponent({
      prevSubmittedValues: [
        {
          score: 1,
          mainAnswerProblem: MainAnswerProblem.TooLong,
          legalWhisperUsageProblem: LegalWhisperUsageProblem.NotIntuitive,
          systemError: SystemError.AnswerLoadingError,
        },
      ],
    });

    expect(
      screen.getByText(t('webdoxAI.legalWhisperAnswerRating.successMessage.anyOtherProblem')),
    ).toBeInTheDocument();
    expect(
      screen.queryByText(t('webdoxAI.legalWhisperAnswerRating.answerProblem.options.mainAnswer')),
    ).not.toBeInTheDocument();
    expect(
      screen.getByText(t('webdoxAI.legalWhisperAnswerRating.answerProblem.options.quotes')),
    ).toBeInTheDocument();
    expect(
      screen.queryByText(
        t('webdoxAI.legalWhisperAnswerRating.answerProblem.options.legalWhisperUsage'),
      ),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(t('webdoxAI.legalWhisperAnswerRating.answerProblem.options.systemError')),
    ).not.toBeInTheDocument();
  });

  it('should execute `nextStep` correctly', async () => {
    renderComponent({
      prevSubmittedValues: [
        {
          score: 1,
        },
      ],
    });

    await userEvent.click(
      screen.getByText(
        t('webdoxAI.legalWhisperAnswerRating.answerProblem.options.legalWhisperUsage'),
      ),
    );
    expect(mockNextStep).toHaveBeenCalled();
  });

  it('should execute `onClose` step correctly', async () => {
    renderComponent();

    await userEvent.click(
      screen.getByText(t('webdoxAI.legalWhisperAnswerRating.successMessage.closeButton')),
    );
    expect(mockOnClose).toHaveBeenCalled();
  });
});
