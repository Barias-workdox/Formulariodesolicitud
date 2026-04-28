import { ListItemProps } from '../list-item/list-item.interfaces';
import { FileTypeIconProps } from '../../../file-type-icon';
export type FileListItemProps = ListItemProps & Pick<FileTypeIconProps, 'fileExtension'>;
/**
 * Component that integrates a file type icon with the `ListItem` component.
 * It provides a way to display a file type icon alongside a label, enhancing the list item with a visual representation
 * of the file type.
 */
export declare const FileListItem: import('react').ForwardRefExoticComponent<ListItemProps & Pick<FileTypeIconProps, "fileExtension"> & import('react').RefAttributes<HTMLButtonElement>>;
