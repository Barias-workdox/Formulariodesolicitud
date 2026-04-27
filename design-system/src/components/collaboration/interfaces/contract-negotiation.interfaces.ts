import type { ReactNode } from 'react';

import type {
  CollaborationActivity,
  CollaborationDetails,
  CollaborationDocument,
  CollaborationResource,
  CollaborationResourceStatus,
  CollaborationSubtask,
  CollaborationUser,
  ContractNegotiationTab,
  DocumentVersion,
  ThirdParty,
} from './collaboration.interfaces';
import type {
  CancelCollaborationFormFields,
  FinalizeNegotiationFormFields,
} from './contract-negotiation-forms.interfaces';
import type { NewDocumentVersionFormFields } from '../components/contract-negotiation/new-document-version-drawer/new-document-version-drawer.logic';
import type { ActivityTimelineProps } from '@components/activity-timeline';
import type { MessageType, MessagesProps, MessagesUser } from '@components/messages';

/** Type of the possible statues used on information of a document */
export type CollaborationResourceStatusInfo = Extract<
  CollaborationResourceStatus,
  'approved' | 'pending'
>;

/**
 * Type of a function that approves a collaboration resource document
 *
 * @param document - The collaboration document to be approved.
 * @param payload - Additional data including a comment for the approval.
 * @param callback - Callback function to execute after the document is approved to close the drawer.
 */
export type OnApproveDocumentType = (
  document: CollaborationResource,
  payload: { comment: string },
  callback: () => void,
) => void;

/**
 * Type of a function that handles the change of the selected document
 *
 * @param document - Collaboration document that is being selected
 */
export type OnChangeSelectedDocumentType = (document: CollaborationResource) => void;

/**
 * Type of a function that handles the selection of the document version being displayed
 *
 * @param documentVersion - Document version
 */
export type OnChangeSelectedDocumentVersionType = (documentVersion: DocumentVersion) => void;

/**
 * Type of a function that downloads the document that is rendered
 *
 * @param document - Collaboration document that is being rendered
 */
export type OnDownloadDocumentType = (document: CollaborationResource) => void;

/**
 * Type of a function that triggers the webdav interaction
 *
 * @param document - Collaboration document that is going to be updated
 */
export type OnWriteNewDocumentVersionType = (document: CollaborationResource) => void;

/**
 * Type of a function responsible for the upload a new document version
 *
 * @param document - The collaboration document to be updated.
 * @param payload - Form data including the new file and a comment for history.
 * @param callback - Callback function to execute after the document is updated.
 */
export type OnNewDocumentVersionType = (
  document: CollaborationResource,
  payload: Pick<NewDocumentVersionFormFields, 'comment' | 'document'>,
  callback: () => void,
) => void;

/**
 * Type of a function that cancels the collaboration
 *
 * @param payload - Form data with the message field for a cancelation process
 * @param callback - Callback function to execute after the collaboration is canceled.
 */
export type OnCancelType = (payload: CancelCollaborationFormFields, callback: () => void) => void;

/**
 * Type of a function that finalizes the collaboration
 *
 * @param payload - Form data including the selected documents that are going to be sended to the workflow
 * @param callback - Callback function to execute after the collaboration is finalized.
 */
export type OnFinalizeType = (payload: FinalizeNegotiationFormFields, callback: () => void) => void;

/** Allowed file extensions metadata */
export type AllowedFileExtensions = {
  extensions: string[];
  names: string;
};

