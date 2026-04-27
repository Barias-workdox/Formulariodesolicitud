import { useMemo } from 'react';
import type { ReactElement } from 'react';

import { CheckmarkOutline, WarningFilled } from '@carbon/icons-react';

import { Alert } from '@components/alert';
import { Button } from '@components/button';
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader } from '@components/drawer';
import { Text } from '@components/text';
import { useCss } from '@components/utils/hooks/use-css';
import { useTranslation } from '@components/utils/i18n';

import { generalDocumentsStatuses } from '../../../logic/business/contract-negotiation.business';

import { CheckboxForm } from './components';
import { useFinalizeNegotiationFormContext } from './finalize-drawer.logic';
import { styles } from './finalize-drawer.styles';

import type {
  CollaborationActivityDocumentsForm,
  FinalizeNegotiationFormFields,
} from '../../../interfaces';

export type FinalizeDrawerProps = {
  'data-testid': string;
  documents: CollaborationActivityDocumentsForm[];
  isOpen: boolean;
  isLoading: boolean;
  onClose(): void;
  onSubmit(values: FinalizeNegotiationFormFields): void;
};

/**
 * Component that is responsible for rendering a drawer that allows users
 * to finalize a negotiation.
 */
export const FinalizeDrawer = ({
  'data-testid': dataTestId,
  documents,
  isOpen,
  isLoading,
  onClose,
  onSubmit,
}: FinalizeDrawerProps): ReactElement => {
  const { formStyles, containerStyles, theme } = useCss(styles);

  const { t } = useTranslation();
  const { handleSubmit } = useFinalizeNegotiationFormContext();

  /** Overall documents statuses validating the third party approvals */
  const documentsStatuses = useMemo(() => generalDocumentsStatuses(documents), [documents]);

  const isThereAPendingDocument = documentsStatuses.some((status) => status === 'pending');

  return (
    <Drawer
      data-testid={`${dataTestId}__drawer`}
      isOpen={isOpen}
      onClose={onClose}
    >
      <form
        data-testid={`${dataTestId}__form`}
        className={formStyles}
        onSubmit={handleSubmit(onSubmit)}
      >
        <DrawerHeader
          data-testid={dataTestId}
          title={t('contractNegotiationCollaboration.endNegotiation')}
          onClose={onClose}
        />

        <DrawerBody>
          <div className={containerStyles}>
            {isThereAPendingDocument && (
              <Alert
                kind="warning"
                icon={
                  <WarningFilled
                    size="24"
                    color={theme.colors.warning}
                  />
                }
              >
                <Text
                  variant="bodySmall"
                  margin={0}
                  color={theme.colors.warningStrong}
                >
                  {t('contractNegotiationCollaboration.finalizeWarning')}
                </Text>
              </Alert>
            )}

            <Text
              variant="body"
              margin={0}
              color="neutralSubdued"
            >
              {t('contractNegotiationCollaboration.finalizeInfo')}
            </Text>

            {documents.map((document) => {
              const { id, index } = document;

              return (
                <CheckboxForm
                  key={id}
                  data-testid={`${dataTestId}__checkbox-form-${id}`}
                  document={document}
                  status={documentsStatuses[index]}
                />
              );
            })}
          </div>
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
            data-testid={`${dataTestId}__upload`}
            type="submit"
            isLoading={isLoading}
            disabled={isLoading}
            startEnhancer={<CheckmarkOutline />}
          >
            {t('contractNegotiationCollaboration.finalize')}
          </Button>
        </DrawerFooter>
      </form>
    </Drawer>
  );
};
