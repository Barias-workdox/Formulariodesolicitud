import { FiltersGroupProps } from '../../filters-group';
import { WithTestId } from '../../../../interfaces/common.interfaces';
type CleanAllFiltersButtonProps = WithTestId & Pick<FiltersGroupProps, 'onClearAllFilters'>;
/**
 * Component that renders a button to clear all filters in a filtering context.
 * This button is displayed conditionally based on the `showClearAllFiltersButton` value
 * from the filters group context.
 */
export declare const CleanAllFiltersButton: ({ dataTestId, onClearAllFilters, }: CleanAllFiltersButtonProps) => JSX.Element;
export {};
