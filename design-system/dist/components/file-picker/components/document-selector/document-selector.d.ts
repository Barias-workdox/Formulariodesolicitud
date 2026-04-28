import { FilePickerProps } from '../../file-picker';
export type DocumentSelectorProps = Pick<FilePickerProps, 'data-testid' | 'accept' | 'buttonIcon' | 'buttonText' | 'filename' | 'isUploading' | 'showDeleteButton' | 'isDeleting' | 'uploadProgress' | 'onDelete' | 'onUpload'> & {
    progressMessage: string;
    uploadPercentage: number;
    uploadCompleted: boolean;
};
/**
 * Component that provides a user interface for selecting and uploading documents.
 * It includes a button for initiating the file selection process, displays the selected file name,
 * and shows the upload progress through a progress circle and progress bar.
 */
export declare const DocumentSelector: ({ "data-testid": dataTestId, accept, buttonText, buttonIcon: ButtonIcon, filename, isUploading, showDeleteButton, progressMessage, isDeleting, uploadProgress, uploadPercentage, uploadCompleted, onDelete, onUpload, }: DocumentSelectorProps) => JSX.Element;
