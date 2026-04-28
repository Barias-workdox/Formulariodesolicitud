export declare const WEBDOX_AI_PAGE_REGEX: RegExp;
/**
 * To identify all the quotes variants.
 * It matches the following characters:
 * - Single quotes: '
 * - Double quotes: "
 * - Left double quotes: “
 * - Right double quotes: ”
 */
export declare const ALL_QUOTES_VARIANTS: RegExp;
export declare const INDEX_ID_KEY_REGEX: RegExp;
/**
 * Regex to match a single Webdox AI range.
 * It matches the following format:
 *
 * @example
 * \{"index_id": 10\}
 * \{"index_id": null\}
 */
export declare const WEBDOX_AI_RANGE_REGEX: RegExp;
/**
 * Regex to match multiple Webdox AI ranges.
 * It matches the following format:
 *
 * @example
 * \[\{"index_id": 0\}, \{"index_id": 2\}]
 */
export declare const WEBDOX_AI_RANGES_REGEX: RegExp;
