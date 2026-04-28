import { ReactElement } from 'react';
import { DocumentApprovalFormFields } from './document-approval-form.logic';
import { IContractNegotiationContext } from '../../../interfaces';
import { IUseDocumentLastModificationText } from '../hooks/use-document-last-modification-text.hook';
export type DocumentApprovalDrawerProps = Pick<IContractNegotiationContext, 'isLoading'> & {
    'data-testid': string;
    document: IContractNegotiationContext['selectedDocument']['document'];
    /** Text that displays the date and the user that made the last modification to the document. */
    documentLastModificationText: IUseDocumentLastModificationText['lastModificationText'];
    isOpen: boolean;
    onClose(): void;
    onSubmit(values: DocumentApprovalFormFields): void;
};
/**
 * Drawer to display the document approval form with the information
 * of the document to be approved.
 */
export declare const DocumentApprovalDrawer: ({ "data-testid": dataTestId, document, isOpen, isLoading, documentLastModificationText, onClose, onSubmit, }: DocumentApprovalDrawerProps) => ReactElement;
