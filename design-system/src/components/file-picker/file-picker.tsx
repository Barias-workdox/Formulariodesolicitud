import { useTranslation } from '@components/utils';

import { DocumentDownload, DocumentSelector } from './components';

import type { CarbonIconType } from '@carbon/icons-react/lib/CarbonIcon';

export interface FilePickerProps {
  'data-testid'?: string;
  disabled: boolean;
  /** Name of the selected file */
  filename: string;
  /** To show the progress bar and progress circle */
  isUploading: boolean;
  /** Percentage to the progress bar */
  uploadProgress: number;
  /** Define if we require that the button of deletion is visible or not */
  showDeleteButton?: boolean;
  /** Verify if the process of a deletion is in progress in order to disable the button and show a spinner */
  isDeleting?: boolean;
  /** Text shown in the button */
  buttonText?: string;
  /** Icon shown left to the buttonText */
  buttonIcon?: CarbonIconType;
  /** Document formats that will show up when the file explorer is shown */
  accept?: string[];
  /** Callback function for the action of document deletion */
  onDelete(): void;
  /** Callback function that deletes a file */
  onDownload(): void;
  /** Callback function to execute when the files are selected */
  onUpload(acceptedFiles: File[], rejectedFiles: File[]): void;
}

/** A file picker with upload button, progress message and progress bar */
export const FilePicker = ({
  'data-testid': dataTestId = 'design-system-file-picker',
  ...props
}: FilePickerProps): JSX.Element => {
  const { disabled, uploadProgress } = props;

  const { t } = useTranslation();

  /** Validates if file upload is completed */
  const uploadCompleted = uploadProgress === 100;
  /** Gets the upload percentage */
  const uploadPercentage = uploadProgress / 100;

  /** The upload progress message */
  const progressMessage = uploadCompleted
    ? t('filePicker.uploadStatuses.progressCompleted')
    : t('filePicker.uploadStatuses.progress', { number: uploadProgress });

  return disabled ? (
    <DocumentDownload
      data-testid={`${dataTestId}__document-download`}
      {...props}
    />
  ) : (
    <DocumentSelector
      data-testid={`${dataTestId}__document-selector`}
      uploadPercentage={uploadPercentage}
      progressMessage={progressMessage}
      uploadCompleted={uploadCompleted}
      {...props}
    />
  );
};
