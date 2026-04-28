import { ReactNode } from 'react';
import { WithTestId } from '../../interfaces/common.interfaces';
type BaseUploadActionProps = WithTestId & {
    /**
     * Accepted formats, uses HTML input accept attribute
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept
     */
    accept?: string[];
    /**
     * Element rendered inside the action. When clicked, the OS file browser opens up.
     */
    children: ReactNode;
    /**
     * Whether the input is disabled
     */
    disabled?: boolean;
    /**
     * Called with accepted and rejected files. Similar to BaseWeb FileUploader
     * https://baseweb.design/components/file-uploader/
     */
    onSelect(acceptedFiles: File[], rejectedFiles: File[]): void;
};
type FolderUploader = BaseUploadActionProps & {
    /** To indicate whether a file or folder can be selected */
    selectionType?: 'folder';
    /** To indicate whether a group of elements can be selected */
    multiple?: never;
};
type FileUploader = BaseUploadActionProps & {
    /** To indicate whether a file or folder can be selected */
    selectionType?: 'file';
    /** To indicate whether a group of elements can be selected */
    multiple?: boolean;
};
export type UploadActionProps = FolderUploader | FileUploader;
/**
 * Input file with files filter. When the `children` of this component is clicked, the OS file
 * browser is opened to select a file(s)/folder
 *
 * @deprecated - use `FilePicker` in newer development
 */
export declare const UploadAction: ({ dataTestId, onSelect, accept, selectionType, multiple, disabled, children, }: UploadActionProps) => React.ReactElement;
export {};
