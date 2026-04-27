import { useMemo, useState } from 'react';
import type { ReactElement } from 'react';

import { CheckmarkOutline } from '@carbon/icons-react';
import DOMPurify from 'dompurify';

import { sanitizeClassUserMention } from '@components/utils/strings/regex.utils';

import { Button } from '../button';
import { Spinner } from '../spinner';
import { Tag } from '../tag';
import { useTranslation } from '../utils';
import { useCss } from '../utils/hooks/use-css';

import { cleanMentionsForPayload } from './utils/user-mention.utils';

import {
  MessageAuthor,
  MessageComposer,
  MessageContainer,
  MessageContent,
  MessageContentBodyWrapper,
  MessageContentWrapper,
  MessageDate,
  MessageDelete,
  MessageHeader,
  MessageOptionsPopover,
  NewMessageLabel,
  userMentionCssClassName,
} from '.';

import type { MessageType, MessagesProps } from '.';
import type { DesignSystemTheme } from '../../themes';
import type { DesignSystemColorType } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

const styles = {
  mentionedUserStyles: (theme: DesignSystemTheme): StyleObject => ({
    color: theme.colors.neutral,
    fontWeight: 500,
  }),
  footerStyles: {
    display: 'flex',
    justifyContent: 'space-between',
  } as StyleObject,
  spinnerContainerStyles: {
    height: '40px',
    display: 'flex',
  } as StyleObject,
  resolveButtonContentStyles: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    gap: theme.spacing.spacing2xs,
    alignItems: 'center',
    fontSize: theme.typography.ParagraphXSmall.fontSize,
  }),
  solvedInquiryTagStyles: (theme: DesignSystemTheme): StyleObject => ({
    marginTop: theme.spacing.spacing2xs,
  }),
  contentSpinnerContainerStyles: (theme: DesignSystemTheme): StyleObject => ({
    marginRight: theme.spacing.spacingXs,
  }),
};

export interface MessageItemProps<T extends object = object> extends Pick<
  MessagesProps,
  | 'isLoading'
  | 'isMentionable'
  | 'canUpdate'
  | 'canDelete'
  | 'currentUserId'
  | 'users'
  | 'direction'
  | 'onUpdate'
  | 'onDelete'
  | 'isInquiryLoading'
  | 'onInquiryClick'
> {
  dataTestId: string;
  message: MessageType<T>;
  barColor: DesignSystemColorType;
  labelColor: DesignSystemColorType;
}

/**
 * Message item as a single component.
 * Contains all sub-components that complements the message details.
 * It contains the message layout as container and header, the author details,
 * the content editable as optional, the message date, the popover for options,
 * and the confirmation to delete the message.
 */
