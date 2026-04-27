import { DataTableDisabledRowContext } from '../contexts';

type DataTableDisabledRowProviderProps = {
  children: React.ReactNode;
  isRowDisabled: boolean;
  disableReason?: string;
};

/** Provider for managing disabled state of data table rows */
export const DataTableDisabledRowProvider = ({
  children,
  isRowDisabled,
  disableReason,
}: DataTableDisabledRowProviderProps): JSX.Element => {
  return (
    <DataTableDisabledRowContext.Provider value={{ isRowDisabled, disableReason }}>
      {children}
    </DataTableDisabledRowContext.Provider>
  );
};
