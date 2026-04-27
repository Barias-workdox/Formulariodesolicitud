import type { LinkStrictnessModeType } from '../interfaces';

/**
 * Modes of strictness modes for link validations with `LINK_VALIDATION_REGEX`.
 */
export const LINK_STRICTNESS_MODES = {
  /**
   * 1. Hard validation it should checks if the text string contains any url formats, i.e:
   * ```
   *  'anything123://extensions',
   *  'www.google.cl',
   *  'www.google.com',
   *  'google.com',
   *  'http://google.com',
   *  'ftp://127.0.0.1',
   *  'chrome://extensions',
   *  'Test: www.google.com',
   *  '192.0.0.1',
   *  'http://192.0.0.1',
   *  'localhost:3000',
   *  'Lorem ipsum Company-name.MX',
   * ```
   */
  HARD_MODE: 'HARD_MODE',
  /**
   * 2. Soft validation it should checks if the text string contains any url formats, i.e:
   * ```
   *  'www.google.com',
   *  'http://google.com',
   *  'ftp://127.0.0.1',
   *  'chrome://extensions',
   *  'Test: www.google.com',
   *  '192.0.0.1',
   *  'http://192.0.0.1',
   * ```
   */
  SOFT_MODE: 'SOFT_MODE',
} as const;

/**
 * Link format regex with two different kinds of validations.
 */
export const LINK_VALIDATION_REGEX = {
  /**
   * 1. Hard validation it should checks if the text string contains any url formats, i.e:
   * ```
   *  'anything123://extensions',
   *  'www.google.cl',
   *  'www.google.com',
   *  'google.com',
   *  'http://google.com',
   *  'ftp://127.0.0.1',
   *  'chrome://extensions',
   *  'Test: www.google.com',
   *  '192.0.0.1',
   *  'http://192.0.0.1',
   *  'localhost:3000',
   *  'Lorem ipsum Company-name.MX',
   * ```
   */
  HARD_MODE:
    /\b(?:\S+:\/{2,3}|localhost(?::\d+)?|www\.|(?:[a-zA-Z-0-9]+\.){1,}[a-zA-Z]{2,})(?::\d+)?(?:\/[\w\d%_.~+-]*)*(?:\?[\w\d%_.~+-]+)?(?:#[\w\d_]*)?\b|\b(?:\d{1,3}\.){3}\d{1,3}\b/gm,
  /**
   * 2. Soft validation it should checks if the text string contains any url formats, i.e:
   * ```
   *  'www.google.com',
   *  'http://google.com',
   *  'ftp://127.0.0.1',
   *  'chrome://extensions',
   *  'Test: www.google.com',
   *  '192.0.0.1',
   *  'http://192.0.0.1',
   * ```
   */
  SOFT_MODE:
    /\b(?:[a-z]+:\/{2,3}(?::\d+)?|www\.|(?:[a-z-0-9]+\.){1,3}[a-z]{2,3})(?::\d+)?(?:\/[\w\d%_.~+-]*)*(?:\?[\w\d%_.~+-]+)?(?:#[\w\d_]*)?\b|\b(?:\d{1,3}\.){3}\d{1,3}\b/gm,
} as const satisfies Record<LinkStrictnessModeType, RegExp>;
