import { useForm } from '../../../forms/hooks';
import { FormProvider } from '../../../forms/utils';

import { ChatBotNegativeFeedbackModal } from './chat-bot-negative-feedback-modal';
import {
  defaultNegativeFeedbackFormValues,
  useChatBotNegativeFeedbackValidationSchema,
} from './chat-bot-negative-feedback-modal.utils';

import type { ChatBotNegativeFeedbackModalProps } from './chat-bot-negative-feedback-modal';
import type { NegativeFeedbackFormValues } from '@components/webdox-ai/interfaces';

export interface ChatBotNegativeFeedbackModalContainerProps extends Pick<
  ChatBotNegativeFeedbackModalProps,
  'data-testid' | 'isOpen' | 'isLoading' | 'onClose' | 'zIndex'
> {
  'data-testid': string;
  onSubmit(values: NegativeFeedbackFormValues): void;
}

/**
 * Container of the chat bot Negative feedback modal. Will have the form layer
 * wrapper only. All requests will be handled in the parent container
 */
export const ChatBotNegativeFeedbackModalContainer = ({
  'data-testid': dataTestId,
  isOpen = false,
  isLoading = false,
  zIndex,
  onClose,
  onSubmit,
}: ChatBotNegativeFeedbackModalContainerProps): JSX.Element => {
  const validationSchema = useChatBotNegativeFeedbackValidationSchema();

  const methods = useForm<NegativeFeedbackFormValues>({
    schema: validationSchema,
    defaultValues: defaultNegativeFeedbackFormValues,
  });

  return (
    <FormProvider {...methods}>
      <ChatBotNegativeFeedbackModal
        data-testid={`${dataTestId}--negative-feedback-modal`}
        isLoading={isLoading}
        isOpen={isOpen}
        zIndex={zIndex}
        onClose={onClose}
        onSubmit={onSubmit}
      />
    </FormProvider>
  );
};
