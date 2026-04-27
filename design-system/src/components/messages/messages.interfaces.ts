import type { ReactNode } from 'react';

import type { MessageComposerProps } from './message-composer/message-composer.interfaces';
import type { MessageItemProps } from './message-item';
import type { MessageListProps } from './message-list';
import type { DesignSystemColorType, OverrideObject } from '@themes/theme.interfaces';

export type MessageKind = 'comment' | 'inquiry';

export type MessageStatus = 'active' | 'resolved';

export interface MessagesUser {
  id: number;
  name: string;
  email?: string;
  /** The label will be next to the name of the author in the message or in the mentions popover */
  label?: string;
  /** Model in backend to create mentions */
  mentionModel?: string;
}

export type MessageType<T extends object = object> = T & {
  [x: string]: unknown;
  /** Some backend endpoints use hashes as unique ids and others the auto incremental technique */
  id: number | string;
  content: string;
  /** Will display the author section if supplied */
  author?: MessagesUser;
  read: boolean;
  /** If this and updatedAt not defined, will not render the date */
  createdAt?: string;
  /** If this and createdAt not defined, will not render the date */
  updatedAt?: string;
  /** When the message is type inquiry, will render a special button in the footer left section */
  type?: MessageKind;
  /** Used for inquiry message type */
  status?: 'active' | 'resolved';
  /** Will render a loading in the right section of the message */
  isLoading?: boolean;
  /** Render a Custom Menu component in the top right section of the current message */
  MenuComponent?: ReactNode;
  /** Used to render a footer section below the body in the message content */
  FooterComponent?: ReactNode;
  /**
   * Used to render a custom ReactNode in the content section. If not supplied, only the content will
   * be used and sanitized before set in the screen as an html node
   */
  CustomContentComponent?: ReactNode;
};

export type MessageActionResponse = {
  isSuccess: boolean;
};

/** Every Message component section style override */
export interface MessageOverrides {
  MessageList?: OverrideObject<MessageListProps>;
  MessageComposer?: OverrideObject<MessageComposerProps>;
  MessageItem?: OverrideObject<MessageItemProps>;
}

export interface MessageBarColorParams {
  authorId: MessageType['author']['id'];
  currentUserId: number;
  type: MessageType['type'];
  barsOverrides?: {
    /** Used to override the default blueish color for the author messages */
    authorColor?: DesignSystemColorType;
    /** Used to override the default yellowish color for non author user messages */
    otherUserColor?: DesignSystemColorType;
  };
}
