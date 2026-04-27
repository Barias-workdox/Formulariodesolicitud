import { useEffect } from 'react';

import { FormProvider, useForm } from '@components/forms';
import { noop } from '@utils/noop';

import { useCustomPromptValidationSchema } from '../../hooks/use-custom-prompt-validation-schema.hook';

import { CustomPromptFormModal, type CustomPromptFormModalProps } from './custom-prompt-form-modal';

import type { CustomPromptForm } from './custom-prompt-form-modal.interfaces';
import type { CustomPrompt } from '@components/webdox-ai/interfaces';

export type CustomPromptFormModalContainerProps = Omit<
  CustomPromptFormModalProps,
  'isLoading' | 'onSubmit'
> & {
  customPrompt?: CustomPrompt;
  onSubmit(formValues: CustomPromptForm): Promise<void>;
};

/**
 * Custom prompt form modal container component.
 *
 * This component is responsible for managing the state and behavior of the custom prompt form modal.
 * It uses the `useForm` hook to handle form validation and submission.
 */
export const CustomPromptFormModalContainer = ({
  customPrompt,
  isOpen,
  onClose = noop,
  onSubmit = noop,
  zIndex,
}: CustomPromptFormModalContainerProps): React.JSX.Element => {
  const validationSchema = useCustomPromptValidationSchema();

  const methods = useForm<CustomPromptForm, undefined, CustomPromptForm, 'zod'>({
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
      const { title = '', content = '' } = customPrompt || {};

      reset({ content, title });
    }
  }, [customPrompt, isOpen, reset]);

  return (
    <FormProvider {...methods}>
      <CustomPromptFormModal
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
