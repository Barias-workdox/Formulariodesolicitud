import { describe, expect, it } from 'vitest';

import { findFirstErrorMessage } from '../rhf-controller.utils';

describe('findFirstErrorMessage', () => {
  describe('should return undefined for invalid inputs', () => {
    it('should return undefined for null', () => {
      expect(findFirstErrorMessage(null)).toBeUndefined();
    });

    it('should return undefined for undefined', () => {
      expect(findFirstErrorMessage(undefined)).toBeUndefined();
    });

    it('should return undefined for primitive values', () => {
      expect(findFirstErrorMessage('string')).toBeUndefined();
      expect(findFirstErrorMessage(123)).toBeUndefined();
      expect(findFirstErrorMessage(true)).toBeUndefined();
      expect(findFirstErrorMessage(false)).toBeUndefined();
      expect(findFirstErrorMessage(0)).toBeUndefined();
      expect(findFirstErrorMessage('')).toBeUndefined();
    });

    it('should return undefined for empty object', () => {
      expect(findFirstErrorMessage({})).toBeUndefined();
    });

    it('should return undefined for array', () => {
      expect(findFirstErrorMessage([])).toBeUndefined();
    });
  });

  describe('should find message in simple objects', () => {
    it('should return message when object has message property', () => {
      const errorObj = { message: 'This is an error message' };

      expect(findFirstErrorMessage(errorObj)).toBe('This is an error message');
    });

    it('should return undefined when message property is not a string', () => {
      const errorObj = { message: 123 };

      expect(findFirstErrorMessage(errorObj)).toBeUndefined();
    });

    it('should return undefined when message property is null', () => {
      const errorObj = { message: null };

      expect(findFirstErrorMessage(errorObj)).toBeUndefined();
    });

    it('should return undefined when message property is undefined', () => {
      const errorObj = { message: undefined };

      expect(findFirstErrorMessage(errorObj)).toBeUndefined();
    });
  });

  describe('should find message in nested objects', () => {
    it('should find message in first level nested object', () => {
      const errorObj = {
        field1: { message: 'Field 1 error' },
        field2: { message: 'Field 2 error' },
      };

      expect(findFirstErrorMessage(errorObj)).toBe('Field 1 error');
    });

    it('should find message in deeply nested object', () => {
      const errorObj = {
        level1: {
          level2: {
            level3: {
              message: 'Deep error message',
            },
          },
        },
      };

      expect(findFirstErrorMessage(errorObj)).toBe('Deep error message');
    });

    it('should find first message when multiple nested objects have messages', () => {
      const errorObj = {
        field1: {
          nested: { message: 'First error' },
        },
        field2: {
          nested: { message: 'Second error' },
        },
      };

      expect(findFirstErrorMessage(errorObj)).toBe('First error');
    });
  });

  describe('should handle complex nested structures', () => {
    it('should find message in object with mixed properties', () => {
      const errorObj = {
        name: 'John',
        age: 30,
        errors: {
          email: { message: 'Invalid email format' },
          password: { message: 'Password too short' },
        },
      };

      expect(findFirstErrorMessage(errorObj)).toBe('Invalid email format');
    });

    it('should find message in object with arrays', () => {
      const errorObj = {
        items: [{ message: 'Array item error' }, { message: 'Another array error' }],
        otherField: { message: 'Other field error' },
      };

      expect(findFirstErrorMessage(errorObj)).toBe('Array item error');
    });

    it('should handle objects with null/undefined nested properties', () => {
      const errorObj = {
        field1: null,
        field2: undefined,
        field3: { message: 'Valid error message' },
      };

      expect(findFirstErrorMessage(errorObj)).toBe('Valid error message');
    });
  });

  describe('should handle React Hook Form error structures', () => {
    it('should find message in typical RHF error structure', () => {
      const errorObj = {
        type: 'required',
        message: 'This field is required',
      };

      expect(findFirstErrorMessage(errorObj)).toBe('This field is required');
    });

    it('should find message in nested RHF error structure', () => {
      const errorObj = {
        firstName: {
          type: 'required',
          message: 'First name is required',
        },
        lastName: {
          type: 'minLength',
          message: 'Last name is too short',
        },
      };

      expect(findFirstErrorMessage(errorObj)).toBe('First name is required');
    });

    it('should find message in deeply nested RHF error structure', () => {
      const errorObj = {
        user: {
          profile: {
            contact: {
              email: {
                type: 'pattern',
                message: 'Invalid email format',
              },
            },
          },
        },
      };

      expect(findFirstErrorMessage(errorObj)).toBe('Invalid email format');
    });
  });

  describe('should handle edge cases', () => {
    it('should handle object with circular references gracefully', () => {
      const errorObj: Record<string, unknown> = { message: 'Valid message' };

      errorObj.self = errorObj;

      expect(findFirstErrorMessage(errorObj)).toBe('Valid message');
    });

    it('should handle object with function properties', () => {
      const errorObj = {
        handler: () => 'function',
        message: 'Error message',
      };

      expect(findFirstErrorMessage(errorObj)).toBe('Error message');
    });

    it('should handle object with symbol properties', () => {
      const errorObj = {
        [Symbol('test')]: 'symbol value',
        message: 'Symbol error message',
      };

      expect(findFirstErrorMessage(errorObj)).toBe('Symbol error message');
    });

    it('should handle object with non-enumerable properties', () => {
      const errorObj = {
        message: 'Enumerable message',
      };

      Object.defineProperty(errorObj, 'nonEnumerable', {
        value: { message: 'Non-enumerable message' },
        enumerable: false,
      });

      expect(findFirstErrorMessage(errorObj)).toBe('Enumerable message');
    });
  });

  describe('should return first message found in traversal order', () => {
    it('should return first message when multiple objects have messages at same level', () => {
      const errorObj = {
        field1: { message: 'First message' },
        field2: { message: 'Second message' },
        field3: { message: 'Third message' },
      };

      expect(findFirstErrorMessage(errorObj)).toBe('First message');
    });

    it('should prioritize message property over nested messages', () => {
      const errorObj = {
        message: 'Top level message',
        nested: { message: 'Nested message' },
      };

      expect(findFirstErrorMessage(errorObj)).toBe('Top level message');
    });
  });
});
