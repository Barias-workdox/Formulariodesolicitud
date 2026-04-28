import { ModalProps } from '../../../modal';
import { WithZIndex } from '../../../../interfaces/common.interfaces';
export type DeleteCustomPromptModalProps = WithZIndex<Pick<ModalProps, 'isOpen' | 'onClose'> & {
    isLoading: boolean;
    onSubmit(): void;
}>;
/**
 * Modal to confirm the deletion of a custom prompt.
 */
export declare const DeleteCustomPromptModal: ({ isOpen, onClose, onSubmit, isLoading, zIndex, }: DeleteCustomPromptModalProps) => React.JSX.Element;
