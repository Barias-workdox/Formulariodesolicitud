import { useState } from 'react';
import type { ReactElement, ReactNode } from 'react';

import { getOverride, getOverrideProps } from '@utils/overrides.utils';

import { useCss } from '../utils/hooks/use-css';

import { MessageComposer } from './message-composer';
import { MessageItem } from './message-item';
import { MessageList } from './message-list';
import { getMessageBarColor } from './utils/messages.utils';
import { cleanMentionsForPayload } from './utils/user-mention.utils';

import type {
  MessageActionResponse,
  MessageBarColorParams,
  MessageOverrides,
  MessageType,
  MessagesUser,
} from './messages.interfaces';
import type { StyleObject } from 'styletron-react';

const styles = {
  containerStyles: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    flex: 1,
  } as StyleObject,
};

export interface MessagesProps {
  'data-testid'?: string;
  isLoading: boolean;
  isMentionable?: boolean;
  isSubmitting?: boolean;
  isPaginated?: boolean;
  canCreate: boolean;
  canDelete: boolean;
  canUpdate: boolean;
  currentUserId: number;
  /** If not supplied, the override messages should be used */
  messages?: MessageType[];
  users?: MessagesUser[];
  direction?: 'normal' | 'reverse';
  /** Used to show/hide the message list bottom border */
  showBorder?: boolean;
  /** Will render the inquiry message section loading */
  isInquiryLoading?: boolean;
  /**
   * Used to render a custom component when the messages list is empty
   *
   * @deprecated - use emptyMessageComponent to override the complete component. This prop
   * will be removed on the next major release
   */
  emptyMessage?: ReactNode;
  overrides?: MessageOverrides;
  barColors?: MessageBarColorParams['barsOverrides'];
  onCreate?(value: { content: string; mentions: number }): Promise<MessageActionResponse>;
  onUpdate?(value: { message: MessageType; mentions: number }): Promise<MessageActionResponse>;
  onDelete?(message: MessageType): void;
  onPageEnd?(): void;
  onInquiryClick?(message: MessageType): void;
}

/**
 * Single component to construct the messages organism.
 * It will construct the message list and the message composer with all its properties.
 */
export const Messages = ({
  'data-testid': dataTestId = 'messages',
  isLoading,
  isMentionable = false,
  isSubmitting = false,
  isPaginated = false,
  canCreate = true,
  canUpdate = false,
  canDelete = false,
  currentUserId,
  messages = [],
  users = [],
  direction = 'normal',
  showBorder = true,
  emptyMessage,
  isInquiryLoading = false,
  overrides = {},
  barColors,
  onCreate = async (): Promise<MessageActionResponse> => {
    return;
  },
  onUpdate = async (): Promise<MessageActionResponse> => {
    return;
  },
  onDelete = (): void => {
    return;
  },
  onPageEnd = (): void => {
    return;
  },
  onInquiryClick = (): void => {
    return;
  },
}: MessagesProps): ReactElement => {
  const {
    MessageComposer: MessageComposerOverride,
    MessageList: MessageListOverride,
    MessageItem: MessageItemOverride,
  } = overrides;

  const Composer = getOverride(MessageComposerOverride) || MessageComposer;
  const List = getOverride(MessageListOverride) || MessageList;
  const ListItem = getOverride(MessageItemOverride) || MessageItem;

  const [composerValue, setComposerValue] = useState('');
  // on first render, "paginated" messages list will not animate the auto scrolling, only when a message is posted.
  const [isAnimated, setIsAnimated] = useState(false);
  const { containerStyles } = useCss(styles);

  /**
   * Calls onCreate as an async function,
   * if isSuccess=true will clean the composer value.
   */
  async function postMessage(content: string): Promise<void> {
    setComposerValue(content);
    const { isSuccess } = await onCreate(cleanMentionsForPayload(content, users));

    if (isSuccess) {
      setComposerValue('');
      setIsAnimated(true);
    }
  }

  return (
    <div className={containerStyles}>
      <List
        isLoading={isLoading}
        isSubmitting={isSubmitting}
        isAnimated={isAnimated}
        setIsAnimated={setIsAnimated}
        isPaginated={isPaginated}
        direction={direction}
        showBorder={showBorder}
        onPageEnd={onPageEnd}
        emptyMessage={emptyMessage}
        {...getOverrideProps(MessageListOverride)}
      >
        {messages.map((message) => {
          const {
            id: messageId,
            author: { id: messageAuthorId } = {},
            type: messageType,
          } = message;

          return (
            <ListItem
              key={messageId}
              dataTestId={`${dataTestId}-${message.id}`}
              isLoading={isLoading}
              isMentionable={isMentionable}
              canUpdate={canUpdate}
              canDelete={canDelete}
              currentUserId={currentUserId}
              users={users}
              direction={direction}
              message={message}
              barColor={getMessageBarColor({
                authorId: messageAuthorId,
                currentUserId,
                type: messageType,
                barsOverrides: barColors,
              })}
              labelColor={messageAuthorId === currentUserId ? 'brandMedium' : 'warningMedium'}
              onUpdate={onUpdate}
              onDelete={onDelete}
              onInquiryClick={onInquiryClick}
              isInquiryLoading={isInquiryLoading}
              {...getOverrideProps(MessageItemOverride)}
            />
          );
        })}
      </List>
      {canCreate && (
        <Composer
          data-testid={dataTestId}
          isDisabled={isLoading}
          isLoading={isLoading}
          isMentionable={isMentionable}
          users={users}
          value={composerValue}
          onCreate={postMessage}
          enableQuickActions={true}
          {...getOverrideProps(MessageComposerOverride)}
        />
      )}
    </div>
  );
};
