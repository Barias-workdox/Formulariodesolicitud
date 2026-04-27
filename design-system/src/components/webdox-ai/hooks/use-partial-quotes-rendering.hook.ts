import { useMemo } from 'react';

import { useToggle } from 'react-use';

import { MIN_QUOTES_VISIBLE } from '../constants/webdox-ai.constants';

import type { Quote } from '@components/webdox-ai/interfaces/legal-whisper.interfaces';

export type UseQuotesPartialRenderingProps = {
  quotes: Quote[];
  minLegalQuotesVisible?: number;
};

export type UsePartialQuotesRenderingReturn = {
  partialQuotes: Quote[];
  showMoreQuotes: boolean;
  isShowMoreButtonVisible: boolean;
  onToggleShowAllQuotes(): void;
};

/**
 * Custom hook to manage the partial rendering of legal quotes.
 *
 * This hook provides functionality to toggle between showing a limited number of quotes and showing all quotes.
 * It also determines if the "Show More" button should be visible based on the number of quotes.
 */
export const usePartialQuotesRendering = ({
  quotes,
  minLegalQuotesVisible = MIN_QUOTES_VISIBLE,
}: UseQuotesPartialRenderingProps): UsePartialQuotesRenderingReturn => {
  const [isToggled, toggle] = useToggle(false);

  const quotesLength = quotes.length;
  const isShowMoreButtonVisible = quotesLength > minLegalQuotesVisible;
  const partialQuotes = useMemo(
    () => (isToggled ? quotes : quotes.slice(0, minLegalQuotesVisible)),
    [isToggled, minLegalQuotesVisible, quotes],
  );

  return {
    isShowMoreButtonVisible,
    onToggleShowAllQuotes: toggle,
    partialQuotes,
    showMoreQuotes: isToggled,
  };
};
