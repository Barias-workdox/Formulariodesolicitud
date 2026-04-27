import { Document, Download, TrashCan } from '@carbon/icons-react';

import { Button, IconButton } from '@components/button';
import { Text } from '@components/text';
import { useCss } from '@components/utils/hooks/use-css';

import { buttonOverrides, styles } from './document-download.styles';

import type { FilePickerProps } from '../../file-picker';

export type DocumentDownloadProps = Pick<
  FilePickerProps,
  'data-testid' | 'filename' | 'isDeleting' | 'showDeleteButton' | 'onDownload' | 'onDelete'
>;

/** Renders a downloadable document button with an optional delete button */
export const DocumentDownload = ({
  'data-testid': dataTestId,
  filename,
  showDeleteButton,
  isDeleting,
  onDownload,
  onDelete,
}: DocumentDownloadProps): JSX.Element => {
  const { containerStyles, deleteButtonContainerStyles } = useCss(styles);

  return (
    <div
      data-testid={dataTestId}
      className={containerStyles}
    >
      <Button
        data-testid={`${dataTestId}--download-button`}
        fullWidth
        overrides={buttonOverrides}
        size="32px"
        kind="link-secondary"
        startEnhancer={Document}
        endEnhancer={Download}
        onClick={onDownload}
      >
        <Text
          variant="bodySmall"
          textOverflow="ellipsis"
          overflow="hidden"
          whiteSpace="nowrap"
          margin={0}
        >
          {filename}
        </Text>
      </Button>

      {showDeleteButton && (
        <div className={deleteButtonContainerStyles}>
          <IconButton
            data-testid={`${dataTestId}--delete-button`}
            size="32px"
            disabled={isDeleting}
            isLoading={isDeleting}
            onClick={onDelete}
          >
            <TrashCan />
          </IconButton>
        </div>
      )}
    </div>
  );
};
