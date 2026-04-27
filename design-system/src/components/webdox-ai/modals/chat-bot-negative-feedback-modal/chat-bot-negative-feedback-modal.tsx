import { useEffect } from 'react';

import { SendAlt } from '@carbon/icons-react';

import { Button } from '@components/button';

import { RadioGroupControlContainer } from '../../../forms/components/radio-group';
import { TextareaControlContainer } from '../../../forms/components/textarea-control';
import { Modal, SectionedModalFooter, SectionedModalHeader } from '../../../modal';
import { Text } from '../../../text';
import { useTranslation } from '../../../utils';
import { useCss } from '../../../utils/hooks/use-css';
import {
  StyledSectionedModalBody,
  chatBotModalStyles,
  modalOverrides,
} from '../../webdox-ai.styles';

import {
  formControlOverrides,
  getSectionedModalFooterStyles,
  getSectionedModalHeaderStyles,
  getStyledSectionedModalBodyStyles,
  radioGroupOverrides,
} from './chat-bot-negative-feedback-modal.styles';
import {
  getFormOptions,
  useNegativeFeedbackFormContext,
} from './chat-bot-negative-feedback-modal.utils';

import type { ModalProps } from '../../../modal';
import type { NegativeFeedbackFormValues } from '../../interfaces/webdox-ai.interfaces';

export interface ChatBotNegativeFeedbackModalProps {
  'data-testid': string;
  isLoading?: boolean;
  zIndex?: number;
  isOpen: ModalProps['isOpen'];
  onClose: ModalProps['onClose'];
  onSubmit(values: NegativeFeedbackFormValues): void;
}

/**
 * Chat bot Negative feedback modal, that will require that the user add a comment
 * and select a item from the options radio group to submit the Negative feedback
 * on the selected message
 */
export const ChatBotNegativeFeedbackModal = ({
  'data-testid': dataTestId = 'modal',
  isLoading = false,
  isOpen,
  zIndex,
  onClose,
  onSubmit,
}: ChatBotNegativeFeedbackModalProps): JSX.Element => {
  const { formContainerStyles, theme } = useCss(chatBotModalStyles);

  const { t } = useTranslation();

  const {
    watch,
    handleSubmit,
    reset,
    resetField,
    formState: { isValid },
  } = useNegativeFeedbackFormContext();

  const option = watch('option');

  const commentsLabel = t('webdoxAI.chat.feedback.modal.comments', {
    kind: t(`webdoxAI.chat.feedback.modal.${option !== 'custom' ? 'optional' : 'mandatory'}`),
  });

  /** Reset the form values when the modal is closed */
  useEffect(() => {
    if (!isOpen) {
      reset();
      resetField('option');
    }

    // TODO: Evaluate if we can add the missing dependencies
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, reset]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      zIndex={zIndex}
      autoFocus={false}
      overrides={modalOverrides()}
    >
      <form
        data-testid={`${dataTestId}__form`}
        className={formContainerStyles}
        onSubmit={handleSubmit(onSubmit)}
      >
        <SectionedModalHeader $style={getSectionedModalHeaderStyles({ $theme: theme })}>
          {t('webdoxAI.chat.feedback.modal.title', {
            kind: t('webdoxAI.chat.feedback.modal.negative.text'),
          })}
        </SectionedModalHeader>
        <StyledSectionedModalBody $style={getStyledSectionedModalBodyStyles({ $theme: theme })}>
          <Text
            variant="body"
            margin={0}
            color="neutralSubdued"
            fontWeight="500"
          >
            {t('webdoxAI.chat.feedback.modal.negative.body')}
          </Text>
          <div>
            <RadioGroupControlContainer
              data-testid={`${dataTestId}--optionRadioGroup`}
              name="option"
              options={getFormOptions(t)}
              align="vertical"
              formControlOverrides={formControlOverrides}
              overrides={radioGroupOverrides}
            />
            {option === 'custom' && (
              <TextareaControlContainer
                data-testid={`${dataTestId}-comments-textarea`}
                label={commentsLabel}
                placeholder={t('webdoxAI.chat.feedback.modal.commentsPlaceholder')}
                name="comments"
                kind="gray"
                maxLength={255}
                disabled={isLoading}
              />
            )}
          </div>
        </StyledSectionedModalBody>
        <SectionedModalFooter $style={getSectionedModalFooterStyles({ $theme: theme })}>
          <Button
            data-testid={`${dataTestId}-cancel-button`}
            kind="secondary-brain"
            paddingLeft="1.25rem"
            paddingRight="1.25rem"
            onClick={onClose}
          >
            {t('webdoxAI.chat.feedback.modal.cancelButton')}
          </Button>
          <Button
            data-testid={`${dataTestId}-confirm-button`}
            kind="primary-brain"
            type="submit"
            size="44px"
            paddingLeft="1.25rem"
            paddingRight="1.25rem"
            startEnhancer={<SendAlt size={20} />}
            disabled={isLoading || !isValid}
            isLoading={isLoading}
          >
            {t('webdoxAI.chat.feedback.modal.submitButton')}
          </Button>
        </SectionedModalFooter>
      </form>
    </Modal>
  );
};
