import { ReactNode, default as React } from 'react';
import { HeaderProps } from './header.interfaces';
export interface HeaderProviderProps {
    children: ReactNode;
    defaultProps?: HeaderProps;
}
/**
 * Header Provider component to supply header context to its children.
 */
export declare const HeaderProvider: React.FC<HeaderProviderProps>;
/**
 * Custom hook to access Header context.
 */
export declare const useHeader: () => HeaderProps;
