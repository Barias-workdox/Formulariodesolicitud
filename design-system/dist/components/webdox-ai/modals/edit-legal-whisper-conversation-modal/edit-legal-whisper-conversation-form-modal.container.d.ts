import { EditLegalWhisperConversationFormModalProps } from './edit-legal-whisper-conversation-form-modal';
import { EditLegalWhisperConversationForm } from './edit-legal-whisper-conversation-form-modal.interfaces';
import { LegalWhisperConversationListItemType } from '../../interfaces/legal-whisper.interfaces';
export type EditLegalWhisperConversationFormModalContainerProps = Omit<EditLegalWhisperConversationFormModalProps, 'isLoading' | 'onSubmit'> & {
    conversation?: LegalWhisperConversationListItemType;
    onSubmit(formValues: EditLegalWhisperConversationForm): Promise<void>;
};
/**
 * Edit legal whisper conversation form modal container component.
 *
 * This component is responsible for managing the state and behavior of the edit legal whisper conversation form modal.
 * It uses the `useForm` hook to handle form validation and submission.
 */
export declare const EditLegalWhisperConversationFormModalContainer: ({ conversation, isOpen, onClose, onSubmit, zIndex, }: EditLegalWhisperConversationFormModalContainerProps) => React.JSX.Element;
