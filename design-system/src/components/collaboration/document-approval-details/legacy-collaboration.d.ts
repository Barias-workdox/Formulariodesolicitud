import type { FileType } from '../../file-icon';

export type CollaborationDocumentStatus = 'pending' | 'rejected' | 'approved';

export type CollaborationInvitationStatus = 'pending' | 'canceled' | 'active';

export interface Collaborator {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

export interface CollaborationDocument {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
  reasonRejection: string;
  fileExt: FileType;
  status: CollaborationDocumentStatus;
}

export interface CollaborationInvitation {
  id: number;
  status: CollaborationInvitationStatus;
  collaborator: Collaborator;
  documents: CollaborationDocument[];
}
