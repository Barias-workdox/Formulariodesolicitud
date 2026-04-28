import { ReactElement } from 'react';
import { IContractNegotiation, IContractNegotiationResponsible } from '../../../../interfaces';
export type ContractNegotiationResponsibleProps = IContractNegotiation & IContractNegotiationResponsible & {
    'data-testid'?: string;
};
/**
 * Component to render all the logic related to the contract negotiation
 * from the point of view of the responsible.
 */
export declare const ContractNegotiationResponsible: ({ "data-testid": dataTestId, allowedFileExtensions, collaborationActivities, collaborationDetails, collaborationResponsible, collaborationSubtasks, currentThirdParty, customerName, enabledTabs, isActivitiesLoading, isDocumentPreviewLoading, isLoading, isSendMessageLoading, messages, selectedDocumentPreviewUrl, selectedDocumentAttachmentUrl, selectedDocumentVersions, stakeholders, headerAction, loadMoreActivities, loadMoreMessages, onApproveDocument, onChangeSelectedDocument, onChangeSelectedDocumentVersion, onDownloadDocument, onNewDocumentVersion, onSendMessage, onFinalize, onCancel, onTriggerActivityTab, onTriggerHistoryTab, onWriteNewDocumentVersion, }: ContractNegotiationResponsibleProps) => ReactElement;
