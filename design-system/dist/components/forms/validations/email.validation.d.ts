/**
 * Validates an email.
 * Returns true if the email is valid.
 */
export declare const validateEmail: (email: string) => boolean;
/**
 * Validates an array of emails.
 * If the array is empty, it returns true.
 * If the array is not empty, it returns true if all emails are valid.
 */
export declare const validateEmails: (emails?: string[]) => boolean;
