import { Locale } from '../../../utils/i18n';
import { CollaborationSubtask } from '../../interfaces';
export interface DocumentApprovalDetailsLastUpdateProps {
    subtasks: CollaborationSubtask[];
    showSubtitleText?: boolean;
}
/** Get the latest update date formatted as i18n string in the invitations array */
export declare const getLastUpdateDate: (subtasks: CollaborationSubtask[], locale: Locale) => string;
/**
 * Part of document approval details by document.
 * Shows the last update in the collaboration invites.
 *
 * The locale param is /es/ by default.
 *
 * The locale param is temporary. Will be replaced in future
 * versions of the DS when the locale context will be implemented.
 * In the current version there are a problem in the locale context
 * to share its current value with other component from the DS.
 */
export declare const DocumentApprovalDetailsLastUpdate: ({ subtasks, showSubtitleText, }: DocumentApprovalDetailsLastUpdateProps) => JSX.Element;
