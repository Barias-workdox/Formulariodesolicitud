import { ReactElement } from 'react';
import { Quote } from '../../../../../../../../../interfaces/legal-whisper.interfaces';
import { WithTestId } from '../../../../../../../../../../../interfaces/common.interfaces';
export interface LegalQuotesProps extends WithTestId {
    quotes: Quote[];
    zIndex?: number;
}
declare const MemoizedLegalQuotes: import('react').MemoExoticComponent<({ dataTestId, quotes, zIndex, }: LegalQuotesProps) => ReactElement>;
export { MemoizedLegalQuotes as LegalQuotes };
