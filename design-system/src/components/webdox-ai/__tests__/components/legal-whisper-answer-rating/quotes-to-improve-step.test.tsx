import { userEvent } from '@testing-library/user-event';

import { FormProvider, useForm } from '@components/forms';
import { legalWhisperAnswerQuotes } from '@components/webdox-ai/__mocks__/legal-whisper-quotes.mock';
import {
  ANSWER_RATING_FORM_DEFAULT_VALUES,
  QuoteProblem,
  QuoteType,
} from '@components/webdox-ai/components';
import { QuotesToImproveStep } from '@components/webdox-ai/components/legal-whisper-answer-rating/components/quotes-to-improve-step';
import { useAnswerRatingValidationSchema } from '@components/webdox-ai/hooks';
import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import type { AnswerRatingStepProps, AnswerRatingForm } from '@components/webdox-ai/components';
import type { RenderType } from 'test/test-utils';

type RenderParams = Partial<AnswerRatingStepProps> & {
  quoteTypeToImprove?: QuoteType;
  quoteProblem?: QuoteProblem;
};

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

const WrappedComponent = (params: RenderParams): JSX.Element => {
  const { quoteTypeToImprove, quoteProblem, ...rest } = params;
  const validationSchema = useAnswerRatingValidationSchema();

  const methods = useForm<AnswerRatingForm, undefined, AnswerRatingForm, 'zod'>({
    schema: validationSchema,
    defaultValues: {
      ...ANSWER_RATING_FORM_DEFAULT_VALUES,
      quoteProblem: quoteProblem || QuoteProblem.QuoteNotInForce,
      quoteTypeToImprove: quoteTypeToImprove || QuoteType.Legal,
    },
    resolverType: 'zod',
    mode: 'all',
  });

  return (
    <FormProvider {...methods}>
      <QuotesToImproveStep
        {...defaultProps}
        {...rest}
      />
    </FormProvider>
  );
};

const renderComponent = (params?: RenderParams): RenderType =>
  render(<WrappedComponent {...params} />);

describe('QuotesToImproveStep - tests', () => {
  const { t } = renderUseTranslation();

  it('should render the title correctly when `quoteProblem` is `QuoteNotInForce`', () => {
    renderComponent();

    expect(
      screen.getByText(
        t('webdoxAI.legalWhisperAnswerRating.quotesToImprove.title.quoteNotInForce'),
      ),
    ).toBeInTheDocument();
  });

  it('should render the title correctly when `quoteProblem` is `IrrelevantQuote`', () => {
    renderComponent({ quoteProblem: QuoteProblem.IrrelevantQuote });

    expect(
      screen.getByText(
        t('webdoxAI.legalWhisperAnswerRating.quotesToImprove.title.irrelevantQuote'),
      ),
    ).toBeInTheDocument();
  });

  it('should render the title correctly when `quoteProblem` is `IncorrectQuoteInformation`', () => {
    renderComponent({ quoteProblem: QuoteProblem.IncorrectQuoteInformation });

    expect(
      screen.getByText(
        t('webdoxAI.legalWhisperAnswerRating.quotesToImprove.title.incorrectQuoteInformation'),
      ),
    ).toBeInTheDocument();
  });

  it('should render the component correctly when `quoteTypeToImprove` is `LegalQuotes`', () => {
    renderComponent({ quoteTypeToImprove: QuoteType.Legal });

    legalWhisperAnswerQuotes.legalQuotes.forEach((quote) => {
      expect(screen.getByText(quote.name)).toBeInTheDocument();
    });
  });

  it('should render the component correctly when `quoteTypeToImprove` is `JurisprudentialQuotes`', () => {
    renderComponent({ quoteTypeToImprove: QuoteType.Jurisprudential });

    legalWhisperAnswerQuotes.jurisprudentialQuotes.forEach((quote) => {
      expect(screen.getByText(quote.name)).toBeInTheDocument();
    });
  });

  it('should render the component correctly when `quoteTypeToImprove` is `AdministrativeQuotes`', () => {
    renderComponent({ quoteTypeToImprove: QuoteType.Administrative });

    legalWhisperAnswerQuotes.administrativeQuotes.forEach((quote) => {
      expect(screen.getByText(quote.name)).toBeInTheDocument();
    });
  });

  it('should execute `onSubmit` function correctly', async () => {
    renderComponent();

    await userEvent.click(screen.getByText(legalWhisperAnswerQuotes.legalQuotes[0].name));
    await userEvent.click(screen.getByText(t('webdoxAI.legalWhisperAnswerRating.submitButton')));

    expect(mockOnSubmit).toHaveBeenCalled();
  });
});
