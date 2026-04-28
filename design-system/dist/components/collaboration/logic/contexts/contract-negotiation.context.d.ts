import { ReactElement, ReactNode } from 'react';
import { IContractNegotiation, IContractNegotiationContext, IContractNegotiationResponsible } from '../../interfaces';
export type ContractNegotiationProviderProps = Omit<IContractNegotiation, 'customerName' | 'enabledTabs'> & {
    children: ReactNode;
    onFinalize?: IContractNegotiationResponsible['onFinalize'];
    onCancel?: IContractNegotiationResponsible['onCancel'];
};
export declare const ContractNegotiationContext: import('react').Context<IContractNegotiationContext>;
/**
 * React context to reuse some globally required variables in the Contract Negotiation component and
 * avoid too much prop drilling
 */
export declare const ContractNegotiationProvider: ({ children, allowedFileExtensions, collaborationActivities, collaborationDetails, collaborationResponsible, collaborationSubtasks, currentThirdParty, isActivitiesLoading, isDocumentPreviewLoading, isLoading, isSendMessageLoading, messages, selectedDocumentPreviewUrl, selectedDocumentAttachmentUrl, selectedDocumentVersions, stakeholders, loadMoreActivities, loadMoreMessages, onApproveDocument, onChangeSelectedDocument, onChangeSelectedDocumentVersion, onDownloadDocument, onNewDocumentVersion, onSendMessage, onFinalize, onCancel, onTriggerActivityTab, onTriggerHistoryTab, onWriteNewDocumentVersion, }: ContractNegotiationProviderProps) => ReactElement;
/**
 * This hook makes it easy to obtain the values from the contract negotiation context
 */
export declare const useContractNegotiationContext: () => IContractNegotiationContext;
