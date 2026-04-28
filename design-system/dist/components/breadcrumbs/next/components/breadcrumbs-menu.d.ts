import { BreadcrumbsMenuItem } from '../breadcrumbs.interfaces';
export interface BreadcrumbsMenuProps {
    dataTestId?: string;
    breadcrumbs: BreadcrumbsMenuItem[];
}
/**
 * A component to display a menu for the breadcrumbs.
 */
export declare const BreadcrumbsMenu: ({ dataTestId, breadcrumbs, }: BreadcrumbsMenuProps) => JSX.Element;
