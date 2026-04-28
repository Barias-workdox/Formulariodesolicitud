import { ReactElement } from 'react';
import { Quote } from '../../../../../../../../../interfaces/legal-whisper.interfaces';
import { WithTestId, WithZIndex } from '../../../../../../../../../../../interfaces/common.interfaces';
export type AdministrativeQuotesProps = WithTestId<WithZIndex<{
    quotes: Quote[];
}>>;
declare const MemoizedAdministrativeQuotes: import('react').MemoExoticComponent<({ dataTestId, quotes, }: AdministrativeQuotesProps) => ReactElement>;
export { MemoizedAdministrativeQuotes as AdministrativeQuotes };
