import { FilePickerProps } from '../../file-picker';
export type DocumentDownloadProps = Pick<FilePickerProps, 'data-testid' | 'filename' | 'isDeleting' | 'showDeleteButton' | 'onDownload' | 'onDelete'>;
/** Renders a downloadable document button with an optional delete button */
export declare const DocumentDownload: ({ "data-testid": dataTestId, filename, showDeleteButton, isDeleting, onDownload, onDelete, }: DocumentDownloadProps) => JSX.Element;
