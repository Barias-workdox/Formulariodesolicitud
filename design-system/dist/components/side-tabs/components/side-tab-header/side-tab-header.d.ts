import { ReactElement, ReactNode } from 'react';
export type SideTabHeaderProps = {
    'data-testid'?: string;
    children: ReactNode;
    /** If is undefined the close button will be hidden */
    onClose?(): void;
};
/** Reusable component that renders a heading for a side tab */
export declare const SideTabHeader: ({ "data-testid": dataTestId, children, onClose, }: SideTabHeaderProps) => ReactElement;
