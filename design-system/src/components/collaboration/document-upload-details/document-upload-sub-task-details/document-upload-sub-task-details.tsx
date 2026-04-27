import { DocumentAttachment } from '@carbon/icons-react';

import { Avatar } from '@components/avatar';
import { FileTypeIcon } from '@components/file-type-icon';
import { TitleLayout } from '@components/layouts';
import { Text } from '@components/text';
import { StatefulTooltipNext } from '@components/tooltip-next';
import { ariaKeyDownHandler } from '@components/utils/accessibility.utils';
import { useCss } from '@components/utils/hooks/use-css';
import { useDateUtilsWithLocale } from '@components/utils/hooks/use-date-util-with-locale';
import { useTranslation } from '@components/utils/i18n/utils';

import { subtasksStyles } from './document-upload-sub-task-details.styles';

import type { CollaborationDocument, CollaborationResource } from '../../interfaces';
import type { FileType } from '@components/file-type-icon';

export interface DocumentUploadSubtaskDetailsProps {
  resource: CollaborationResource | undefined;
  thirdPartyName: string;
  onDocumentClick(documentId: CollaborationDocument['id']): void;
}

/**
 * Render the information of the Subtask
 * If the document is uploaded and clicked on, the document is displayed in a modal viewer.
 */
export const DocumentUploadSubtaskDetails = ({
  resource,
  thirdPartyName,
  onDocumentClick,
}: DocumentUploadSubtaskDetailsProps): JSX.Element => {
  const documentUploaded = resource !== undefined;
  const { t } = useTranslation();
  const { theme, titleWrapper, wrapperStyles } = useCss(subtasksStyles, {
    documentUploaded,
  });
  const { formatDatetime } = useDateUtilsWithLocale();

  /**
   * Handles the document click
   */
  const handleDocumentClick = (): void => {
    if (documentUploaded) {
      onDocumentClick(resource.document.id);
    }
  };

  return (
    <>
      <div
        data-testid="document-upload-sub-task-item"
        role={documentUploaded ? 'button' : undefined}
        tabIndex={documentUploaded ? 0 : undefined}
        className={wrapperStyles}
        onClick={handleDocumentClick}
        onKeyDown={ariaKeyDownHandler(handleDocumentClick)}
      >
        <div className={titleWrapper}>
          <TitleLayout
            titleText={
              documentUploaded ? (
                <Text
                  variant="bodySmall"
                  $style={subtasksStyles.documentTitle(theme, {
                    documentUploaded,
                  })}
                >
                  <StatefulTooltipNext
                    placement="bottom"
                    showArrow
                    content={resource.document.name}
                  >
                    {resource.document.name}
                  </StatefulTooltipNext>
                </Text>
              ) : (
                <Text
                  variant="bodySmall"
                  margin={0}
                  color={theme.colors.neutralSubdued}
                >
                  {t('collaborationUploadDetails.document.pending')}
                </Text>
              )
            }
            subtitleText={
              documentUploaded ? (
                <Text
                  variant="bodySmall"
                  margin={0}
                  color={theme.colors.neutralSubdued}
                >
                  {t('collaborationUploadDetails.document.uploaded', {
                    date: formatDatetime(resource.createdAt),
                  })}
                </Text>
              ) : undefined
            }
            startEnhancer={
              documentUploaded ? (
                <FileTypeIcon
                  data-testid="document-upload-subtask__file-icon"
                  size={24}
                  fileExtension={resource.document.fileExt as FileType}
                />
              ) : (
                <DocumentAttachment
                  size={20}
                  color={theme.colors.neutralSubdued}
                />
              )
            }
          />
        </div>
        <Avatar
          size="24px"
          name={thirdPartyName}
        />
      </div>
    </>
  );
};
