import { DocumentViewerType } from '@webdoxclm/document-viewer-front';
import { ModalProps } from 'baseui/modal';
export interface DocumentViewerModalProps extends ModalProps {
    dataTestId?: string;
    documentName: string;
    /**
     * it contains the preview url of the document to be displayed in an iframe
     *
     * @deprecated instead use attachmentUrl
     */
    documentUrl?: string;
    /**
     * it contains the file url of the document to be displayed
     * it is used to be consumed from the new document viewer replacing the old documentUrl
     */
    attachmentUrl?: string;
    isLoading: boolean;
    /**
     * Document viewer props
     */
    kind?: DocumentViewerType;
    pageNumber?: number;
}
/**
 * Stylized full-screen modal used to view a document
 *
 * The header shows the name of the document and the back and close buttons
 */
export declare const DocumentViewerModal: ({ dataTestId, isOpen, onClose, documentName, documentUrl, attachmentUrl, isLoading, pageNumber, kind, }: DocumentViewerModalProps) => JSX.Element;
