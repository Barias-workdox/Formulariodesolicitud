import { ReactElement } from 'react';
import { WithTestId, WithZIndex } from '../../../../../../../interfaces/common.interfaces';
export type SuggestionsButtonProps = WithZIndex<WithTestId<{
    isLoading: boolean;
    onClick?(): void;
}>>;
/**
 * Suggestions button that opens the suggestions list when clicked.
 */
export declare const SuggestionsButton: ({ dataTestId, isLoading, zIndex, onClick, }: SuggestionsButtonProps) => ReactElement;
