/**
 * Modes of strictness modes for link validations with `LINK_VALIDATION_REGEX`.
 */
export declare const LINK_STRICTNESS_MODES: {
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
    readonly HARD_MODE: "HARD_MODE";
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
    readonly SOFT_MODE: "SOFT_MODE";
};
/**
 * Link format regex with two different kinds of validations.
 */
export declare const LINK_VALIDATION_REGEX: {
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
    readonly HARD_MODE: RegExp;
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
    readonly SOFT_MODE: RegExp;
};
