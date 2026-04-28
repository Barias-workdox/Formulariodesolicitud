import { ReactElement } from 'react';
import { CollaborationResource, IContractNegotiationContext } from '../../../../../interfaces';
type DocumentId = IContractNegotiationContext['selectedDocument']['document']['id'];
export type DocumentsListProps = Pick<IContractNegotiationContext, 'isLoading'> & {
    dataTestId?: string;
    listHeadingText: string;
    documents: CollaborationResource[];
    selectedDocumentId: DocumentId;
    onClick(id: DocumentId): void;
};
/**
 * DocumentsList is a component that renders a heading and a list of documents.
 * Each document in the list is clickable, allowing users to indicate their selection.
 */
export declare const DocumentsList: ({ dataTestId, listHeadingText, documents, selectedDocumentId, isLoading, onClick, }: DocumentsListProps) => ReactElement;
export {};
