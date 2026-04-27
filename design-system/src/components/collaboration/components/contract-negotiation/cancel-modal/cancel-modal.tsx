import type { ReactElement } from 'react';

import { CloseOutline, InformationFilled } from '@carbon/icons-react';

import { Alert } from '@components/alert';
import { Button } from '@components/button';
import { DynamicFormControlContainer } from '@components/forms';
import {
  Modal,
  SectionedModalBody,
  SectionedModalFooter,
  SectionedModalHeader,
} from '@components/modal';
import { Text } from '@components/text';
import { useTranslation } from '@components/utils';
import { useCss } from '@components/utils/hooks/use-css';

import { useCancelCollaborationFormContext } from './cancel-modal.logic';
import { styles } from './cancel-modal.styles';

import type { CancelCollaborationFormFields } from '@components/collaboration/interfaces';

export type CancelModalProps = {
  'data-testid': string;
  isOpen: boolean;
  isLoading: boolean;
  onClose(): void;
  onSubmit(values: CancelCollaborationFormFields): void;
};

/** Component that is designed to present a modal for canceling a collaboration negotiation */
export const CancelModal = ({
  'data-testid': dataTestId = 'cancel-modal',
  isOpen,
  isLoading,
  onClose,
  onSubmit,
}: CancelModalProps): ReactElement => {
  const { mainContainerStyles, theme } = useCss(styles);

  const { t } = useTranslation();

  const {
    handleSubmit,
    formState: {
      errors: { message: messageError },
    },
  } = useCancelCollaborationFormContext();

  const messageFieldHasErrors = messageError !== undefined;
  const disabled = isLoading || messageFieldHasErrors;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <form
        data-testid={`${dataTestId}__form`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <SectionedModalHeader>{t('contractNegotiationCollaboration.cancel')}</SectionedModalHeader>

        <SectionedModalBody>
          <Alert
            kind="warning"
            icon={
              <InformationFilled
                color={theme.colors.warning}
                size="32"
              />
            }
          >
            <Text
              variant="bodySmall"
              margin={0}
              color={theme.colors.warningStrong}
            >
              {t('contractNegotiationCollaboration.cancelModal.alert')}
            </Text>
          </Alert>

          <div className={mainContainerStyles}>
            <Text
              variant="body"
              margin={0}
              fontWeight="500"
            >
              {t('contractNegotiationCollaboration.cancelModal.stepTitle')}
            </Text>

            <Text
              variant="bodySmall"
              margin={0}
              fontWeight="400"
              color={theme.colors.neutralSubdued}
              paddingTop={theme.spacing.spacingXs}
            >
              {t('contractNegotiationCollaboration.cancelModal.step1')}
            </Text>

            <Text
              variant="bodySmall"
              margin={0}
              fontWeight="400"
              color={theme.colors.neutralSubdued}
              paddingTop={theme.spacing.spacingXs}
            >
              {t('contractNegotiationCollaboration.cancelModal.step2')}
            </Text>

            <Text
              variant="bodySmall"
              margin={0}
              fontWeight="400"
              color={theme.colors.neutralSubdued}
              paddingTop={theme.spacing.spacingXs}
            >
              {t('contractNegotiationCollaboration.cancelModal.step3')}
            </Text>
          </div>

          <div>
            <DynamicFormControlContainer
              controlKind="textareaControl"
              name="message"
              label={t('contractNegotiationCollaboration.cancelModal.cancelationReason')}
              placeholder={`${t(
                'contractNegotiationCollaboration.cancelModal.cancelationReasonPlaceholder',
              )}`}
            />
          </div>
        </SectionedModalBody>

        <SectionedModalFooter>
          <Button
            data-testid={`${dataTestId}__cancel`}
            type="button"
            kind="secondary"
            onClick={onClose}
          >
            {t('general.cancel')}
          </Button>
          <Button
            data-testid={`${dataTestId}__cancel-collaboration`}
            type="submit"
            isLoading={isLoading}
            disabled={disabled}
            startEnhancer={<CloseOutline />}
          >
            {t('contractNegotiationCollaboration.cancel')}
          </Button>
        </SectionedModalFooter>
      </form>
    </Modal>
  );
};
