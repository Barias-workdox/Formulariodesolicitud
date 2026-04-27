import { useCallback, useMemo } from 'react';

import { useFieldArray } from 'react-hook-form';

import { Checkbox } from '@components/checkbox';
import { useFormContext } from '@components/forms';
import { Text } from '@components/text';
import { useTranslation } from '@components/utils';
import { ShowMoreButton } from '@components/webdox-ai/components/show-more-button';
import { MIN_LEGAL_QUOTES_VISIBLE } from '@components/webdox-ai/constants/webdox-ai.constants';
import { usePartialQuotesRendering } from '@components/webdox-ai/hooks/use-partial-quotes-rendering.hook';
import { noop } from '@utils/noop';

import { QuoteProblem, QuoteType } from '../../legal-whisper-answer-rating.constants';
import { checkboxOverrides } from '../../legal-whisper-answer-rating.styles';
import { StyledBody, StyledQuotesContainer } from '../../styled-components';
import { composeDataTestId } from '../../utils/compose-data-test-id.util';
import { StepFooter } from '../step-footer';
import { StepHeader } from '../step-header';

import type {
  AnswerRatingForm,
  AnswerRatingStepProps,
} from '../../legal-whisper-answer-rating.interfaces';

const titleTextKeyByProblem: Partial<Record<QuoteProblem, string>> = {
  [QuoteProblem.QuoteNotInForce]:
    'webdoxAI.legalWhisperAnswerRating.quotesToImprove.title.quoteNotInForce',
  [QuoteProblem.IrrelevantQuote]:
    'webdoxAI.legalWhisperAnswerRating.quotesToImprove.title.irrelevantQuote',
  [QuoteProblem.IncorrectQuoteInformation]:
    'webdoxAI.legalWhisperAnswerRating.quotesToImprove.title.incorrectQuoteInformation',
} as const;

/**
 * QuotesToImproveStep component allows users to rate the legal whisper usage.
 */
export const QuotesToImproveStep = ({
  answer: { quotes = {} } = {},
  prevStep = noop,
  onSubmit = noop,
}: AnswerRatingStepProps): JSX.Element => {
  const { t } = useTranslation();
  const {
    watch,
    resetField,
    control,
    formState: { errors, isSubmitting },
  } = useFormContext<AnswerRatingForm>();

  const quoteTypeToImprove = watch('quoteTypeToImprove');
  const quoteProblemValue = watch('quoteProblem');

  const invalid = !!errors.quotesToImprove;

  const {
    fields: quotesToImprove = [],
    append,
    remove,
    replace,
  } = useFieldArray({
    control,
    name: 'quotesToImprove',
  });

  const isDirty = quotesToImprove.length > 0;

  const quotesToRender = useMemo(() => {
    if (quoteTypeToImprove === QuoteType.Legal) {
      return quotes.legalQuotes;
    }
    if (quoteTypeToImprove === QuoteType.Jurisprudential) {
      return quotes.jurisprudentialQuotes;
    }
    if (quoteTypeToImprove === QuoteType.Administrative) {
      return quotes.administrativeQuotes;
    }

    return [];
  }, [quoteTypeToImprove, quotes]);

  const { isShowMoreButtonVisible, onToggleShowAllQuotes, partialQuotes, showMoreQuotes } =
    usePartialQuotesRendering({
      quotes: quotesToRender,
      minLegalQuotesVisible: MIN_LEGAL_QUOTES_VISIBLE,
    });

  const titleTextKey = titleTextKeyByProblem[quoteProblemValue];

  /**
   * Handle the prev step action.
   * It resets the fields to its default value.
   */
  const handlePrevStep = useCallback((): void => {
    resetField('quotesToImprove');
    replace([]);

    prevStep();
  }, [resetField, replace, prevStep]);

  return (
    <>
      <StyledBody>
        <StepHeader
          onBack={handlePrevStep}
          data-testid={composeDataTestId('__header')}
          title={t(titleTextKey)}
        />
        <StyledQuotesContainer>
          {partialQuotes.map(({ name }) => {
            const index = quotesToImprove.findIndex((item) => item.name === name);
            const isChecked = index !== -1;

            /** Handle checkbox change */
            const handleChange = (): void => {
              if (isChecked) {
                remove(index);
              } else {
                append({ name });
              }
            };

            return (
              <Checkbox
                key={name}
                data-testid={composeDataTestId(`__quote--${index}__checkbox`)}
                overrides={checkboxOverrides}
                error={false}
                checked={isChecked}
                onChange={handleChange}
              >
                <Text
                  variant="bodySmall"
                  margin={0}
                  color="neutralSubdued"
                >
                  {name}
                </Text>
              </Checkbox>
            );
          })}
          {isShowMoreButtonVisible && (
            <ShowMoreButton
              dataTestId={composeDataTestId('__show-more-button')}
              onClick={onToggleShowAllQuotes}
              isExpanded={showMoreQuotes}
              withDivider={false}
            />
          )}
        </StyledQuotesContainer>
      </StyledBody>
      <StepFooter
        disabled={invalid || !isDirty}
        isLastStep
        onSubmit={onSubmit}
        isLoading={isSubmitting}
      />
    </>
  );
};
