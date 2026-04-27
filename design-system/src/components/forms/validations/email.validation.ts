import { EMAIL_REGEX } from '../constants/email-validation.constants';

/**
 * Validates an email.
 * Returns true if the email is valid.
 */
export const validateEmail = (email: string): boolean => EMAIL_REGEX.test(email);

/**
 * Validates an array of emails.
 * If the array is empty, it returns true.
 * If the array is not empty, it returns true if all emails are valid.
 */
export const validateEmails = (emails?: string[]): boolean => {
  if (!emails?.length) return true;

  return emails.every(validateEmail);
};
