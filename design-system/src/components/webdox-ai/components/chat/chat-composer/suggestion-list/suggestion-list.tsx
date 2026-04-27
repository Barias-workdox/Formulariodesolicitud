import { type ReactElement, useCallback } from 'react';

import { TruncatedText } from '@components/truncated-text';

import { SuggestionListItem } from './suggestion-list-item';
import { StyledUl, truncateTextProps } from './suggestion-list.styled';

import type { MessageListItemType } from '@components/webdox-ai/interfaces/chat-bot-component.interface';
import type { WithTestId, WithZIndex } from '@interfaces/common.interfaces';

export type SuggestionListProps = WithTestId<
  WithZIndex<{
    items: MessageListItemType[];
    title?: string;
    onClick(value: MessageListItemType): void;
  }>
>;

/**
 * A Styled reusable list that receives the list items and triggers a click on
 * an item
 */
export const SuggestionList = ({
  dataTestId,
  items,
  title,
  onClick,
}: SuggestionListProps): ReactElement => {
  /** Trigger the clicked item */
  const handleItemClick = useCallback(
    (item: MessageListItemType): void => {
      onClick(item);
    },
    [onClick],
  );

  return (
    <>
      <StyledUl data-testid={`${dataTestId}--wrapper`}>
        <TruncatedText
          data-testid={`${dataTestId}-content`}
          textProps={truncateTextProps}
          tooltipProps={{
            showArrow: true,
            content: title,
            ignoreBoundary: true,
          }}
        >
          {title}
        </TruncatedText>
        {items.map((item) => {
          const { label, id } = item;

          return (
            <SuggestionListItem
              data-testid={`{dataTestId}--item-${id}`}
              key={id}
              onClick={(): void => handleItemClick(item)}
            >
              {label}
            </SuggestionListItem>
          );
        })}
      </StyledUl>
    </>
  );
};
