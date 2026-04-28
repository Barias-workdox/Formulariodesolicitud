import { FileDownloadStatus } from '../..';
export interface FileItemEndEnhancerProps {
    fileStatus: FileDownloadStatus;
    isHovered: boolean;
    onClick(): void;
}
/** Renders the end enhancer slot of the file item based on the current status and hover state */
export declare const FileItemEndEnhancer: ({ fileStatus, isHovered, onClick, }: FileItemEndEnhancerProps) => JSX.Element | null;
