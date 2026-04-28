import { ReactElement } from 'react';
import { MessageListItemType } from '../../../../interfaces/chat-bot-component.interface';
import { WithTestId, WithZIndex } from '../../../../../../interfaces/common.interfaces';
export type SuggestionListProps = WithTestId<WithZIndex<{
    items: MessageListItemType[];
    title?: string;
    onClick(value: MessageListItemType): void;
}>>;
/**
 * A Styled reusable list that receives the list items and triggers a click on
 * an item
 */
export declare const SuggestionList: ({ dataTestId, items, title, onClick, }: SuggestionListProps) => ReactElement;
