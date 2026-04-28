import { FileUploadManagerTabType } from '../../contexts/file-uploader-manager.context';
import { TabsCustomProps, TabsProps } from '../../../tabs';
export interface TabLabelProps {
    label: FileUploadManagerTabType;
    counter: number;
}
export interface FileUploadManagerTabsProps {
    dataTestId?: string;
    tabs: TabLabelProps[];
    activeTab: string;
    onChange: TabsProps['onChange'];
}
/** gets the overrides for the tabs used in file upload manager */
export declare const getTabsOverrides: () => TabsCustomProps["overrides"];
/**
 * Display the tabs for the file upload manager.
 */
export declare const FileUploadManagerTabs: ({ dataTestId, activeTab, tabs, onChange, }: FileUploadManagerTabsProps) => JSX.Element;
