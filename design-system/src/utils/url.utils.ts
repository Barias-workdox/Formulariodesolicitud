import deburr from 'lodash/deburr';

export type SanitizeUrlOptions = {
  /** Remove URI protocol section like https://, http://, mailto:, custom-scheme: */
  removeProtocol?: boolean;
  /** Replacement character/string for disallowed characters and whitespace */
  replacement?: string;
  /** Collapse consecutive replacement characters into a single one */
  collapseRepeatingSeparators?: boolean;
  /** Trim replacement characters (and underscores when kept) at the ends */
  trimSeparators?: boolean;
  /** Convert the final string to lowercase */
  toLowerCase?: boolean;
  /** Keep underscores as-is; if false, underscores are converted to the replacement */
  keepUnderscores?: boolean;
  /** Remove diacritics using lodash.deburr */
  deburr?: boolean;
};

/** Escape a string for safe use inside a RegExp constructor */
const escapeRegex = (value: string): string => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/**
 * Generic URL-friendly sanitizer that can also be used to build test IDs.
 * Applies protocol stripping, whitespace collapsing, character filtering and normalization.
 */
export const sanitizeUrl = (rawValue: string, options: SanitizeUrlOptions = {}): string => {
  if (rawValue === undefined || rawValue === null) {
    return '';
  }

  const {
    removeProtocol = true,
    replacement = '-',
    collapseRepeatingSeparators = true,
    trimSeparators = true,
    toLowerCase = true,
    keepUnderscores = false,
    deburr: shouldDeburr = true,
  } = options;

  const normalized = (shouldDeburr ? deburr(String(rawValue)) : String(rawValue)).trim();

  const value = removeProtocol
    ? normalized
        .replace(/^[a-zA-Z][a-zA-Z0-9+.-]*:\/\//, '')
        .replace(/^[a-zA-Z][a-zA-Z0-9+.-]*:/, '')
    : normalized;

  // Replace whitespace with the chosen replacement
  let sanitized = value.replace(/\s+/g, replacement);

  // Replace any non-word characters (excluding hyphen) with the replacement
  // Note: \w contains underscore, so underscores are preserved here and handled below if needed
  sanitized = sanitized.replace(/[^\w-]+/g, replacement);

  // Optionally convert underscores to replacement
  if (!keepUnderscores) {
    sanitized = sanitized.replace(/_+/g, replacement);
  }

  // Collapse multiple consecutive separators
  if (collapseRepeatingSeparators) {
    const replacementRun = new RegExp(`${escapeRegex(replacement)}+`, 'g');

    sanitized = sanitized.replace(replacementRun, replacement);

    if (keepUnderscores) {
      // Collapse underscores too when they are kept
      sanitized = sanitized.replace(/_+/g, '_');
    }
  }

  // Trim leading and trailing separators
  if (trimSeparators) {
    const edgeSeparators = keepUnderscores
      ? new RegExp(`^(?:${escapeRegex(replacement)}|_)+|(?:${escapeRegex(replacement)}|_)+$`, 'g')
      : new RegExp(`^(?:${escapeRegex(replacement)})+|(?:${escapeRegex(replacement)})+$`, 'g');

    sanitized = sanitized.replace(edgeSeparators, '');
  }

  return toLowerCase ? sanitized.toLowerCase() : sanitized;
};
