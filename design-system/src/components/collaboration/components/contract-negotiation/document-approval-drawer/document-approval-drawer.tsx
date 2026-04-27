import type { ReactElement } from 'react';

import { CheckmarkOutline, InformationFilled } from '@carbon/icons-react';

import { Alert } from '@components/alert';
import { Button } from '@components/button';
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader } from '@components/drawer';
import { DynamicFormControlContainer } from '@components/forms';
import { Text } from '@components/text';
import { useCss } from '@components/utils/hooks/use-css';
import { useTranslation } from '@components/utils/i18n/utils';

import { DocumentSummary } from './components';
import { styles } from './document-approval-drawer.styles';
import { useDocumentApprovalFormContext } from './document-approval-form.logic';

import type { DocumentApprovalFormFields } from './document-approval-form.logic';
import type { IContractNegotiationContext } from '../../../interfaces';
import type { IUseDocumentLastModificationText } from '../hooks/use-document-last-modification-text.hook';

export type DocumentApprovalDrawerProps = Pick<IContractNegotiationContext, 'isLoading'> & {
  'data-testid': string;
  document: IContractNegotiationContext['selectedDocument']['document'];
  /** Text that displays the date and the user that made the last modification to the document. */
  documentLastModificationText: IUseDocumentLastModificationText['lastModificationText'];
  isOpen: boolean;
  onClose(): void;
  onSubmit(values: DocumentApprovalFormFields): void;
};

/**
 * Drawer to display the document approval form with the information
 * of the document to be approved.
 */
export const DocumentApprovalDrawer = ({
  'data-testid': dataTestId,
  document,
  isOpen,
  isLoading = false,
  documentLastModificationText,
  onClose,
  onSubmit,
}: DocumentApprovalDrawerProps): ReactElement => {
  const { t } = useTranslation();
  const { formStyles, theme } = useCss(styles);

  const { handleSubmit } = useDocumentApprovalFormContext();

  return (
    <Drawer
      onClose={onClose}
      isOpen={isOpen}
    >
      <form
        data-testid={`${dataTestId}__form`}
        onSubmit={handleSubmit(onSubmit)}
        className={formStyles}
      >
        <DrawerHeader
          data-testid={`${dataTestId}__drawer-header`}
          title={t('contractNegotiationCollaboration.approveDocument')}
          onClose={onClose}
        />
        <DrawerBody>
          <Alert
            kind="infoLight"
            icon={
              <InformationFilled
                width={24}
                height={24}
                color={theme.colors.brandSubdued}
              />
            }
          >
            <Text
              variant="bodySmall"
              margin={0}
            >
              {t('contractNegotiationCollaboration.approvalInformation')}
            </Text>
          </Alert>
          <DocumentSummary
            document={document}
            documentLastModificationText={documentLastModificationText}
          />
          <DynamicFormControlContainer
            controlKind="textareaControl"
            name="comment"
            label={t('contractNegotiationCollaboration.forms.comments.label')}
            placeholder={`${t('contractNegotiationCollaboration.forms.comments.placeholder')}`}
          />
        </DrawerBody>
        <DrawerFooter>
          <Button
            data-testid={`${dataTestId}__cancel`}
            type="button"
            kind="secondary"
            onClick={onClose}
          >
            {t('general.cancel')}
          </Button>
          <Button
            data-testid={`${dataTestId}__approve`}
            type="submit"
            startEnhancer={<CheckmarkOutline />}
            isLoading={isLoading}
            disabled={isLoading}
          >
            {t('contractNegotiationCollaboration.approve')}
          </Button>
        </DrawerFooter>
      </form>
    </Drawer>
  );
};
