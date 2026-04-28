import { AllowedFileExtensions, CancelCollaborationFormFields, CollaborationResourceStatus, FinalizeNegotiationFormFields } from '../interfaces';
export declare const DISABLED_RESOURCE_STATUSES: CollaborationResourceStatus[];
export declare const ACCEPTED_EXTENSIONS: string[];
export declare const ACCEPTED_EXTENSIONS_NAMES = "Word, Excel, Powerpoint";
export declare const ALLOWED_FILE_EXTENSIONS: AllowedFileExtensions;
/**
 * FORM DEFAULT VALUES
 */
export declare const FINALIZE_FORM_DEFAULT_VALUES: FinalizeNegotiationFormFields;
export declare const CANCEL_COLLABORATION_FORM_DEFAULT_VALUES: CancelCollaborationFormFields;
export declare const CANCEL_ACTIVITY = "canceled";
export declare const COLLABORATION_APPROVALS_RESTART = "approvals_restart";
export declare const COLLABORATION_COMMENT_ACTIVITY = "new_comment";
export declare const COLLABORATION_DOCUMENT_VERSION_UPLOAD = "version_upload";
export declare const CREATE_ACTIVITY = "collaboration.create";
export declare const DELETED_DOCUMENTS = "deleted_documents";
export declare const DELETED_THIRD_PARTIES = "deleted_third_parties";
export declare const DOCUMENT_APPROVED_ACTIVITY = "contract_negotiation.document_approved";
export declare const DOWNLOAD_DOCUMENT_ACTIVITY = "document_download";
export declare const FINISH_ACTIVITY = "finished";
export declare const NEW_DOCUMENTS = "new_documents";
export declare const NEW_THIRD_PARTIES = "new_third_parties";
export declare const VIEWED_DOCUMENT_ACTIVITY = "document_view";
export declare const DOCUMENT_UPDATED_LOCALLY = "document_versioned";
export declare const ALL_ACTIVITIES_KEYS: string[];
