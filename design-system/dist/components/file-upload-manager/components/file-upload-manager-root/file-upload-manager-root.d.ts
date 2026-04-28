import { ForwardedRef, ReactElement, ReactNode } from 'react';
import { FileUploadManagerTitleProps } from '../file-upload-manager-title';
import { ManagerPosition } from '../../contexts/file-uploader-manager.context';
import { WithTestId } from '../../../../interfaces/common.interfaces';
interface ActionIconsProps {
    position: ManagerPosition;
    onCloseUpload?(): void;
}
export interface FileUploadManagerRootProps extends WithTestId<FileUploadManagerTitleProps>, ActionIconsProps {
    initialState: boolean;
    children: ReactNode;
    rootRef: ForwardedRef<HTMLDivElement>;
    headerRef: ForwardedRef<HTMLDivElement>;
    margin?: number;
}
/**
 * A collapsible content component with a title and body.
 */
export declare const FileUploadManagerRoot: ({ "data-testid": dataTestId, initialState, children, files, status, position, headerRef, rootRef, margin, onCloseUpload, }: FileUploadManagerRootProps) => ReactElement;
export {};
