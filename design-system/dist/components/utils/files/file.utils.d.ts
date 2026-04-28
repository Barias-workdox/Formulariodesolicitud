/**
 * Check if the provided file type should be accepted by the input with accept attribute.
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept
 *
 * Source {@link https://github.com/react-dropzone/attr-accept/blob/master/src/index.js}
 * Inspired by https://github.com/enyo/dropzone
 */
export declare const isFiletypeAccepted: (file: File, acceptedFiles: string | string[]) => boolean;
/**
 * Converts bytes into various units of memory
 */
export declare function bytesToShortNotation(bytes: number, decimals?: number): string;
