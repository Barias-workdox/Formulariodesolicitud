import { ReactElement } from 'react';
import { MessagesUser } from '../messages.interfaces';
interface UserMentionProps {
    user: MessagesUser;
    className: string;
}
/**
 * This is the character that allows to show the floating menu to choose a user to mention
 * when it is written in the edit field
 */
export declare const mentionCharacter = "@";
/**
 * The users popover will be triggered if:
 * 1. the mention character is typed as the first character in editing
 * 2. is preceded by a blank space
 * 3. is immediately inside a div element, this element is created by new lines.
 */
export declare const mentionTrigger: (isFirstCharacter: boolean) => string;
/**
 * Regular expression that identifies the last mention character if it is
 * preceded by a white space and is not inside a <span>
 */
export declare const newMentionCharacterTypedRegex: (isFirstCharacter?: boolean) => RegExp;
/**
 * To control the position of the last possible mention we identify the mention character with a container
 */
export declare const mentionCharacterWrapper: (index: number) => string;
/**
 * Css class name to style users with span coming from the backend
 */
export declare const userMentionCssClassName = "mentioned-user-container-class";
/**
 * Name of the user who goes inside the message as a mention.
 * It contains data not visible to the end user which is added in the data-user attribute,
 * we use it later to build the message for the payload with the format required by the backend.
 */
export declare const UserMention: ({ user, className }: UserMentionProps) => ReactElement;
/**
 * Mention of the user rendered in a string.
 * It is necessary in this way since it is inserted directly into the DOM through the node with its innerHTML property
 */
export declare const getUserMentionHtmlString: (user: MessagesUser, className: string) => string;
export {};
