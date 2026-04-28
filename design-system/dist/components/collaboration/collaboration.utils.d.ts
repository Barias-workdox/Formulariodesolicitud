import { Locale } from '../utils';
import { CollaborationInvitation } from './document-approval-details/legacy-collaboration';
import { CollaborationSubtask } from './interfaces';
/**
 * Callback to support legacy implementation
 *
 * Utility to return a subtask list when receive a legacy invitation
 */
export declare const getSubtasks: (legacyInvitations: CollaborationInvitation[], rawSubtasks: CollaborationSubtask[]) => CollaborationSubtask[];
/** Get the latest update date formatted as i18n string */
export declare const getLastUpdateDateFormatted: (updateDates: Date[], locale: Locale) => string;
