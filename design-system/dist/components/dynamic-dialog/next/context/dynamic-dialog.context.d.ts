import { DynamicDialogContextValue } from '../dynamic-dialog.interfaces';
/**
 * Hook to access the DynamicDialog context
 */
export declare const useDynamicDialog: () => DynamicDialogContextValue;
export declare const DynamicDialogProvider: import('react').Provider<DynamicDialogContextValue | undefined>;
