import { MessagesUser } from '../messages.interfaces';
export declare const userMentionRegex: RegExp;
export declare const LINE_BREAK = "%%%NEW_LINE%%%";
/**
 * Change the message format so that the backend recognizes the users mentioned within the message.
 *
 * The format of a mention must be of the form:
 *
 * <span class="mentioned-user-container-class">[user=JohnDoe#1]</span>
 *
 * Where 1 is the "id" of the user and "user" is the value of "mentionModel".
 */
export declare const cleanMentionsForPayload: (message: string, users: MessagesUser[]) => {
    content: string;
    mentions: number;
};
