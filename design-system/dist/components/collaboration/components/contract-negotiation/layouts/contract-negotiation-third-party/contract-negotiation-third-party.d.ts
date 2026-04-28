import { ReactElement } from 'react';
import { IContractNegotiation } from '../../../../interfaces';
export type ContractNegotiationThirdPartyProps = IContractNegotiation & {
    'data-testid'?: string;
};
/**
 * Component to render all the logic related to the contract negotiation
 * from the point of view of the third party.
 */
export declare const ContractNegotiationThirdParty: ({ "data-testid": dataTestId, allowedFileExtensions, collaborationDetails, collaborationResponsible, collaborationSubtasks, currentThirdParty, customerName, enabledTabs, isDocumentPreviewLoading, isLoading, isSendMessageLoading, isActivitiesLoading, messages, selectedDocumentPreviewUrl, selectedDocumentAttachmentUrl, selectedDocumentVersions, stakeholders, collaborationActivities, headerAction, loadMoreActivities, loadMoreMessages, onApproveDocument, onChangeSelectedDocument, onChangeSelectedDocumentVersion, onDownloadDocument, onNewDocumentVersion, onSendMessage, onTriggerActivityTab, onTriggerHistoryTab, onWriteNewDocumentVersion, }: ContractNegotiationThirdPartyProps) => ReactElement;
