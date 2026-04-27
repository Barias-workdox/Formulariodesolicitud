import { formatDatetime } from '@components/utils/strings/date.utils';

import type { Locale } from '../utils';
import type { CollaborationInvitation } from './document-approval-details/legacy-collaboration';
import type { CollaborationResource, CollaborationSubtask } from './interfaces';

/** Get the latest date of a list  */
const getLastDate = (updateDates: string[]): string => {
  if (updateDates.length === 0) {
    return '';
  }

  const latestDate = Math.max(...updateDates.map((date) => new Date(date).getTime()));

  return new Date(latestDate).toISOString();
};

/**
 * Callback to support legacy implementation
 *
 * Utility to return a subtask list when receive a legacy invitation
 */
export const getSubtasks = (
  legacyInvitations: CollaborationInvitation[],
  rawSubtasks: CollaborationSubtask[],
): CollaborationSubtask[] => {
  return rawSubtasks.length > 0
    ? rawSubtasks
    : legacyInvitations.map(
        ({ id, collaborator, documents, status }): CollaborationSubtask => ({
          id,
          status,
          createdAt: getLastDate(documents.map(({ createdAt }) => createdAt)),
          updatedAt: getLastDate(documents.map(({ updatedAt }) => updatedAt)),
          thirdParty: collaborator,
          resources: documents.map(
            ({
              id,
              name,
              createdAt,
              fileExt,
              reasonRejection,
              status,
              updatedAt,
              deletedAt,
            }): CollaborationResource => ({
              document: {
                id,
                name,
                fileExt,
                createdAt,
                updatedAt,
                deletedAt,
              },
              status,
              rejectionReason: reasonRejection,
              createdAt,
              updatedAt,
            }),
          ),
        }),
      );
};

/** Get the latest update date formatted as i18n string */
export const getLastUpdateDateFormatted = (updateDates: Date[], locale: Locale): string => {
  if (updateDates.length === 0) {
    return '';
  }

  const latestDate = Math.max(...updateDates.map((date) => date.getTime()));

  return formatDatetime(new Date(latestDate).toISOString(), locale);
};
