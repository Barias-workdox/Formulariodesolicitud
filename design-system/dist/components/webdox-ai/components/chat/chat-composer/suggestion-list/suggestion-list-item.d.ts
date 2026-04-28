import { PropsWithChildren, ReactElement } from 'react';
export type SuggestionListItemProps = PropsWithChildren<{
    'data-testid': string;
    onClick(): void;
}>;
/**
 * Reusable styled message list item. Has a truncated text
 * and an optional artwork on the left
 */
export declare const SuggestionListItem: ({ "data-testid": dataTestId, children, onClick, }: SuggestionListItemProps) => ReactElement;
