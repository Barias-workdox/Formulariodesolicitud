/**
 * Border tokens for consistent border radius across the application.
 * These values are used to maintain a consistent visual style and hierarchy.
 */
export declare const borders: {
    /** No border radius - sharp corners */
    readonly borderNone: "0rem";
    /** Small border radius for subtle rounded corners */
    readonly borderSm: "0.25rem";
    /** Medium border radius for standard rounded corners */
    readonly borderMd: "0.5rem";
    /** Full circle border radius for circular elements */
    readonly borderCircle: "50%";
};
export type Borders = typeof borders;
export type BorderKey = keyof Borders;
