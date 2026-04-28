import { ReactNode } from 'react';
export interface BreadcrumbsItemProps {
    dataTestId?: string;
    children: ReactNode;
    label: string;
    isLast?: boolean;
    isFirst?: boolean;
    onClick?(): void;
}
/**
 * A component to represent a breadcrumb item.
 */
export declare const BreadcrumbsItem: ({ dataTestId, children, isLast, isFirst, onClick, ...rest }: BreadcrumbsItemProps) => JSX.Element;
