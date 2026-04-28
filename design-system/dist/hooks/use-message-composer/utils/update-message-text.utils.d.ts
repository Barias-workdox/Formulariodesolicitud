/**
 * Update each mention in the message to group the span tag in parentheses
 *
 * The mention must be updated as:
 * (<span contenteditable="false" class="css-cGoNyh" data-user-id="2">\@)JohnDo(e</span>)
 *
 * Then split the message into each character and the group in parentheses takes it as one character
 * to return the message updated as follows:
 *
 * ["(<span contenteditable="false" class="css-cGoNyh" data-user-id="2">\@)", "J", "o", "h", "n", "D", "o", "(e</span>)"]
 */
export declare const updateMessageText: (message: string) => string[];
