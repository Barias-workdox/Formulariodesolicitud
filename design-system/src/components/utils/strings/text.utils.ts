/**
 * Capitalizes the first letter of a string.
 *
 * @param s - The string to capitalize.
 * @returns The capitalized string.
 */
export const capitalize = (s: string): string => {
  if (typeof s !== 'string') {
    return '';
  }

  return s.charAt(0).toUpperCase() + s.slice(1);
};

/**
 * Normalizes a string using Unicode Normalization Form D (NFD) and removes diacritical marks.
 *
 * Unicode Normalization Form D (NFD) decomposes combined characters into their constituent parts.
 * For example, the character "é" (U+00E9) is decomposed into "e" (U+0065) and the combining acute accent "´" (U+0301).
 * This function then removes all combining diacritical marks, leaving only the base characters.
 *
 * @param str - The string to normalize.
 * @returns The normalized string with diacritical marks removed.
 *
 * @example
 * ```typescript
 * normalizeStringNFD('Crème Brûlée'); // 'Creme Brulee'
 * normalizeStringNFD('Schrödinger'); // 'Schrodinger'
 * normalizeStringNFD('Mañana'); // 'Manana'
 * normalizeStringNFD('Résumé'); // 'Resume'
 * ```
 */
export const normalizeStringNFD = (str: string): string => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

/**
 * Checks if the normalized version of `strToValidate` is included in the normalized version of `baseStr`.
 * This function normalizes the strings using Unicode Normalization Form D (NFD),
 * removes diacritical marks, and performs a case-insensitive comparison.
 *
 * @example
 * ```typescript
 * includesStringNormalized('Crème Brûlée', 'creme'); // true
 * includesStringNormalized('Schrödinger', 'schrodinger'); // true
 * includesStringNormalized('Mañana', 'mana'); // true
 * includesStringNormalized('Résumé', 'resume'); // true
 * includesStringNormalized('Hello', 'world'); // false
 * ```
 */
export const includesStringNormalized = (baseStr: string, strToValidate: string): boolean =>
  normalizeStringNFD(baseStr)
    .toLowerCase()
    .includes(normalizeStringNFD(strToValidate).toLowerCase());

/**
 * Format Compact Numbers
 *
 * @example
 * ```typescript
 * formatCompactNumber(1_000); // '1K'
 * formatCompactNumber(1_000_000); // '1M'
 * formatCompactNumber(1_000_000_000); // '1B'
 * ```
 */
export const formatCompactNumber = (value: number): string => {
  return Intl.NumberFormat('en', { notation: 'compact' }).format(value);
};
