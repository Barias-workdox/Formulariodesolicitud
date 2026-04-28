const d = ["approved"], _ = [".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx"], E = "Word, Excel, Powerpoint", S = {
  extensions: _,
  names: E
}, R = {
  documents: []
}, a = {
  message: ""
}, o = "canceled", t = "approvals_restart", T = "new_comment", n = "version_upload", A = "collaboration.create", e = "deleted_documents", c = "deleted_third_parties", s = "contract_negotiation.document_approved", I = "document_download", O = "finished", C = "new_documents", L = "new_third_parties", D = "document_view", N = "document_versioned", r = [
  o,
  t,
  T,
  n,
  A,
  e,
  c,
  s,
  I,
  O,
  C,
  L,
  D,
  N
];
export {
  _ as ACCEPTED_EXTENSIONS,
  E as ACCEPTED_EXTENSIONS_NAMES,
  S as ALLOWED_FILE_EXTENSIONS,
  r as ALL_ACTIVITIES_KEYS,
  o as CANCEL_ACTIVITY,
  a as CANCEL_COLLABORATION_FORM_DEFAULT_VALUES,
  t as COLLABORATION_APPROVALS_RESTART,
  T as COLLABORATION_COMMENT_ACTIVITY,
  n as COLLABORATION_DOCUMENT_VERSION_UPLOAD,
  A as CREATE_ACTIVITY,
  e as DELETED_DOCUMENTS,
  c as DELETED_THIRD_PARTIES,
  d as DISABLED_RESOURCE_STATUSES,
  s as DOCUMENT_APPROVED_ACTIVITY,
  N as DOCUMENT_UPDATED_LOCALLY,
  I as DOWNLOAD_DOCUMENT_ACTIVITY,
  R as FINALIZE_FORM_DEFAULT_VALUES,
  O as FINISH_ACTIVITY,
  C as NEW_DOCUMENTS,
  L as NEW_THIRD_PARTIES,
  D as VIEWED_DOCUMENT_ACTIVITY
};
//# sourceMappingURL=contract-negotiation.constants.js.map
