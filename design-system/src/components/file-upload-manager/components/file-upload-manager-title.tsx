import { useMemo } from 'react';

import { CheckmarkOutline, CloseOutline } from '@carbon/icons-react';

import { BackgroundIcon } from '@components/background-icon';
import { getFileCounts } from '@components/file-upload-manager/file-upload-manager.utils';
import { Spinner } from '@components/spinner';
import { Text } from '@components/text';
import { useTranslation } from '@components/utils';
import { themedStyled } from '@themes/utilities';

import type { FileUploadItem } from '../file-upload-manager.interfaces';
import type {
  FileUploadManagerStatus,
  FileUploadManagerTabType,
} from '@components/file-upload-manager/contexts/file-uploader-manager.context';

export interface FileUploadManagerTitleProps {
  files: FileUploadItem[];
  status: FileUploadManagerStatus;
}

const StyledTitleContainer = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: $theme.spacing.spacingXs,
  width: '100%',
}));

const StyledTitleRightContainer = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: $theme.spacing.spacingXs,
}));

/**
 * Title of the file upload manager panel
 */
export function FileUploadManagerTitle({
  files,
  status,
}: FileUploadManagerTitleProps): JSX.Element {
  const { t } = useTranslation();

  const isUploading = status === 'uploading';
  const isCanceled = status === 'canceled';

  const fileCounts: Record<FileUploadManagerTabType, number> = useMemo(
    () => getFileCounts(files),
    [files],
  );

  const uploadProgressText = useMemo(() => {
    return t(`fileUploadManager.progress.${status}`, {
      count: fileCounts.completed,
      total: files.length,
    });
  }, [status, files.length, fileCounts.completed, t]);

  const headerIcon = useMemo(() => {
    if (isUploading) {
      return (
        <Spinner
          size="sm"
          data-testid="file-upload-manager--spinner"
        />
      );
    }

    if (isCanceled) {
      return (
        <BackgroundIcon
          size="24px"
          Icon={CloseOutline}
          iconColor="negative"
          backgroundColor="negativeSubtle"
        />
      );
    }

    return (
      <BackgroundIcon
        size="24px"
        Icon={CheckmarkOutline}
        iconColor="positive"
        backgroundColor="positiveSubtle"
      />
    );
  }, [isCanceled, isUploading]);

  return (
    <StyledTitleContainer>
      <Text
        variant="body"
        margin={0}
        padding={0}
        fontWeight="500"
      >
        {t('fileUploadManager.uploads')}
      </Text>

      {(files.length > 0 || status === 'canceled') && status !== 'idle' && (
        <StyledTitleRightContainer>
          {headerIcon}
          <Text
            variant="bodySmall"
            margin={0}
            padding={0}
            fontWeight="400"
          >
            {uploadProgressText}
          </Text>
        </StyledTitleRightContainer>
      )}
    </StyledTitleContainer>
  );
}
