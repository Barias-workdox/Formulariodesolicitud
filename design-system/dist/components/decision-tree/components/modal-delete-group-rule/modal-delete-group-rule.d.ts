import { ModalProps } from '../../../modal';
import { WithTestId } from '../../../../interfaces/common.interfaces';
export type ModalDeleteGroupRuleProps = WithTestId & ModalProps & {
    onDelete(): void;
};
/** Component that renders a modal dialog that confirms the deletion of a group rule */
export declare const ModalDeleteGroupRule: ({ dataTestId, isOpen, onClose, onDelete, }: ModalDeleteGroupRuleProps) => JSX.Element;
