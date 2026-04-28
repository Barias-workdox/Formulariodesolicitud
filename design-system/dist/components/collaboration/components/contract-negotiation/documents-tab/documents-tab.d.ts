import { ReactElement } from 'react';
import { IContractNegotiationContext } from '../../../interfaces';
type DocumentId = IContractNegotiationContext['selectedDocument']['document']['id'];
export type DocumentsTabProps = Pick<IContractNegotiationContext, 'negotiableDocuments' | 'readOnlyDocuments' | 'isLoading'> & {
    'data-testid'?: string;
    selectedDocumentId: DocumentId;
    onClick(id: DocumentId): void;
    onClose(): void;
};
/**
 * DocumentsTab is a component that renders two document table: negotiable document table
 * and background document table.
 */
export declare const DocumentsTab: ({ "data-testid": dataTestId, isLoading, negotiableDocuments, readOnlyDocuments, selectedDocumentId, onClick, onClose, }: DocumentsTabProps) => ReactElement;
export {};
