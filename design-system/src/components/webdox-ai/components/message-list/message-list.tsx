import type { ReactElement } from 'react';

import { useCss } from '@components/utils/hooks/use-css';

import { MessageListItem } from './message-list-item';

import type { ChatBotChatMessageType } from '@components/webdox-ai/interfaces';
import type { MessageListItemType } from '@components/webdox-ai/interfaces/chat-bot-component.interface';
import type { WithTestId } from '@interfaces/common.interfaces';
import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export interface MessageListProps extends WithTestId, Pick<ChatBotChatMessageType, 'zIndex'> {
  items: MessageListItemType[];
  onClick(value: MessageListItemType): void;
}

const styles = {
  wrapperStyles: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    flexDirection: 'column',
    listStyle: 'none',
    gap: theme.spacing.spacingXs,
    margin: 0,
    padding: 0,
  }),
};

/**
 * A Styled reusable list that receives the list items and triggers a click on
 * an item
 */
export const MessageList = ({
  dataTestId,
  items,
  zIndex,
  onClick,
}: MessageListProps): ReactElement => {
  const { wrapperStyles } = useCss(styles);

  /** Trigger the clicked item */
  const handleItemClick = (item: MessageListItemType): void => {
    onClick(item);
  };

  return (
    <ul
      data-testid={`${dataTestId}--wrapper`}
      className={wrapperStyles}
    >
      {items.map((item) => {
        const { label, id } = item;

        return (
          <MessageListItem
            data-testid={`{dataTestId}--item-${id}`}
            key={id}
            onClick={(): void => handleItemClick(item)}
            tooltipProps={{ zIndex, content: label }}
          >
            {label}
          </MessageListItem>
        );
      })}
    </ul>
  );
};
