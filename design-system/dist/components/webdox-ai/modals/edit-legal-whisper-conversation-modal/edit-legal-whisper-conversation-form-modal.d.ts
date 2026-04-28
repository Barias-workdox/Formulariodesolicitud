import { ModalProps } from '../../../modal';
import { WithZIndex } from '../../../../interfaces/common.interfaces';
export type EditLegalWhisperConversationFormModalProps = WithZIndex<Pick<ModalProps, 'isOpen' | 'onClose'> & {
    isLoading: boolean;
    disabled?: boolean;
    onSubmit(): void;
}>;
/**
 * Edit legal whisper conversation form modal component.
 */
export declare const EditLegalWhisperConversationFormModal: ({ isLoading, isOpen, disabled, onClose, onSubmit, zIndex, }: EditLegalWhisperConversationFormModalProps) => React.JSX.Element;
