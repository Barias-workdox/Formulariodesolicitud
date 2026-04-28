import { FileUploadManagerStatus, FileUploadManagerTabType } from '../contexts/file-uploader-manager.context';
import { CarbonIconType } from '@carbon/icons-react/lib/CarbonIcon';
interface EmptyStateDetails {
    icon: CarbonIconType;
    title: string;
    description?: string;
}
interface UseEmptyStateDetailsProps {
    activeTab: FileUploadManagerTabType;
    status: FileUploadManagerStatus;
}
type UseEmptyStateDetailsResult = EmptyStateDetails;
/**
 * Get the details for the empty state based on the status of the file upload manager.
 */
export declare const useEmptyStateDetails: ({ activeTab, status, }: UseEmptyStateDetailsProps) => UseEmptyStateDetailsResult;
export {};
