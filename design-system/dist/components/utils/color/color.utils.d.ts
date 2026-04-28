/**
 * Determines whether the current browser supports the HTML5 color input type.
 */
export declare function doesBrowserSupportsColorType(): boolean;
/**
 * Determines whether a given string is a valid 6-digit hexadecimal color value.
 */
export declare function isValidHexColor(hex: string | undefined): boolean;
/**
 * Formats a hexadecimal color value string by removing any non-hexadecimal characters and ensuring it is exactly 6 characters long.
 */
export declare function formatHexColor(colorValue: string): string;
/**
 * Converts a hex color code to an RGB color code.
 */
export declare function hexToRgb(hexColor: string): string;
