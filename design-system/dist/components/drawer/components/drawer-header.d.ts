import { PropsWithChildren, ReactNode } from 'react';
export type DrawerHeaderProps = PropsWithChildren<{
    'data-testid'?: string;
    icon?: ReactNode;
    title: ReactNode;
    onClose?(params?: unknown): void;
}>;
/** Styled drawer header component */
export declare const DrawerHeader: ({ "data-testid": dataTestId, children, onClose, icon, title, }: DrawerHeaderProps) => JSX.Element;
