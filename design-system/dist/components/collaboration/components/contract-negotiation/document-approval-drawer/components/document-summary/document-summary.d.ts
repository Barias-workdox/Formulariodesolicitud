import { ReactElement } from 'react';
import { IContractNegotiationContext } from '../../../../../interfaces';
import { IUseDocumentLastModificationText } from '../../../hooks/use-document-last-modification-text.hook';
export interface DocumentSummaryProps {
    document: IContractNegotiationContext['selectedDocument']['document'];
    documentLastModificationText: IUseDocumentLastModificationText['lastModificationText'];
}
/**
 * Component that displays a summary of a collaboration document,
 * including its name, file type, version, and last modification information.
 */
export declare const DocumentSummary: ({ document: { name: documentName, fileExt: documentFileExt, officeDocumentVersion }, documentLastModificationText, }: DocumentSummaryProps) => ReactElement;
