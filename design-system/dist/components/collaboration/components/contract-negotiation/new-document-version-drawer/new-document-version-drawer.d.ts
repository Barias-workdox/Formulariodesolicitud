import { ReactElement } from 'react';
import { NewDocumentVersionFormFields } from './new-document-version-drawer.logic';
import { FileType, FileUploaderProps } from '../../../../file-uploader';
export interface NewDocumentVersionDrawerProps {
    'data-testid': string;
    selectedFiles: FileType[];
    isLoading: boolean;
    isOpen: boolean;
    handleSelectFile: FileUploaderProps['onDrop'];
    onClose(): void;
    onSubmit(values: NewDocumentVersionFormFields): void;
}
/**
 * Component that is responsible for rendering a drawer that allows users to upload
 * a new version of a negotiable document.
 */
export declare const NewDocumentVersionDrawer: ({ "data-testid": dataTestId, selectedFiles, isLoading, isOpen, handleSelectFile, onClose, onSubmit, }: NewDocumentVersionDrawerProps) => ReactElement;
