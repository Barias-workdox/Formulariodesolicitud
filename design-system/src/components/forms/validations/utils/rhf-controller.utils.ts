/**
 * Recursively finds the first error message in a nested error object
 */
export const findFirstErrorMessage = (obj: unknown): string | undefined => {
  if (!obj || typeof obj !== 'object') {
    return undefined;
  }

  const errorObj = obj as Record<string, unknown>;

  // Check if this object has a message property
  if ('message' in errorObj && typeof errorObj.message === 'string') {
    return errorObj.message;
  }

  // Recursively check all properties
  for (const key in errorObj) {
    if (Object.prototype.hasOwnProperty.call(errorObj, key)) {
      const result = findFirstErrorMessage(errorObj[key]);
      if (result) {
        return result;
      }
    }
  }

  return undefined;
};
