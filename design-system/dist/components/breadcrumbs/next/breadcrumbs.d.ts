import { ReactNode } from 'react';
import { BreadcrumbsItemProps } from './components/breadcrumbs-item';
import { BreadcrumbsProps as BaseBreadcrumbsProps } from 'baseui/breadcrumbs';
export interface BreadcrumbsProps extends BaseBreadcrumbsProps {
    dataTestId?: string;
    children?: ReactNode;
}
/**
 * A component to display a breadcrumb trail for navigation.
 */
declare const Breadcrumbs: {
    ({ dataTestId, children, overrides, ...rest }: BreadcrumbsProps): JSX.Element;
    Item: ({ dataTestId, children, isLast, isFirst, onClick, ...rest }: BreadcrumbsItemProps) => JSX.Element;
};
export { Breadcrumbs };
