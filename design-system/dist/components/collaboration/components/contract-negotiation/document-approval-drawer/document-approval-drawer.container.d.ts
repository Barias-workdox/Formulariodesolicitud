import { ReactElement } from 'react';
import { DocumentApprovalFormFields } from './document-approval-form.logic';
import { IContractNegotiationContext } from '../../../interfaces';
import { IUseDocumentLastModificationText } from '../hooks/use-document-last-modification-text.hook';
export type DocumentApprovalDrawerContainerProps = Pick<IContractNegotiationContext, 'isLoading'> & {
    'data-testid': string;
    document: IContractNegotiationContext['selectedDocument']['document'];
    documentLastModificationText: IUseDocumentLastModificationText['lastModificationText'];
    isOpen: boolean;
    onClose(): void;
    onSubmit(values: DocumentApprovalFormFields): void;
};
/**
 * Document Approval Drawer Container. Will have the form layer
 * wrapper only.
 */
export declare const DocumentApprovalDrawerContainer: ({ "data-testid": dataTestId, document, documentLastModificationText, isLoading, isOpen, onClose, onSubmit, }: DocumentApprovalDrawerContainerProps) => ReactElement;
