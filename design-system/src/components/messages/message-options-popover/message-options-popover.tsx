import type { ReactElement } from 'react';

import { OverflowMenuHorizontal } from '@carbon/icons-react';
import { StatefulPopover } from 'baseui/popover';

import { IconButton } from '../../button';
import { MessageOptions } from '../message-options';

import type { MessageOptionsProps } from '../message-options';

export type MessageOptionsPopoverProps = Omit<MessageOptionsProps, 'close'> & {
  'data-testid'?: string;
  canUpdate: boolean;
  canDelete: boolean;
  isLoading: boolean;
  /**
   * Is the current user the author of the message?
   */
  isAuthor: boolean;
};

/**
 * Popover to show the message options.
 * Will be rendered if is the author of the message.
 */
export const MessageOptionsPopover = ({
  'data-testid': dataTestId = 'message-options',
  canUpdate,
  canDelete,
  isLoading,
  message,
  onEditClick,
  onDeleteClick,
  isAuthor,
}: MessageOptionsPopoverProps): ReactElement => {
  return isAuthor ? (
    <StatefulPopover
      content={({ close }): ReactElement => (
        <MessageOptions
          dataTestId={dataTestId}
          canUpdate={canUpdate}
          canDelete={canDelete}
          message={message}
          close={close}
          onEditClick={onEditClick}
          onDeleteClick={onDeleteClick}
        />
      )}
      showArrow
      returnFocus
      autoFocus
      placement="left"
      ignoreBoundary
    >
      <IconButton
        data-testid={`${dataTestId}--options-button`}
        size="auto"
        type="button"
        disabled={isLoading}
      >
        <OverflowMenuHorizontal size={16} />
      </IconButton>
    </StatefulPopover>
  ) : (
    <></>
  );
};
