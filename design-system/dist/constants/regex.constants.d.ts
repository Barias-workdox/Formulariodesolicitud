/**
 * Regular expression to match user mentions in a content editable span element.
 * The span element has a class attribute with alphanumeric characters and hyphens,
 * a data-user-id attribute with digits, and the inner text starts with `@` followed by any characters except `<`.
 */
export declare const USER_MENTION_REGEX: RegExp;
