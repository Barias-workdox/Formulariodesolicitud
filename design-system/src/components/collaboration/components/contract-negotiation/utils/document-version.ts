/**
 * Gets the document version in string format.
 *
 * @param version - The document version number.
 * @returns A string representing the version in the format "V x.0".
 * @example
 * const versionString = getDocumentVersion(2);
 * // Result: "V 2.0"
 */
export const getDocumentVersion = (version: number): string => {
  return `V ${version}.0`;
};
