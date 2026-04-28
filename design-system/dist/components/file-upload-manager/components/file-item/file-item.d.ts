import { ReactElement } from 'react';
import { FileUploadItem } from '../../file-upload-manager.interfaces';
import { WithTestId } from '../../../../interfaces/common.interfaces';
export type FileItemProps = WithTestId<FileUploadItem>;
/**
 * Component that renders a single file item in the upload manager
 */
export declare function FileItem(props: FileItemProps): ReactElement;
