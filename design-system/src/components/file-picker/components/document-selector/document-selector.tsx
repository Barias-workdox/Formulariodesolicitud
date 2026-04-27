import { TrashCan } from '@carbon/icons-react';

import { Button, IconButton } from '@components/button';
import { ProgressBar, ProgressCircle } from '@components/progress';
import { Text } from '@components/text';
import { TruncatedText } from '@components/truncated-text';
import { useTranslation } from '@components/utils';
import { useCss } from '@components/utils/hooks/use-css';

import { UploadAction } from '../../upload-action';

import { styles } from './document-selector.styles';

import type { FilePickerProps } from '../../file-picker';

export type DocumentSelectorProps = Pick<
  FilePickerProps,
  | 'data-testid'
  | 'accept'
  | 'buttonIcon'
  | 'buttonText'
  | 'filename'
  | 'isUploading'
  | 'showDeleteButton'
  | 'isDeleting'
  | 'uploadProgress'
  | 'onDelete'
  | 'onUpload'
> & {
  progressMessage: string;
  uploadPercentage: number;
  uploadCompleted: boolean;
};

/**
 * Component that provides a user interface for selecting and uploading documents.
 * It includes a button for initiating the file selection process, displays the selected file name,
 * and shows the upload progress through a progress circle and progress bar.
 */
export const DocumentSelector = ({
  'data-testid': dataTestId = 'file-picker__document-selector',
  accept,
  buttonText,
  buttonIcon: ButtonIcon,
  filename,
  isUploading,
  showDeleteButton,
  progressMessage,
  isDeleting,
  uploadProgress,
  uploadPercentage,
  uploadCompleted,
  onDelete,
  onUpload,
}: DocumentSelectorProps): JSX.Element => {
  const { t } = useTranslation();
  const {
    theme,
    containerStyles,
    leftAreaContainerStyles,
    uploadButtonContainerStyles,
    filenameContainerStyles,
    rightAreaContainerStyles,
    progressCircleContainerStyles,
  } = useCss(styles);

  return (
    <div>
      <div
        data-testid={dataTestId}
        className={containerStyles}
      >
        <div className={leftAreaContainerStyles}>
          <div className={uploadButtonContainerStyles}>
            <UploadAction
              dataTestId={`${dataTestId}__upload-action`}
              accept={accept}
              selectionType="file"
              onSelect={onUpload}
            >
              <Button
                data-testid={`${dataTestId}__select-button`}
                type="button"
                size="compact"
                kind="tertiary"
                startEnhancer={ButtonIcon}
              >
                {buttonText ?? t('filePicker.select')}
              </Button>
            </UploadAction>
          </div>

          {filename && (
            <div
              data-testid={`${dataTestId}--filename`}
              className={filenameContainerStyles}
            >
              <TruncatedText
                textProps={{ variant: 'bodySmall', margin: 0 }}
                tooltipProps={{ content: filename }}
              >
                {filename}
              </TruncatedText>
            </div>
          )}
        </div>

        <div className={rightAreaContainerStyles}>
          {isUploading && (
            <div
              data-testid={`${dataTestId}--progress-circle`}
              className={progressCircleContainerStyles}
            >
              <Text
                variant="upperDetails"
                margin={0}
                paddingRight={theme.spacing.spacingXs}
              >
                {progressMessage}
              </Text>

              <ProgressCircle
                progress={uploadPercentage}
                shadowed={false}
              />
            </div>
          )}

          {showDeleteButton && (
            <IconButton
              data-testid={`${dataTestId}--delete-button`}
              size="32px"
              disabled={isDeleting}
              isLoading={isDeleting}
              onClick={onDelete}
            >
              <TrashCan />
            </IconButton>
          )}
        </div>
      </div>

      {isUploading && (
        <div data-testid={`${dataTestId}--progress-bar`}>
          <ProgressBar
            value={uploadProgress}
            completed={uploadCompleted}
          />
        </div>
      )}
    </div>
  );
};
