import { userEvent } from '@testing-library/user-event';

import { FormProvider, useForm } from '@components/forms';
import { legalWhisperAnswerQuotes } from '@components/webdox-ai/__mocks__/legal-whisper-quotes.mock';
import { useAnswerRatingValidationSchema } from '@components/webdox-ai/hooks';
import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import { QuoteProblemStep } from '../../../components/legal-whisper-answer-rating/components/quote-problem-step';
import {
  ANSWER_RATING_FORM_DEFAULT_VALUES,
  QuoteProblem,
  QuoteType,
} from '../../../components/legal-whisper-answer-rating/legal-whisper-answer-rating.constants';
import { composeDataTestId } from '../../../components/legal-whisper-answer-rating/utils/compose-data-test-id.util';

import type {
  AnswerRatingForm,
  AnswerRatingStepProps,
} from '../../../components/legal-whisper-answer-rating/legal-whisper-answer-rating.interfaces';
import type { RenderType } from 'test/test-utils';

const mockPrevStep = testHelpers.fn();
const mockNextStep = testHelpers.fn();
const mockOnSubmit = testHelpers.fn();

const defaultProps: AnswerRatingStepProps = {
  answer: {
    quotes: legalWhisperAnswerQuotes,
  },
  nextStep: mockNextStep,
  prevStep: mockPrevStep,
  onSubmit: mockOnSubmit,
};

const WrappedComponent = (props?: Partial<AnswerRatingStepProps>): JSX.Element => {
  const validationSchema = useAnswerRatingValidationSchema();

  const methods = useForm<AnswerRatingForm, undefined, AnswerRatingForm, 'zod'>({
    schema: validationSchema,
    defaultValues: {
      ...ANSWER_RATING_FORM_DEFAULT_VALUES,
      quoteTypeToImprove: QuoteType.Jurisprudential,
    },
    resolverType: 'zod',
    mode: 'all',
  });

  return (
    <FormProvider {...methods}>
      <QuoteProblemStep
        {...defaultProps}
        {...props}
      />
    </FormProvider>
  );
};

const renderComponent = (props?: Partial<AnswerRatingStepProps>): RenderType =>
  render(<WrappedComponent {...props} />);

describe('QuoteProblemStep - tests', () => {
  const { t } = renderUseTranslation();

  it('should render the component correctly', () => {
    renderComponent();

    expect(
      screen.getByText(
        t('webdoxAI.legalWhisperAnswerRating.quoteProblem.title', {
          quoteType: String(
            t(
              `webdoxAI.legalWhisperAnswerRating.quoteTypeToImprove.options.${QuoteType.Jurisprudential}`,
            ),
          ).toLowerCase(),
        }),
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(t('webdoxAI.legalWhisperAnswerRating.quoteProblem.options.quoteNotInForce')),
    ).toBeInTheDocument();
    expect(
      screen.getByText(t('webdoxAI.legalWhisperAnswerRating.quoteProblem.options.irrelevantQuote')),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        t('webdoxAI.legalWhisperAnswerRating.quoteProblem.options.incorrectQuoteInformation'),
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(t('webdoxAI.legalWhisperAnswerRating.quoteProblem.options.other')),
    ).toBeInTheDocument();
    expect(screen.getByText(t('general.continue'))).toBeInTheDocument();
  });

  it('should render the observations textarea when "Other" is selected', async () => {
    renderComponent();

    await userEvent.click(
      screen.getByText(t('webdoxAI.legalWhisperAnswerRating.quoteProblem.options.other')),
    );

    expect(
      screen.getByPlaceholderText(t('webdoxAI.legalWhisperAnswerRating.observationsPlaceholder')),
    ).toBeInTheDocument();
    expect(
      screen.getByText(t('webdoxAI.legalWhisperAnswerRating.submitButton')),
    ).toBeInTheDocument();
  });

  it('should execute `onSubmit` function correctly', async () => {
    renderComponent();

    await userEvent.click(
      screen.getByText(t('webdoxAI.legalWhisperAnswerRating.quoteProblem.options.other')),
    );
    await userEvent.type(
      screen.getByPlaceholderText(t('webdoxAI.legalWhisperAnswerRating.observationsPlaceholder')),
      'Some observations',
    );
    await userEvent.click(screen.getByText(t('webdoxAI.legalWhisperAnswerRating.submitButton')));

    expect(mockOnSubmit).toHaveBeenCalled();
  });

  it('should execute `nextStep` function correctly', async () => {
    renderComponent();

    await userEvent.click(
      screen.getByText(
        t('webdoxAI.legalWhisperAnswerRating.quoteProblem.options.incorrectQuoteInformation'),
      ),
    );
    await userEvent.click(screen.getByText(t('general.continue')));

    expect(mockNextStep).toHaveBeenCalled();
  });

  it('should execute `prevStep` function correctly', async () => {
    renderComponent();

    await userEvent.click(screen.getByTestId(composeDataTestId('__header--back-button')));

    expect(mockPrevStep).toHaveBeenCalled();
  });

  it('should not render the `QuoteNotInForce` option when was used', () => {
    renderComponent({
      prevSubmittedValues: [
        {
          score: 1,
          quoteTypeToImprove: QuoteType.Jurisprudential,
          quoteProblem: QuoteProblem.QuoteNotInForce,
        },
      ],
    });

    expect(
      screen.queryByText(
        t('webdoxAI.legalWhisperAnswerRating.quoteProblem.options.quoteNotInForce'),
      ),
    ).not.toBeInTheDocument();
  });

  it('should not render the `IrrelevantQuote` option when was used', () => {
    renderComponent({
      prevSubmittedValues: [
        {
          score: 1,
          quoteTypeToImprove: QuoteType.Jurisprudential,
          quoteProblem: QuoteProblem.IrrelevantQuote,
        },
      ],
    });

    expect(
      screen.queryByText(
        t('webdoxAI.legalWhisperAnswerRating.quoteProblem.options.irrelevantQuote'),
      ),
    ).not.toBeInTheDocument();
  });

  it('should not render the `IncorrectQuoteInformation` option when was used', () => {
    renderComponent({
      prevSubmittedValues: [
        {
          score: 1,
          quoteTypeToImprove: QuoteType.Jurisprudential,
          quoteProblem: QuoteProblem.IncorrectQuoteInformation,
        },
      ],
    });

    expect(
      screen.queryByText(
        t('webdoxAI.legalWhisperAnswerRating.quoteProblem.options.incorrectQuoteInformation'),
      ),
    ).not.toBeInTheDocument();
  });
});
