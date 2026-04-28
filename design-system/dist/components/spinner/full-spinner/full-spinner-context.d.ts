import { PropsWithChildren, ReactElement } from 'react';
interface FullSpinnerContextType {
    showFullSpinner(): void;
    closeFullSpinner(): void;
}
/**
 * Full spinner provider to be wrapped in the app.
 * Useful to show/close the full spinner with a hook.
 */
export declare const FullSpinnerProvider: ({ children }: PropsWithChildren<object>) => ReactElement;
/**
 * Hook to show / close the full spinner.
 * Uses the full spinner context to get its values and returns de the show/close functions.
 */
export declare const useFullSpinner: () => FullSpinnerContextType;
export {};
