import type { FileType } from '@components/file-icon';

export type CollaborationResourceStatus = 'pending' | 'rejected' | 'approved';

export type CollaborationStatus = 'active' | 'canceled' | 'finished';

export type CollaborationKind = 'approve_documents' | 'upload_documents' | 'contract_negotiation';

export type CollaborationSubtaskStatus = 'pending' | 'canceled' | 'active' | 'finished';

export type CollaborationTaskOption = {
  id: number;
  key: string;
  label?: string;
};

export type CollaborationFileExtension = {
  contentType: string[];
  id: number;
  name?: string;
  label?: string;
};

/** To indicate the tabs used in contract negotiation. */
export type ContractNegotiationTab = 'documents' | 'activity' | 'comments' | 'history';

/** User information used in the context of collaboration */
export interface CollaborationUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export interface ThirdParty extends CollaborationUser {
  phoneNumber?: string;
}

export interface DocumentVersion {
  id: number;
  documentId: number;
  versionNumber: number;
  user: CollaborationUser;
  uuid: string;
  updatedAt: string;
}

export interface CollaborationDocument {
  id: number;
  uuid?: string;
  name: string;
  fileExt: FileType;
  url?: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  stepId?: number;
  /**
   * Indicates when the document can be approved or versioned.
   */
  negotiable?: boolean;
  officeDocumentVersion?: DocumentVersion;
}

export interface CollaborationResource {
  id?: number;
  document: CollaborationDocument;
  status?: CollaborationResourceStatus;
  rejectionReason?: string;
  approvedAt?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CollaborationSubtask {
  id: number;
  status?: CollaborationSubtaskStatus;
  thirdParty: ThirdParty;
  resources: CollaborationResource[];
  createdAt: string;
  updatedAt: string;
  documentFormats?: CollaborationFileExtension[];
  required?: boolean;
}

export interface CollaborationTask {
  id: number;
  kind: CollaborationKind;
  type?: CollaborationTaskOption;
  category?: CollaborationTaskOption;
  reason?: string;
  status?: CollaborationStatus;
  subtasks: CollaborationSubtask[];
  description?: string;
  documentFormats?: CollaborationFileExtension[];
  required?: boolean;
}

export interface CollaborationDetails {
  name: string;
  status: CollaborationStatus;
  createdAt: string;
  updatedAt: string;
  finishedAt: string | null;
  cancelledAt: string | null;
  /** The message sent it when the collaboration is created. */
  message?: string;
}

export interface Collaboration {
  id: number;
  type: string;
  status?: CollaborationStatus;
  tasks: CollaborationTask[];
}

export interface CollaborationActivityParameters {
  comment?: string;
  documentVersion?: number;
  documentName?: string;
  thirdParties?: Pick<ThirdParty, 'id' | 'firstName' | 'lastName' | 'email'>[];
  documents?: Pick<CollaborationDocument, 'id' | 'name' | 'fileExt' | 'negotiable'>[];
}

export interface CollaborationActivity {
  id: number;
  key: string;
  createdAt: string;
  /** User who created the activity. */
  owner?: CollaborationUser;
  /** Extra data included in an activity. */
  parameters?: CollaborationActivityParameters;
  collaboration: CollaborationDetails;
}
