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
/**
 * Generic URL-friendly sanitizer that can also be used to build test IDs.
 * Applies protocol stripping, whitespace collapsing, character filtering and normalization.
 */
export declare const sanitizeUrl: (rawValue: string, options?: SanitizeUrlOptions) => string;
