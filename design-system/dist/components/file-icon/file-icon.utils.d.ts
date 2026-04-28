import { FileType } from './file-icon.interfaces';
/**
 * Returns the requested icon as a pure SVG. `lawgeex` type will render special icon in
 * automatic review step documents
 */
export declare const fileIconSvgMap: Record<FileType, string>;
/** Support for legacy icon css styles in the Portal repository */
export declare const legacyFileIconsMap: {
    doc: string;
    docx: string;
    xls: string;
    xlsx: string;
    ppt: string;
    pptx: string;
};
/** Default file type */
export declare const defaultFileType = "unknown";
