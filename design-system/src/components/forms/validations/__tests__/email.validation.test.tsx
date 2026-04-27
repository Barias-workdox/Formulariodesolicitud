import { validateEmail, validateEmails } from '../email.validation';

describe('Email Validation utils', () => {
  describe('validateEmail', () => {
    it('should return true for a valid email address', () => {
      expect(validateEmail('test@example.com')).toBe(true);
    });

    it('should return false for an invalid email address', () => {
      expect(validateEmail('test@example')).toBe(false);
      expect(validateEmail('testexample.com')).toBe(false);
      expect(validateEmail('test@.com')).toBe(false);
    });
  });

  describe('validateEmails', () => {
    it('should return true for an empty array', () => {
      expect(validateEmails([])).toBe(true);
    });

    it('should return true for an array of valid email addresses', () => {
      expect(validateEmails(['test@example.com', 'test2@example.com'])).toBe(true);
    });

    it('should return false for an array containing an invalid email address', () => {
      expect(validateEmails(['test@example.com', 'test2@example'])).toBe(false);
    });

    it('should return true if emails is undefined', () => {
      expect(validateEmails(undefined)).toBe(true);
    });
  });
});
