import { PropsWithChildren, ReactElement } from 'react';
import { WithTestId } from '../../../../interfaces/common.interfaces';
export type ShowMoreButtonProps = PropsWithChildren<WithTestId<{
    isExpanded: boolean;
    withDivider?: boolean;
    onClick(): void;
}>>;
/**
 * Component that renders a button that toggles between showing more or less quotes.
 */
export declare const ShowMoreButton: ({ dataTestId, isExpanded, withDivider, onClick, }: ShowMoreButtonProps) => ReactElement;
