import { FileDownloadManagerProps } from '../../file-download-manager.interfaces';
type Status = NonNullable<FileDownloadManagerProps['status']>;
export interface HeaderStatusProps {
    status: Status;
    documentCount: number;
}
/** Component to display the header status of the file download manager */
export declare const HeaderStatus: ({ status, documentCount }: HeaderStatusProps) => React.ReactNode;
export {};
