import { ReactElement } from 'react';
import { FilterProps } from '../filter.interfaces';
import { Overrides } from '../../../themes/theme.interfaces';
export type FilterValueTextProps = Pick<FilterProps, 'multi' | 'value' | 'tooltipText' | 'label' | 'minWidth' | 'maxWidth'> & {
    overrides?: Overrides;
};
/**
 * Renders a truncated text component displaying the selected filter value(s) or a default label.
 */
export declare const FilterValueText: ({ value, multi, label, tooltipText, minWidth, maxWidth, }: FilterValueTextProps) => ReactElement;
