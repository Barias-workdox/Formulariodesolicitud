import { userEvent } from '@testing-library/user-event';

import { FormProvider, useForm } from '@components/forms';
import { legalWhisperAnswerQuotes } from '@components/webdox-ai/__mocks__/legal-whisper-quotes.mock';
import { useAnswerRatingValidationSchema } from '@components/webdox-ai/hooks';
import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import { QuoteTypeToImproveStep } from '../../../components/legal-whisper-answer-rating/components/quote-type-to-improve-step';
import { ANSWER_RATING_FORM_DEFAULT_VALUES } from '../../../components/legal-whisper-answer-rating/legal-whisper-answer-rating.constants';
import { composeDataTestId } from '../../../components/legal-whisper-answer-rating/utils/compose-data-test-id.util';

import type {
  AnswerRatingForm,
  AnswerRatingStepProps,
} from '../../../components/legal-whisper-answer-rating/legal-whisper-answer-rating.interfaces';
import type { RenderType } from 'test/test-utils';

const mockPrevStep = testHelpers.fn();
const mockNextStep = testHelpers.fn();

const defaultProps: AnswerRatingStepProps = {
  answer: {
    quotes: legalWhisperAnswerQuotes,
  },
  nextStep: mockNextStep,
  prevStep: mockPrevStep,
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
      <QuoteTypeToImproveStep
        {...defaultProps}
        {...props}
      />
    </FormProvider>
  );
};

const renderComponent = (props?: Partial<AnswerRatingStepProps>): RenderType =>
  render(<WrappedComponent {...props} />);

describe('QuoteTypeToImproveStep - tests', () => {
  const { t } = renderUseTranslation();

  it('should render the component correctly', () => {
    renderComponent();

    expect(
      screen.getByText(t('webdoxAI.legalWhisperAnswerRating.quoteTypeToImprove.title')),
    ).toBeInTheDocument();
    expect(
      screen.getByText(t('webdoxAI.legalWhisperAnswerRating.quoteTypeToImprove.options.legal')),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        t('webdoxAI.legalWhisperAnswerRating.quoteTypeToImprove.options.jurisprudential'),
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        t('webdoxAI.legalWhisperAnswerRating.quoteTypeToImprove.options.administrative'),
      ),
    ).toBeInTheDocument();

    expect(screen.getByText(t('general.continue'))).toBeInTheDocument();
  });

  it('should not render legal quotes option when is legal quotes array is empty', () => {
    renderComponent({ answer: { quotes: { ...legalWhisperAnswerQuotes, legalQuotes: [] } } });

    expect(
      screen.queryByText(t('webdoxAI.legalWhisperAnswerRating.quoteTypeToImprove.options.legal')),
    ).not.toBeInTheDocument();
  });

  it('should not render jurisprudential quotes option when is legal quotes array is empty', () => {
    renderComponent({
      answer: { quotes: { ...legalWhisperAnswerQuotes, jurisprudentialQuotes: [] } },
    });

    expect(
      screen.queryByText(
        t('webdoxAI.legalWhisperAnswerRating.quoteTypeToImprove.options.jurisprudential'),
      ),
    ).not.toBeInTheDocument();
  });

  it('should not render administrative quotes option when is legal quotes array is empty', () => {
    renderComponent({
      answer: { quotes: { ...legalWhisperAnswerQuotes, administrativeQuotes: [] } },
    });

    expect(
      screen.queryByText(
        t('webdoxAI.legalWhisperAnswerRating.quoteTypeToImprove.options.administrative'),
      ),
    ).not.toBeInTheDocument();
  });

  it('should execute `nextStep` function correctly', async () => {
    renderComponent();

    await userEvent.click(
      screen.getByText(
        t('webdoxAI.legalWhisperAnswerRating.quoteTypeToImprove.options.jurisprudential'),
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
});
