import { CollaborationDocument, DocumentVersion } from '../../../interfaces';
export interface IUseDocumentLastModificationText {
    lastModificationText: string;
}
export interface IUseDocumentLastModificationTextProps {
    document: Pick<CollaborationDocument, 'updatedAt' | 'negotiable' | 'officeDocumentVersion'>;
    selectedDocumentVersion: DocumentVersion;
}
/**
 * A custom hook to generate a text representation of the last modification of a collaboration document.
 * This hook calculates the "last modified" text for a given document and user.
 *
 * If the document is not negotiable, the collaboration responsible user (user who created the collaboration)
 * is used to represent who uploaded the document.
 *
 * @returns An object containing the last modification text as a string.
 *
 * @remarks
 * This hook should be used within the context of the `ContractNegotiationContext` to ensure correct behavior.
 */
export declare const useDocumentLastModificationText: ({ document, selectedDocumentVersion, }: IUseDocumentLastModificationTextProps) => IUseDocumentLastModificationText;
