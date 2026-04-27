import type { ReactElement } from 'react';

import { Upload, WarningFilled } from '@carbon/icons-react';

import { Alert } from '@components/alert';
import { Button } from '@components/button';
import { useContractNegotiationContext } from '@components/collaboration/logic/contexts';
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader } from '@components/drawer';
import { FileUploader } from '@components/file-uploader';
import { DynamicFormControlContainer } from '@components/forms';
import { Text } from '@components/text';
import { useCss } from '@components/utils/hooks/use-css';
import { useTranslation } from '@components/utils/i18n/utils';

import { useNewDocumentVersionFormContext } from './new-document-version-drawer.logic';
import { styles } from './new-document-version-drawer.styles';

import type { NewDocumentVersionFormFields } from './new-document-version-drawer.logic';
import type { FileType, FileUploaderProps } from '@components/file-uploader';

export interface NewDocumentVersionDrawerProps {
  'data-testid': string;
  selectedFiles: FileType[];
  isLoading: boolean;
  isOpen: boolean;
  handleSelectFile: FileUploaderProps['onDrop'];
  onClose(): void;
  onSubmit(values: NewDocumentVersionFormFields): void;
}

/**
 * Component that is responsible for rendering a drawer that allows users to upload
 * a new version of a negotiable document.
 */
export const NewDocumentVersionDrawer = ({
  'data-testid': dataTestId,
  selectedFiles,
  isLoading,
  isOpen,
  handleSelectFile,
  onClose,
  onSubmit,
}: NewDocumentVersionDrawerProps): ReactElement => {
  const { formStyles, spacingStyles, theme } = useCss(styles);
  const {
    allowedFileExtensions: { extensions, names },
  } = useContractNegotiationContext();

  const { t } = useTranslation();
  const {
    formState: {
      errors: { document: documentError },
    },
    handleSubmit,
  } = useNewDocumentVersionFormContext();

  const disabled = documentError !== undefined || isLoading;

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
          title={t('contractNegotiationCollaboration.uploadNewVersion')}
          onClose={onClose}
        />
        <DrawerBody>
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
              {t('contractNegotiationCollaboration.loadNewVersionInfo')}
            </Text>
          </Alert>
          <div className={spacingStyles}>
            <FileUploader
              data-testid={`${dataTestId}__file-uploader`}
              multiple={false}
              selectedFiles={selectedFiles}
              accept={extensions}
              acceptedExtensionsNames={names}
              onDrop={handleSelectFile}
            />
          </div>

          <div className={spacingStyles}>
            <DynamicFormControlContainer
              controlKind="textareaControl"
              name="comment"
              label={t('contractNegotiationCollaboration.forms.comments.label')}
              placeholder={`${t(
                'contractNegotiationCollaboration.forms.uploadNewVersion.placeholder',
              )}`}
            />
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
            disabled={disabled}
            startEnhancer={<Upload />}
          >
            {t('contractNegotiationCollaboration.load')}
          </Button>
        </DrawerFooter>
      </form>
    </Drawer>
  );
};
