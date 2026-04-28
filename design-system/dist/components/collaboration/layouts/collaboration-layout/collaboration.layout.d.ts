import { ReactElement, ReactNode } from 'react';
export interface CollaborationLayoutProps {
    Header: ReactNode;
    Banner: ReactNode;
    children: ReactNode;
    showBanner: boolean;
}
/** Layout to use in the collaboration organisms */
export declare const CollaborationLayout: ({ Header, Banner, children, showBanner, }: CollaborationLayoutProps) => ReactElement;
