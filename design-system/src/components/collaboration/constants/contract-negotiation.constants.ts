import type {
  AllowedFileExtensions,
  CancelCollaborationFormFields,
  CollaborationResourceStatus,
  FinalizeNegotiationFormFields,
} from '../interfaces';

export const DISABLED_RESOURCE_STATUSES: CollaborationResourceStatus[] = ['approved'];

export const ACCEPTED_EXTENSIONS = ['.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx'];

export const ACCEPTED_EXTENSIONS_NAMES = 'Word, Excel, Powerpoint';

export const ALLOWED_FILE_EXTENSIONS: AllowedFileExtensions = {
  extensions: ACCEPTED_EXTENSIONS,
  names: ACCEPTED_EXTENSIONS_NAMES,
};

/**
 * FORM DEFAULT VALUES
 */
export const FINALIZE_FORM_DEFAULT_VALUES: FinalizeNegotiationFormFields = {
  documents: [],
};

export const CANCEL_COLLABORATION_FORM_DEFAULT_VALUES: CancelCollaborationFormFields = {
  message: '',
};

// All contract negotiation activities keys
export const CANCEL_ACTIVITY = 'canceled';

export const COLLABORATION_APPROVALS_RESTART = 'approvals_restart';

export const COLLABORATION_COMMENT_ACTIVITY = 'new_comment';

export const COLLABORATION_DOCUMENT_VERSION_UPLOAD = 'version_upload';

export const CREATE_ACTIVITY = 'collaboration.create';

export const DELETED_DOCUMENTS = 'deleted_documents';

export const DELETED_THIRD_PARTIES = 'deleted_third_parties';

export const DOCUMENT_APPROVED_ACTIVITY = 'contract_negotiation.document_approved';

export const DOWNLOAD_DOCUMENT_ACTIVITY = 'document_download';

export const FINISH_ACTIVITY = 'finished';

export const NEW_DOCUMENTS = 'new_documents';

export const NEW_THIRD_PARTIES = 'new_third_parties';

export const VIEWED_DOCUMENT_ACTIVITY = 'document_view';

export const DOCUMENT_UPDATED_LOCALLY = 'document_versioned';

export const ALL_ACTIVITIES_KEYS = [
  CANCEL_ACTIVITY,
  COLLABORATION_APPROVALS_RESTART,
  COLLABORATION_COMMENT_ACTIVITY,
  COLLABORATION_DOCUMENT_VERSION_UPLOAD,
  CREATE_ACTIVITY,
  DELETED_DOCUMENTS,
  DELETED_THIRD_PARTIES,
  DOCUMENT_APPROVED_ACTIVITY,
  DOWNLOAD_DOCUMENT_ACTIVITY,
  FINISH_ACTIVITY,
  NEW_DOCUMENTS,
  NEW_THIRD_PARTIES,
  VIEWED_DOCUMENT_ACTIVITY,
  DOCUMENT_UPDATED_LOCALLY,
];
