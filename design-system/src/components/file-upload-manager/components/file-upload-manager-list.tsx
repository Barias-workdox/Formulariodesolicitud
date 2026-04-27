import { useMemo } from 'react';

import { EmptyState } from '@components/empty-state/next';
import {
  FILES_LIST_ITEM_HEIGHT,
  FILES_LIST_MAX_HEIGHT,
} from '@components/file-upload-manager/file-upload-manager.constants';
import {
  getListMinHeight,
  sortByUploadingFirst,
} from '@components/file-upload-manager/file-upload-manager.utils';
import { themedStyled } from '@themes/utilities';

import { useEmptyStateDetails } from '../hooks/use-empty-state-details';

import { FileItem } from './file-item/file-item';

import type {
  FileUploadManagerStatus,
  FileUploadManagerTabType,
} from '../contexts/file-uploader-manager.context';
import type { FileUploadItem } from '@components/file-upload-manager/file-upload-manager.interfaces';

export interface FileUploadManagerListProps {
  dataTestId?: string;
  activeTab: FileUploadManagerTabType;
  files: FileUploadItem[];
  status: FileUploadManagerStatus;
}

export const StyledFilesList = themedStyled<'div', { $minHeight?: number }>(
  'div',
  ({ $minHeight }) => ({
    maxHeight: `${FILES_LIST_MAX_HEIGHT}px`,
    minHeight: $minHeight ? `${$minHeight}px` : `${FILES_LIST_ITEM_HEIGHT}px`,
    overflowY: 'auto',
  }),
);

export const StyledEmptyStateWrapper = themedStyled('div', {
  height: `${FILES_LIST_MAX_HEIGHT}px`,
  display: 'flex',
  alignItems: 'center',
});

/**
 * Component for displaying a list of files or empty state in the file upload manager
 */
export function FileUploadManagerList({
  dataTestId,
  files,
  activeTab,
  status,
}: FileUploadManagerListProps): JSX.Element {
  const { description, icon, title } = useEmptyStateDetails({ activeTab, status });

  const sortedFiles = useMemo(() => files.sort(sortByUploadingFirst), [files]);
  const minHeight = useMemo(() => getListMinHeight(files.length), [files.length]);

  return (
    <StyledFilesList $minHeight={minHeight}>
      {sortedFiles.length === 0 ? (
        <StyledEmptyStateWrapper>
          <EmptyState
            dataTestId={`${dataTestId}--empty-state`}
            Icon={icon}
            description={description}
            title={title}
            backgroundColor="neutralWashed"
            iconColor="neutral"
          />
        </StyledEmptyStateWrapper>
      ) : (
        sortedFiles.map((file) => (
          <FileItem
            data-testid={`${dataTestId}--file-item--${file.id}`}
            key={file.id}
            {...file}
          />
        ))
      )}
    </StyledFilesList>
  );
}
