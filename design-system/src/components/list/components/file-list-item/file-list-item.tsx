import { forwardRef } from 'react';

import { FileTypeIcon } from '@components/file-type-icon';
import { DEFAULT_ICON_SIZE } from '@components/file-type-icon/file-type-icon.constants';

import { ListItem } from '../list-item';
import { StyledListItemIconInner } from '../list-item/list-item.styles';

import type { ListItemProps } from '../list-item/list-item.interfaces';
import type { FileTypeIconProps } from '@components/file-type-icon';

export type FileListItemProps = ListItemProps & Pick<FileTypeIconProps, 'fileExtension'>;

/**
 * Component that integrates a file type icon with the `ListItem` component.
 * It provides a way to display a file type icon alongside a label, enhancing the list item with a visual representation
 * of the file type.
 */
export const FileListItem = forwardRef<HTMLButtonElement, FileListItemProps>(function _FileListItem(
  { 'data-testid': dataTestId, fileExtension, startEnhancer, ...rest },
  ref,
): JSX.Element {
  return (
    <ListItem
      ref={ref}
      dataTestId={dataTestId}
      {...rest}
      startEnhancer={
        <StyledListItemIconInner>
          {startEnhancer}
          <FileTypeIcon
            fileExtension={fileExtension}
            data-testid={`${dataTestId}--file-icon-${fileExtension}`}
            size={DEFAULT_ICON_SIZE}
          />
        </StyledListItemIconInner>
      }
    />
  );
});
