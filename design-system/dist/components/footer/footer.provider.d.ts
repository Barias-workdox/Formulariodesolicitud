import { ReactNode, default as React } from 'react';
import { FooterProps } from './footer.interfaces';
export interface FooterProviderProps {
    children: ReactNode;
    defaultProps?: FooterProps;
}
/**
 * Footer Provider component to supply footer context to its children.
 */
export declare const FooterProvider: React.FC<FooterProviderProps>;
/**
 * Custom hook to access Footer context.
 */
export declare const useFooter: () => FooterProps;
