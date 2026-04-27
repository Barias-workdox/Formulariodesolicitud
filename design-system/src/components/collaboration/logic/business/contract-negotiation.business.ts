import { ALL_ACTIVITIES_KEYS } from '@components/collaboration/constants';

import type {
  CollaborationActivity,
  CollaborationActivityDocument,
  CollaborationActivityDocumentThirdParty,
  CollaborationDocument,
  CollaborationResource,
  CollaborationResourceStatus,
  CollaborationResourceStatusInfo,
  CollaborationStatus,
  CollaborationSubtask,
} from '../../interfaces';

/** All collaboration states considered active. */
export const activeCollaborationStates: CollaborationStatus[] = ['active'];

/**
 * Function that generates an array with all the documents in the collaborations
 * with the third parties and his statuses
 */
export const getActivityDocuments = (
  negotiableDocuments: CollaborationResource[],
  collaborationSubtasks: CollaborationSubtask[],
): CollaborationActivityDocument[] =>
  negotiableDocuments.map(
    ({ document: { id, name, fileExt, updatedAt = '', officeDocumentVersion } }) => ({
      id,
      name,
      label: name,
      fileExt,
      updatedAt,
      officeDocumentVersion,
      thirdParties: collaborationSubtasks.map(
        ({
          thirdParty: { id: thirdPartyId, firstName, lastName },
          resources,
        }): CollaborationActivityDocumentThirdParty => {
          let status: CollaborationResourceStatus = 'pending';
          let approvedAt: CollaborationResource['approvedAt'] = '';

          const filteredResources = resources.filter(
            ({ document: { id: documentId, negotiable } }) => negotiable && documentId === id,
          );

          if (filteredResources.length > 0) {
            const [{ approvedAt: resourceApprovedAt, status: documentStatus }] = filteredResources;

            status = documentStatus;
            approvedAt = resourceApprovedAt;
          }

          const thirdPartyName = `${firstName} ${lastName}`;

          return {
            id: thirdPartyId,
            name: thirdPartyName,
            status,
            approvedAt,
          };
        },
      ),
    }),
  );

/**
 * Utility function that retrieves a selected document from a list of collaboration
 * activity documents
 */
export const getActivitySelectedDocument = (
  activityDocuments: CollaborationActivityDocument[],
  { id, negotiable = false }: Pick<CollaborationDocument, 'id' | 'negotiable'>,
): CollaborationActivityDocument => {
  const [firstActivityDocument] = activityDocuments;

  if (negotiable) {
    return (
      activityDocuments.find(({ id: activityDocumentId }) => activityDocumentId === id) ??
      firstActivityDocument
    );
  } else {
    return firstActivityDocument;
  }
};

type ThirdPartyStatus = Pick<CollaborationActivityDocumentThirdParty, 'status'>;
type Document = {
  thirdParties: ThirdPartyStatus[];
};

/**
 * General statuses of the documents.
 * If one person is remaining of approval the status remains pending
 */
export const generalDocumentsStatuses = (
  documents: Document[],
): CollaborationResourceStatusInfo[] =>
  documents.map(({ thirdParties }) =>
    thirdParties.every(({ status }) => status === 'approved') ? 'approved' : 'pending',
  );

/** Filter the available activities entries on the contract negotiation history scope */
export const filterContractNegotiationActivities = (
  activities: CollaborationActivity[],
): CollaborationActivity[] => activities.filter(({ key }) => ALL_ACTIVITIES_KEYS.includes(key));
