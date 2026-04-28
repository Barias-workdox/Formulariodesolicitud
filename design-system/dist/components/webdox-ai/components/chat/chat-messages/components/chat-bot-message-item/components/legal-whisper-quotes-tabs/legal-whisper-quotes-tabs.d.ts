import { LegalWhisperAnswerType } from '../../../../../../../interfaces/legal-whisper.interfaces';
import { WithTestId, WithZIndex } from '../../../../../../../../../interfaces/common.interfaces';
export type LegalWhisperQuotesTabsProps = WithZIndex<WithTestId<{
    quotes: LegalWhisperAnswerType['quotes'];
}>>;
/**
 * LegalWhisperQuotesTabs component renders tabs for different type of legal quotes.
 */
export declare const LegalWhisperQuotesTabs: ({ dataTestId, quotes, zIndex, }: LegalWhisperQuotesTabsProps) => JSX.Element;
