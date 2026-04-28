import { Quote } from '../interfaces/legal-whisper.interfaces';
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
export declare const usePartialQuotesRendering: ({ quotes, minLegalQuotesVisible, }: UseQuotesPartialRenderingProps) => UsePartialQuotesRenderingReturn;