export const MessageItem = ({
  dataTestId = 'message',
  isLoading,
  isMentionable,
  canUpdate,
  canDelete,
  currentUserId,
  message,
  users = [],
  barColor,
  labelColor,
  direction,
  isInquiryLoading,
  onUpdate,
  onDelete,
  onInquiryClick,
}: MessageItemProps): ReactElement => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const {
    mentionedUserStyles,
    footerStyles,
    spinnerContainerStyles,
    resolveButtonContentStyles,
    solvedInquiryTagStyles,
    contentSpinnerContainerStyles,
  } = useCss(styles);

  const { t } = useTranslation();

  const {
    type,
    status,
    MenuComponent = <></>,
    isLoading: isMessageLoading = false,
    content: messageContent,
    FooterComponent = <></>,
    CustomContentComponent,
  } = message;

  const shouldRenderDateSection =
    message.createdAt !== undefined || message.updatedAt !== undefined;
  const isInquiry = useMemo(() => type === 'inquiry', [type]);
  const isActiveInquiry = useMemo(() => isInquiry && status === 'active', [isInquiry, status]);

  const styledMessage = isMentionable
    ? sanitizeClassUserMention({
        text: messageContent,
        userMentionCssClassName,
        mentionedUserStyles,
      })
    : messageContent;

  /**
   * Call the onUpdate function to update the content of the message.
   * Once it receives the isSuccess=true response, it will deactivate the editing mode.
   */
  async function patchMessage(rawContent: string): Promise<void> {
    const { content, mentions } = cleanMentionsForPayload(rawContent, users);

    const updatedMessage: MessageType = {
      ...message,
      content,
    };

    const { isSuccess } = await onUpdate({ message: updatedMessage, mentions });

    if (isSuccess) {
      setIsEditMode(false);
    }
  }

  /** Handle the inquiry click button returning the current message */
  const handleInquiryClick = (): void => {
    return onInquiryClick(message);
  };

  return (
    <MessageContainer
      data-testid={dataTestId}
      key={message.id}
      direction={direction}
    >
      {!message.read && <NewMessageLabel />}
      <MessageHeader>
        {message.author !== undefined && (
          <MessageAuthor
            label={message.author.label}
            barColor={barColor}
            labelColor={labelColor}
          >
            {message.author.name}
          </MessageAuthor>
        )}
        {MenuComponent}
        {onUpdate && onDelete && (canUpdate || canDelete) && (
          <MessageOptionsPopover
            data-testid={`${dataTestId}__options-popover`}
            isLoading={isLoading}
            message={message}
            canUpdate={canUpdate}
            canDelete={canDelete}
            onEditClick={(): void => {
              setIsEditMode(true);
            }}
            onDeleteClick={(): void => {
              setShowDeleteConfirmation(true);
            }}
            isAuthor={currentUserId === message.author?.id}
          />
        )}
      </MessageHeader>
      {isEditMode ? (
        <MessageComposer
          data-testid={dataTestId}
          isEditing
          isMentionable={isMentionable}
          users={users}
          value={messageContent}
          $maxHeight="7.5rem"
          onUpdate={patchMessage}
          onCancel={(): void => {
            setIsEditMode(false);
          }}
        />
      ) : (
        <MessageContentWrapper>
          <MessageContentBodyWrapper>
            {CustomContentComponent ?? (
              <MessageContent>
                <span
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(styledMessage),
                  }}
                />
              </MessageContent>
            )}
            {isMessageLoading && (
              <div className={contentSpinnerContainerStyles}>
                <Spinner size="sm" />
              </div>
            )}
          </MessageContentBodyWrapper>
          {FooterComponent}
        </MessageContentWrapper>
      )}
      <div className={footerStyles}>
        {shouldRenderDateSection && (
          <MessageDate
            isEditing={isEditMode}
            createdAt={message.createdAt}
            updatedAt={message.updatedAt}
          />
        )}
        {isInquiry &&
          (isActiveInquiry ? (
            isInquiryLoading ? (
              <div className={spinnerContainerStyles}>
                <Spinner size="sm" />
              </div>
            ) : (
              <Button
                data-testid={`${dataTestId}-message-inquiry-${message.id}`}
                size="32px"
                kind="tertiary"
                onClick={handleInquiryClick}
              >
                <span className={resolveButtonContentStyles}>
                  <CheckmarkOutline
                    size={16}
                    height={18}
                    width={18}
                    color="inherit"
                  />
                  {t('messages.inquiry.resolve')}
                </span>
              </Button>
            )
          ) : (
            <div className={solvedInquiryTagStyles}>
              <Tag
                kind="positive"
                variant="overlay"
              >
                {t('messages.inquiry.resolved')}
              </Tag>
            </div>
          ))}
      </div>
      {onDelete && (
        <MessageDelete
          dataTestId={`${dataTestId}__delete-button`}
          show={showDeleteConfirmation}
          message={message}
          onCancel={(): void => {
            setShowDeleteConfirmation(false);
          }}
          onConfirm={(): void => {
            onDelete(message);
          }}
        />
      )}
    </MessageContainer>
  );
};
