import { useEffect } from 'react';

import { FormProvider, useForm } from '@components/forms';
import { useEditLegalWhisperConversationValidationSchema } from '@components/webdox-ai/hooks/use-edit-legal-whisper-conversation-validation-schema.hook';
import { noop } from '@utils/noop';

import {
  EditLegalWhisperConversationFormModal,
  type EditLegalWhisperConversationFormModalProps,
} from './edit-legal-whisper-conversation-form-modal';

import type { EditLegalWhisperConversationForm } from './edit-legal-whisper-conversation-form-modal.interfaces';
import type { LegalWhisperConversationListItemType } from '@components/webdox-ai/interfaces/legal-whisper.interfaces';

export type EditLegalWhisperConversationFormModalContainerProps = Omit<
  EditLegalWhisperConversationFormModalProps,
  'isLoading' | 'onSubmit'
> & {
  conversation?: LegalWhisperConversationListItemType;
  onSubmit(formValues: EditLegalWhisperConversationForm): Promise<void>;
};

/**
 * Edit legal whisper conversation form modal container component.
 *
 * This component is responsible for managing the state and behavior of the edit legal whisper conversation form modal.
 * It uses the `useForm` hook to handle form validation and submission.
 */
export const EditLegalWhisperConversationFormModalContainer = ({
  conversation,
  isOpen,
  onClose = noop,
  onSubmit = noop,
  zIndex,
}: EditLegalWhisperConversationFormModalContainerProps): React.JSX.Element => {
  const validationSchema = useEditLegalWhisperConversationValidationSchema();

  const methods = useForm<
    EditLegalWhisperConversationForm,
    undefined,
    EditLegalWhisperConversationForm,
    'zod'
  >({
    schema: validationSchema,
    resolverType: 'zod',
  });

  const {
    reset,
    handleSubmit: formHandleSubmit,
    formState: { isValid, isSubmitting },
  } = methods;

  /**
   * Handle close event.
   */
  const handleClose = (): void => {
    if (isSubmitting) return;

    onClose();
  };

  /**
   * Effect to reset the form when the modal opens.
   * It sets the form values to the custom prompt data if available.
   */
  useEffect(() => {
    if (isOpen) {
      reset(conversation);
    }
  }, [conversation, isOpen, reset]);

  return (
    <FormProvider {...methods}>
      <EditLegalWhisperConversationFormModal
        isLoading={isSubmitting}
        isOpen={isOpen}
        disabled={!isValid}
        onClose={handleClose}
        onSubmit={formHandleSubmit(onSubmit)}
        zIndex={zIndex}
      />
    </FormProvider>
  );
};
