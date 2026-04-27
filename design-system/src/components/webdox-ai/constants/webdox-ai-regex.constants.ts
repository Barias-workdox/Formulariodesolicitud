export const WEBDOX_AI_PAGE_REGEX = /\{\{\{(.*?)\}\}\}/gs;

/**
 * To identify all the quotes variants.
 * It matches the following characters:
 * - Single quotes: '
 * - Double quotes: "
 * - Left double quotes: “
 * - Right double quotes: ”
 */
export const ALL_QUOTES_VARIANTS = /['“”"]/g;

export const INDEX_ID_KEY_REGEX = /index_id/gs;

/**
 * Regex to match a single Webdox AI range.
 * It matches the following format:
 *
 * @example
 * \{"index_id": 10\}
 * \{"index_id": null\}
 */
export const WEBDOX_AI_RANGE_REGEX = new RegExp(
  `\\{\\s*${ALL_QUOTES_VARIANTS.source}?${INDEX_ID_KEY_REGEX.source}${ALL_QUOTES_VARIANTS.source}?\\s*:\\s*(\\d+|null)\\s*\\}`,
  'g',
);

/**
 * Regex to match multiple Webdox AI ranges.
 * It matches the following format:
 *
 * @example
 * \[\{"index_id": 0\}, \{"index_id": 2\}]
 */
export const WEBDOX_AI_RANGES_REGEX = new RegExp(
  `\\[\\s*(${WEBDOX_AI_RANGE_REGEX.source})(?:\\s*,\\s*${WEBDOX_AI_RANGE_REGEX.source})*\\s*\\]`,
  'gs',
);
