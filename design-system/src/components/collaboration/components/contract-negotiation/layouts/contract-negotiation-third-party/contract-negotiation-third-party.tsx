import type { ReactElement } from 'react';

import { ALLOWED_FILE_EXTENSIONS } from '@components/collaboration/constants';

import { CollaborationLayout } from '../../../../layouts/collaboration-layout';
import { ContractNegotiationProvider } from '../../../../logic/contexts';
import { BannerCollaboration } from '../../banner-collaboration';
import { CollaborationHeader } from '../../collaboration-header';
import { ContractNegotiationBodyContainer } from '../../contract-negotiation-body';
import { useContractNegotiationTabs } from '../../hooks/use-contract-negotiation-tabs.hook';
import { LeftTabs } from '../../left-tabs';
import { RightTabs } from '../../right-tabs';

import type { ContractNegotiationTab, IContractNegotiation } from '../../../../interfaces';

export type ContractNegotiationThirdPartyProps = IContractNegotiation & {
  'data-testid'?: string;
};

const DEFAULT_TABS: ContractNegotiationTab[] = ['activity', 'comments', 'documents', 'history'];

/**
 * Component to render all the logic related to the contract negotiation
 * from the point of view of the third party.
 */
export const ContractNegotiationThirdParty = ({
  'data-testid': dataTestId = 'contract-negotiation-third-party',
  allowedFileExtensions = ALLOWED_FILE_EXTENSIONS,
  collaborationDetails,
  collaborationResponsible,
  collaborationSubtasks = [],
  currentThirdParty,
  customerName,
  enabledTabs = DEFAULT_TABS,
  isDocumentPreviewLoading = false,
  isLoading = false,
  isSendMessageLoading = false,
  isActivitiesLoading = false,
  messages,
  selectedDocumentPreviewUrl,
  selectedDocumentAttachmentUrl,
  selectedDocumentVersions,
  stakeholders,
  collaborationActivities,
  headerAction,
  loadMoreActivities,
  loadMoreMessages,
  onApproveDocument,
  onChangeSelectedDocument,
  onChangeSelectedDocumentVersion,
  onDownloadDocument,
  onNewDocumentVersion,
  onSendMessage,
  onTriggerActivityTab,
  onTriggerHistoryTab,
  onWriteNewDocumentVersion,
}: ContractNegotiationThirdPartyProps): ReactElement => {
  const {
    isLeftTabsOpen,
    isRightTabsOpen,
    handleCloseLeftTabs,
    handleCloseRightTabs,
    handleOpenLeftTabs,
    handleOpenRightTabs,
  } = useContractNegotiationTabs();

  const { name: collaborationName, status, finishedAt, cancelledAt } = collaborationDetails;

  /**
   * The collaboration banner is only going to be visible if the status of the collaboration
   * is finished or cancelled.
   */
  const showBanner = status !== 'active';

  return (
    <ContractNegotiationProvider
      allowedFileExtensions={allowedFileExtensions}
      collaborationDetails={collaborationDetails}
      collaborationResponsible={collaborationResponsible}
      collaborationSubtasks={collaborationSubtasks}
      currentThirdParty={currentThirdParty}
      isDocumentPreviewLoading={isDocumentPreviewLoading}
      isLoading={isLoading}
      isSendMessageLoading={isSendMessageLoading}
      isActivitiesLoading={isActivitiesLoading}
      messages={messages}
      selectedDocumentPreviewUrl={selectedDocumentPreviewUrl}
      selectedDocumentAttachmentUrl={selectedDocumentAttachmentUrl}
      selectedDocumentVersions={selectedDocumentVersions}
      stakeholders={stakeholders}
      collaborationActivities={collaborationActivities}
      loadMoreActivities={loadMoreActivities}
      loadMoreMessages={loadMoreMessages}
      onApproveDocument={onApproveDocument}
      onChangeSelectedDocument={onChangeSelectedDocument}
      onChangeSelectedDocumentVersion={onChangeSelectedDocumentVersion}
      onDownloadDocument={onDownloadDocument}
      onNewDocumentVersion={onNewDocumentVersion}
      onSendMessage={onSendMessage}
      onTriggerActivityTab={onTriggerActivityTab}
      onTriggerHistoryTab={onTriggerHistoryTab}
      onWriteNewDocumentVersion={onWriteNewDocumentVersion}
    >
      <CollaborationLayout
        showBanner={showBanner}
        Header={
          <CollaborationHeader
            collaborationName={collaborationName}
            customerName={customerName}
            status={status}
            action={headerAction}
          />
        }
        Banner={
          <BannerCollaboration
            status={status}
            finishedAt={finishedAt}
            cancelledAt={cancelledAt}
          />
        }
      >
        <LeftTabs
          data-testid={`${dataTestId}__left-tabs`}
          enabledTabs={enabledTabs}
          showPanels={isLeftTabsOpen}
          showTabList={!isLeftTabsOpen}
          onClose={handleCloseLeftTabs}
          onOpen={handleOpenLeftTabs}
        />

        <ContractNegotiationBodyContainer
          data-testid={`${dataTestId}__contract-negotiation-body`}
        />

        <RightTabs
          data-testid={`${dataTestId}__right-tabs`}
          enabledTabs={enabledTabs}
          showPanels={isRightTabsOpen}
          onClose={handleCloseRightTabs}
          onOpen={handleOpenRightTabs}
        />
      </CollaborationLayout>
    </ContractNegotiationProvider>
  );
};
