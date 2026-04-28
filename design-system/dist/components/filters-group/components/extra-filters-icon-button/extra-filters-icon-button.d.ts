import { FiltersGroupProps } from '../../filters-group';
import { FilterConfig } from '../../filters-group.interfaces';
export type ExtraFiltersIconButtonProps = Pick<FiltersGroupProps, 'addVisibleFilter'> & {
    tooltipText?: string;
    hiddenFilters: FilterConfig[];
    disabled?: boolean;
};
/**
 * Component that renders an icon button which shows a popover menu of hidden filters when clicked.
 *
 * It uses hidden filters and to add them back to the visible state. The popover contains
 * a menu generated from the hidden filters, allowing users to select and reveal them.
 *
 * The button and popover are only displayed if there are hidden filters available.
 */
export declare const ExtraFiltersIconButton: ({ hiddenFilters, disabled, tooltipText, addVisibleFilter, }: ExtraFiltersIconButtonProps) => JSX.Element;
