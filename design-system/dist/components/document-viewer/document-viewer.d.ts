import { ReactElement } from 'react';
import { DocumentViewerType } from '@webdoxclm/document-viewer-front';
export interface DocumentViewerProps {
    'data-testid'?: string;
    /**
     * it contains the preview url of the document to be displayed in an iframe
     *
     * @deprecated instead use attachmentUrl
     */
    url?: string;
    isLoading?: boolean;
    /**
     * it contains the file url of the document to be displayed
     * it is used to be consumed from the new document viewer replacing the old documentUrl
     */
    attachmentUrl?: string;
    kind?: DocumentViewerType;
    pageNumber?: number;
}
/** Component that use a iframe to render the document */
export declare const DocumentViewer: ({ "data-testid": dataTestId, url, isLoading, kind, pageNumber, attachmentUrl, }: DocumentViewerProps) => ReactElement;
