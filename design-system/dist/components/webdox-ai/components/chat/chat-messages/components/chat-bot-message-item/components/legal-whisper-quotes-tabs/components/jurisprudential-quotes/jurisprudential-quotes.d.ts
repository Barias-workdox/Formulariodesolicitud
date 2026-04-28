import { ReactElement } from 'react';
import { Quote } from '../../../../../../../../../interfaces/legal-whisper.interfaces';
import { WithTestId, WithZIndex } from '../../../../../../../../../../../interfaces/common.interfaces';
export type JurisprudentialQuotesProps = WithTestId<WithZIndex<{
    quotes: Quote[];
}>>;
declare const MemoizedJurisprudentialQuotes: import('react').MemoExoticComponent<({ dataTestId, quotes, }: JurisprudentialQuotesProps) => ReactElement>;
export { MemoizedJurisprudentialQuotes as JurisprudentialQuotes };
