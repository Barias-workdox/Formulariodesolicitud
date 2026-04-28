import { DrawerProps } from '../../../drawer';
import { CollaborationSubtask } from '../../interfaces';
import { CollaborationInvitation } from '../legacy-collaboration';
export interface DocumentApprovalDetailsDrawerProps extends DrawerProps {
    /** Support for the new DTO multiple collaboration kinds  */
    subtasks?: CollaborationSubtask[];
    /** @deprecated Only required for legacy support */
    invitations?: CollaborationInvitation[];
}
/**
 * Drawer wrapper of document approval details component
 */
export declare const DocumentApprovalDetailsDrawer: ({ isOpen, onClose, subtasks: rawSubtasks, invitations, }: DocumentApprovalDetailsDrawerProps) => JSX.Element;
