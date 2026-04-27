import { useState } from 'react';
import type { ReactElement } from 'react';

import { ALLOWED_FILE_EXTENSIONS } from '@components/collaboration/constants';

import { CancelModalContainer, FinalizeDrawerContainer } from '../../../../containers';
import { CollaborationLayout } from '../../../../layouts/collaboration-layout';
import { ContractNegotiationProvider } from '../../../../logic/contexts';
import { BannerCollaboration } from '../../banner-collaboration';
import { CollaborationHeader, ResponsibleHeaderOptions } from '../../collaboration-header';
import { ContractNegotiationBodyContainer } from '../../contract-negotiation-body';
import { useContractNegotiationTabs } from '../../hooks/use-contract-negotiation-tabs.hook';
import { LeftTabs } from '../../left-tabs';
import { RightTabs } from '../../right-tabs';

import type {
  ContractNegotiationTab,
  IContractNegotiation,
  IContractNegotiationResponsible,
} from '../../../../interfaces';

export type ContractNegotiationResponsibleProps = IContractNegotiation &
  IContractNegotiationResponsible & {
    'data-testid'?: string;
  };

const DEFAULT_TABS: ContractNegotiationTab[] = ['activity', 'comments', 'documents', 'history'];

/**
 * Component to render all the logic related to the contract negotiation
 * from the point of view of the responsible.
 */
export const ContractNegotiationResponsible = ({
  'data-testid': dataTestId = 'contract-negotiation-third-party',
  allowedFileExtensions = ALLOWED_FILE_EXTENSIONS,
  collaborationActivities,
  collaborationDetails,
  collaborationResponsible,
  collaborationSubtasks = [],
  currentThirdParty,
  customerName,
  enabledTabs = DEFAULT_TABS,
  isActivitiesLoading = false,
  isDocumentPreviewLoading = false,
  isLoading = false,
  isSendMessageLoading = false,
  messages,
  selectedDocumentPreviewUrl,
  selectedDocumentAttachmentUrl,
  selectedDocumentVersions,
  stakeholders,
  headerAction,
  loadMoreActivities,
  loadMoreMessages,
  onApproveDocument,
  onChangeSelectedDocument,
  onChangeSelectedDocumentVersion,
  onDownloadDocument,
  onNewDocumentVersion,
  onSendMessage,
  onFinalize,
  onCancel,
  onTriggerActivityTab,
  onTriggerHistoryTab,
  onWriteNewDocumentVersion,
}: ContractNegotiationResponsibleProps): ReactElement => {
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

  /**
   * If the status of the collaboration is not `active`,
   * then the collaboration options are not enabled
   */
  const areHeaderOptionsDisabled = status !== 'active';

  const [isFinalizeDrawerOpen, setIsFinalizeDrawerOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);

  return (
    <ContractNegotiationProvider
      allowedFileExtensions={allowedFileExtensions}
      collaborationActivities={collaborationActivities}
      collaborationDetails={collaborationDetails}
      collaborationResponsible={collaborationResponsible}
      collaborationSubtasks={collaborationSubtasks}
      currentThirdParty={currentThirdParty}
      isActivitiesLoading={isActivitiesLoading}
      isDocumentPreviewLoading={isDocumentPreviewLoading}
      isLoading={isLoading}
      isSendMessageLoading={isSendMessageLoading}
      messages={messages}
      selectedDocumentPreviewUrl={selectedDocumentPreviewUrl}
      selectedDocumentAttachmentUrl={selectedDocumentAttachmentUrl}
      selectedDocumentVersions={selectedDocumentVersions}
      stakeholders={stakeholders}
      loadMoreActivities={loadMoreActivities}
      loadMoreMessages={loadMoreMessages}
      onApproveDocument={onApproveDocument}
      onChangeSelectedDocument={onChangeSelectedDocument}
      onChangeSelectedDocumentVersion={onChangeSelectedDocumentVersion}
      onDownloadDocument={onDownloadDocument}
      onNewDocumentVersion={onNewDocumentVersion}
      onSendMessage={onSendMessage}
      onFinalize={onFinalize}
      onCancel={onCancel}
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
            options={
              areHeaderOptionsDisabled === false ? (
                <ResponsibleHeaderOptions
                  data-testid={`${dataTestId}__header-options`}
                  onFinalize={(): void => setIsFinalizeDrawerOpen(true)}
                  onCancel={(): void => setIsCancelModalOpen(true)}
                />
              ) : (
                <></>
              )
            }
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

        <FinalizeDrawerContainer
          data-testid={`${dataTestId}__finalize`}
          isOpen={isFinalizeDrawerOpen}
          onClose={(): void => setIsFinalizeDrawerOpen(false)}
        />

        <CancelModalContainer
          data-testid={`${dataTestId}__cancel`}
          isOpen={isCancelModalOpen}
          onClose={(): void => setIsCancelModalOpen(false)}
        />
      </CollaborationLayout>
    </ContractNegotiationProvider>
  );
};
