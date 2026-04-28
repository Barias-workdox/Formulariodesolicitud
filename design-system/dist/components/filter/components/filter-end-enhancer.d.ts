import { ReactElement } from 'react';
import { FilterProps } from '../filter.interfaces';
import { WithTestId } from '../../../interfaces/common.interfaces';
export type FilterEndEnhancerProps = WithTestId<Pick<FilterProps, 'disabled' | 'onClear'> & {
    isActive: boolean;
}>;
/**
 * Renders a clear button or a chevron down icon based on the `isActive` prop.
 * When active, clicking the clear button triggers the `onClear` callback.
 */
export declare const FilterEndEnhancer: ({ "data-testid": testId, isActive, disabled, onClear, }: FilterEndEnhancerProps) => ReactElement;
