import { Ref } from 'react';
import { FileType } from './interfaces';
import { FileUploaderBasicProps as BUIFileUploaderProps } from 'baseui/file-uploader-basic';
export type FileUploaderProps = Omit<BUIFileUploaderProps, 'overrides' | 'accept' | 'multiple' | 'disabled'> & {
    'data-testid': string;
    /** Used to get a ref to the hidden file input (useful for focusing on validation errors) */
    inputRef?: Ref<HTMLInputElement>;
    /** Accepted extensions (format: .docx, .pdf, etc...) */
    accept?: string[];
    /** Accepted extensions names used on the subtitle of the file uploader (format: PDF, Word, Excel) */
    acceptedExtensionsNames?: string;
    /** Disable the interaction with the component */
    disabled?: boolean;
    /** Defaults to `false`. When true, shows a selector to choose between files and folders */
    directorySelection?: boolean;
    /** Defaults to `true`. Indicates if the file selection is multiple */
    multiple?: boolean;
    /** Files that has been selected in the component */
    selectedFiles?: FileType[];
    title?: string;
    /** Error message to be displayed */
    error?: boolean;
};
/**
 * Component wrapper that utilizes the `FileUploader` component from the Base Web UI library
 * to provide file uploading functionality.
 */
export declare const FileUploader: import('react').ForwardRefExoticComponent<Omit<BUIFileUploaderProps, "multiple" | "disabled" | "overrides" | "accept"> & {
    'data-testid': string;
    /** Used to get a ref to the hidden file input (useful for focusing on validation errors) */
    inputRef?: Ref<HTMLInputElement>;
    /** Accepted extensions (format: .docx, .pdf, etc...) */
    accept?: string[];
    /** Accepted extensions names used on the subtitle of the file uploader (format: PDF, Word, Excel) */
    acceptedExtensionsNames?: string;
    /** Disable the interaction with the component */
    disabled?: boolean;
    /** Defaults to `false`. When true, shows a selector to choose between files and folders */
    directorySelection?: boolean;
    /** Defaults to `true`. Indicates if the file selection is multiple */
    multiple?: boolean;
    /** Files that has been selected in the component */
    selectedFiles?: FileType[];
    title?: string;
    /** Error message to be displayed */
    error?: boolean;
} & import('react').RefAttributes<unknown>>;
