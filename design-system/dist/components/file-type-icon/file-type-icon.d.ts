import { FileType, FileTypeIconSize } from './file-type-icon.interfaces';
import { WithTestId } from '../../interfaces/common.interfaces';
export interface FileTypeIconProps extends WithTestId {
    fileExtension?: FileType;
    size: FileTypeIconSize;
    isDisabled?: boolean;
    ariaHidden?: boolean;
}
/**
 * Displays an icon representing a specific file type based on its extension.
 * If the file extension is unknown, it displays a default unknown file icon.
 */
export declare const FileTypeIcon: ({ "data-testid": dataTestIdDeprecated, dataTestId: dataTestId, fileExtension, size, isDisabled, ariaHidden, }: FileTypeIconProps) => JSX.Element;
