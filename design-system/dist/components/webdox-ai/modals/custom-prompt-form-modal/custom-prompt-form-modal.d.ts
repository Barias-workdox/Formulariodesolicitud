import { ModalProps } from '../../../modal';
import { WithZIndex } from '../../../../interfaces/common.interfaces';
export type CustomPromptFormModalProps = WithZIndex<Pick<ModalProps, 'isOpen' | 'onClose'> & {
    isLoading: boolean;
    disabled?: boolean;
    onSubmit(): void;
}>;
/**
 * Custom prompt form modal component.
 *
 * This component is responsible for rendering the modal that allows users to create or edit custom prompts.
 * It includes input fields for the prompt title and content, as well as buttons for saving or canceling the action.
 */
export declare const CustomPromptFormModal: ({ isOpen, onClose, isLoading, disabled, onSubmit, zIndex, }: CustomPromptFormModalProps) => React.JSX.Element;