export type IContractNegotiation = {
  allowedFileExtensions: AllowedFileExtensions;
  /** The basic details that defines a collaboration */
  collaborationDetails: CollaborationDetails;
  /** The user who created the collaboration. */
  collaborationResponsible: CollaborationUser;
  /**
   * All the collaboration subtasks to analyze every documents that
   * every third party has to approve.
   */
  collaborationSubtasks: CollaborationSubtask[];
  /** It is necessary to identify which subtasks belong to the third party. */
  currentThirdParty: ThirdParty;
  customerName: string;
  /** To indicate which tabs are enabled. */
  enabledTabs?: ContractNegotiationTab[];
  /** To indicate when the document preview is loading */
  isDocumentPreviewLoading?: boolean;
  isLoading?: boolean;
  /** To indicate when a message is being sent. */
  isSendMessageLoading?: boolean;
  /** To indicate when the activities are loading. */
  isActivitiesLoading?: boolean;
  /** All the collaboration messages. */
  messages: MessageType[];
  /**
   * Url to preview the selected document.
   *
   * @deprecated instead use selectedDocumentAttachmentUrl.
   */
  selectedDocumentPreviewUrl?: string;
  /** Url with the document file to preview */
  selectedDocumentAttachmentUrl?: string;
  /** All the selected document versions. */
  selectedDocumentVersions?: DocumentVersion[];
  /** All users related to the collaboration and who can be mentioned in the comments. */
  stakeholders: MessagesUser[];
  /** All the activities created in the collaboration. */
  collaborationActivities: CollaborationActivity[];
  /** Custom React element that is rendered as an action (for example a back button) on the header */
  headerAction?: ReactNode;
  /** To execute when it's necessary to load more activities */
  loadMoreActivities: ActivityTimelineProps['onPageEnd'];
  /** To execute when it's necessary to load more messages */
  loadMoreMessages: MessagesProps['onPageEnd'];
  /** Approve a collaboration resource document */
  onApproveDocument: OnApproveDocumentType;
  /** To execute when the selected document change. */
  onChangeSelectedDocument: OnChangeSelectedDocumentType;
  /** To execute when the selected document version change */
  onChangeSelectedDocumentVersion: OnChangeSelectedDocumentVersionType;
  /** Downloads the current document */
  onDownloadDocument: OnDownloadDocumentType;
  /** Upload a new document version */
  onNewDocumentVersion: OnNewDocumentVersionType;
  /** To execute when a message is created */
  onSendMessage: MessagesProps['onCreate'];
  /** Triggers the logic for a new webdav document edition */
  onWriteNewDocumentVersion: OnWriteNewDocumentVersionType;
  /** Callback that triggers when opening the activity tab */
  onTriggerActivityTab(): void;
  /** Callback that triggers when opening the history tab */
  onTriggerHistoryTab(): void;
};

export type IContractNegotiationResponsible = {
  /** Cancels the collaboration */
  onCancel: OnCancelType;
  /** Finalizes the collaboration */
  onFinalize: OnFinalizeType;
};

/** Custom type for a third party with data required in activity tab */
export type CollaborationActivityDocumentThirdParty = {
  id: CollaborationUser['id'];
  name: string;
  status: CollaborationResource['status'];
  approvedAt: CollaborationResource['approvedAt'];
};

/** Custom type of a document with data required in activity tab */
export type CollaborationActivityDocument = Pick<
  CollaborationDocument,
  'id' | 'name' | 'fileExt' | 'updatedAt' | 'officeDocumentVersion'
> & {
  /** This property that is useful in the `Select` of the documents */
  label: CollaborationDocument['name'];
  /** Third parties involved in the document */
  thirdParties: CollaborationActivityDocumentThirdParty[];
};

export type IContractNegotiationContext = Pick<
  IContractNegotiation,
  | 'allowedFileExtensions'
  | 'collaborationDetails'
  | 'collaborationResponsible'
  | 'currentThirdParty'
  | 'isDocumentPreviewLoading'
  | 'isLoading'
  | 'isSendMessageLoading'
  | 'messages'
  | 'selectedDocumentPreviewUrl'
  | 'selectedDocumentAttachmentUrl'
  | 'selectedDocumentVersions'
  | 'stakeholders'
  | 'loadMoreMessages'
  | 'onApproveDocument'
  | 'onDownloadDocument'
  | 'onNewDocumentVersion'
  | 'onSendMessage'
  | 'onTriggerActivityTab'
  | 'onTriggerHistoryTab'
  | 'loadMoreActivities'
  | 'collaborationActivities'
  | 'isActivitiesLoading'
  | 'onWriteNewDocumentVersion'
> & {
  /** Documents with data required in the activity tab */
  activityDocuments: CollaborationActivityDocument[];
  isApprovalDisabled: boolean;
  /** Collaboration documents that can be approved and versioned. */
  negotiableDocuments: CollaborationResource[];
  /** Collaboration documents that cannot be approved or versioned, can only be read. */
  readOnlyDocuments: CollaborationResource[];
  selectedDocument?: CollaborationResource;
  selectedVersion?: DocumentVersion;
  onFinalize?: IContractNegotiationResponsible['onFinalize'];
  onCancel?: IContractNegotiationResponsible['onCancel'];
  updateSelectedDocument(documentId: CollaborationDocument['id']): void;
  updateSelectedDocumentVersion(documentVersionUuid: DocumentVersion['uuid']): void;
};
