import type { ReactElement } from 'react';

import ReactDOMServer from 'react-dom/server';

import type { MessagesUser } from '../messages.interfaces';

interface UserMentionProps {
  user: MessagesUser;
  className: string;
}

/**
 * This is the character that allows to show the floating menu to choose a user to mention
 * when it is written in the edit field
 */
export const mentionCharacter = '@';

/**
 * The users popover will be triggered if:
 * 1. the mention character is typed as the first character in editing
 * 2. is preceded by a blank space
 * 3. is immediately inside a div element, this element is created by new lines.
 */
export const mentionTrigger = (isFirstCharacter: boolean): string =>
  `(&nbsp;| |<div>|<br>)${isFirstCharacter ? '?' : ''}(${mentionCharacter})`;

/**
 * Regular expression that identifies the last mention character if it is
 * preceded by a white space and is not inside a <span>
 */
export const newMentionCharacterTypedRegex = (isFirstCharacter = false): RegExp =>
  new RegExp(`<span.*?</span>|${mentionTrigger(isFirstCharacter)}`, 'g');

/**
 * To control the position of the last possible mention we identify the mention character with a container
 */
export const mentionCharacterWrapper = (index: number): string =>
  `<span contenteditable="false" id="mention-character-${index}">${mentionCharacter}</span>&nbsp;<span></span>`;

/**
 * Css class name to style users with span coming from the backend
 */
export const userMentionCssClassName = 'mentioned-user-container-class';

/**
 * Name of the user who goes inside the message as a mention.
 * It contains data not visible to the end user which is added in the data-user attribute,
 * we use it later to build the message for the payload with the format required by the backend.
 */
export const UserMention = ({ user, className }: UserMentionProps): ReactElement => {
  return (
    <span
      contentEditable="false"
      suppressContentEditableWarning
      className={className}
      data-user-id={user.id}
    >
      {mentionCharacter}
      {user.name.replace(/\s/g, '')}
    </span>
  );
};

/**
 * Mention of the user rendered in a string.
 * It is necessary in this way since it is inserted directly into the DOM through the node with its innerHTML property
 */
export const getUserMentionHtmlString = (user: MessagesUser, className: string): string =>
  ReactDOMServer.renderToStaticMarkup(
    <UserMention
      user={user}
      className={className}
    />,
  ) + '&nbsp;<span></span>';
