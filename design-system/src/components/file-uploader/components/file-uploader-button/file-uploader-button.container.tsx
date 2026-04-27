import { useCallback, useMemo } from 'react';
import type { ReactElement } from 'react';

import { DocumentAdd, FolderAdd } from '@carbon/icons-react';

import { Popover } from '@components/popover';

import { StatefulMenu } from '../../../menu';
import { useTranslation } from '../../../utils';

import { FileUploaderButton } from './file-uploader-button';

import type { FileUploaderButtonProps } from './file-uploader-button';
import type { SelectionOption, SelectionType } from '../../interfaces';

export type FileUploaderButtonContainerProps = FileUploaderButtonProps & {
  directorySelection: boolean;
  onSelectionTypeChange(selectionType: SelectionType): void;
};

/**
 * Component wrapper that utilizes the `FileUploaderButton` component to provide a button
 * that allows the user to select files or folders.
 */
export const FileUploaderButtonContainer = ({
  'data-testid': dataTestId,
  directorySelection,
  selectedFiles,
  onSelectionTypeChange,
  onClick,
  ...buttonProps
}: FileUploaderButtonContainerProps): JSX.Element => {
  const { t } = useTranslation();

  const menuItems = useMemo(
    () => [
      {
        id: 'files',
        label: t('fileuploader.uploadFiles'),
        startEnhancer: <DocumentAdd />,
      },
      {
        id: 'folder',
        label: t('fileuploader.uploadFolder'),
        startEnhancer: <FolderAdd />,
      },
    ],
    [t],
  );

  /**
   * Handle an item selection on the popover menu
   */
  const handleOnItemSelect = useCallback(
    (item: SelectionOption, close: () => void): void => {
      close();
      onSelectionTypeChange(item.id);
    },
    [onSelectionTypeChange],
  );

  if (directorySelection) {
    return (
      <Popover
        placement="bottom"
        autoFocus={false}
        content={({ close }): ReactElement => (
          <StatefulMenu
            items={menuItems}
            onItemSelect={({ item }: { item: SelectionOption }): void =>
              handleOnItemSelect(item, close)
            }
          />
        )}
      >
        <span>
          <FileUploaderButton
            data-testid={dataTestId}
            text={t('fileuploader.selectFromPC')}
            selectedFiles={selectedFiles}
            {...buttonProps}
          />
        </span>
      </Popover>
    );
  }

  return (
    <FileUploaderButton
      {...buttonProps}
      data-testid={dataTestId}
      text={t('fileuploader.selectFromPC')}
      selectedFiles={selectedFiles}
      onClick={onClick}
    />
  );
};
