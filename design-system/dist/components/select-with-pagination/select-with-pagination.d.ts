import { ReactElement } from 'react';
import { SelectWithPaginationProps } from './select-with-pagination.interfaces';
/**
 * Select with a sensor to observe if the end of the list have been reached.
 * If the end has been reached, it calls the "onLoadMore" function.
 */
export declare const SelectWithPagination: ({ "data-testid": dataTestId, isLoadingMore, options, overrides, onLoadMore, ...rest }: SelectWithPaginationProps) => ReactElement;
