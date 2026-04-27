import { escapeRegex } from '../../utils/strings/regex.utils';
import { userMentionCssClassName } from '../message-composer/user-mention';

import type { MessagesUser } from '../messages.interfaces';

export const userMentionRegex =
  /<span contenteditable="false" class="[\w-]+" data-user-id="\d+">@[^<]+<\/span>/g;

export const LINE_BREAK = '%%%NEW_LINE%%%';

/**
 * Change the message format so that the backend recognizes the users mentioned within the message.
 *
 * The format of a mention must be of the form:
 *
 * <span class="mentioned-user-container-class">[user=JohnDoe#1]</span>
 *
 * Where 1 is the "id" of the user and "user" is the value of "mentionModel".
 */
export const cleanMentionsForPayload = (
  message: string,
  users: MessagesUser[],
): { content: string; mentions: number } => {
  // Unescape the html quotes and add temporary libre breaks.
  const cleanedMessage = message.replace(/&quot;/g, '"').replace(/<br>/g, LINE_BREAK);

  // Get mentions and join them with a pipe to separate them by regex easily later.
  const mentionsArray = cleanedMessage.match(userMentionRegex) || [];

  // If the message contains any mention we need to transform its content
  if (mentionsArray.length > 0) {
    // Escape special characters in the mention
    const mentionsRegex = mentionsArray.map(escapeRegex).join('|');

    return {
      mentions: mentionsArray.length,

      content:
        // We iterate by each mention and transform each one
        cleanedMessage
          .replace(new RegExp(mentionsRegex, 'g'), (mention) => {
            // Get the user id from the mention (the matched regex for groups is at the index 1).
            const [, userId] = mention.match(/data-user-id="(\d+)"/i);

            const mentionedUser: MessagesUser = users.find((user) => user.id === +userId);

            // Transforms any kind of tilde (áªàäâã, etc) to its unicode variant without tilde, also, removes any special character including white spaces.
            // Ex.: "Jöao Güidó #3 [Support](IT)" will be transformed to "JoaoGuido3SupportIT"
            const cleanedUserName = mentionedUser.name.normalize('NFD').replace(/[^\w]+/g, '');

            return `<span class="${userMentionCssClassName}">[${mentionedUser.mentionModel}=${cleanedUserName}#${mentionedUser.id}]</span>`;
          })
          // Restore the temporary line breaks with <br>
          .replace(new RegExp(LINE_BREAK, 'g'), '<br>'),
    };
  }

  // If the message doesn't contains any mention remove any html tag and restore the html line breaks.
  return {
    content: cleanedMessage.replace(/<[^>]*>/g, '').replace(new RegExp(LINE_BREAK, 'g'), '<br>'),
    mentions: 0,
  };
};
