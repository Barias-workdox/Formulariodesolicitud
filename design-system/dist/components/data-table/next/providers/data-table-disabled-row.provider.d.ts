type DataTableDisabledRowProviderProps = {
    children: React.ReactNode;
    isRowDisabled: boolean;
    disableReason?: string;
};
/** Provider for managing disabled state of data table rows */
export declare const DataTableDisabledRowProvider: ({ children, isRowDisabled, disableReason, }: DataTableDisabledRowProviderProps) => JSX.Element;
export {};
