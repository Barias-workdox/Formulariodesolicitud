import { PropsWithChildren, ReactElement } from 'react';
import { FilterProps } from '../filter.interfaces';
import { WithTestId } from '../../../interfaces/common.interfaces';
export type FilterTagProps = WithTestId & PropsWithChildren<Pick<FilterProps, 'tooltipText'>>;
/**
 * Renders a tag indicating the number of selected filters when multiple selections are allowed.
 * The tag is wrapped in a tooltip to provide additional information on hover.
 */
export declare const FilterTag: ({ "data-testid": testId, children, tooltipText, }: FilterTagProps) => ReactElement;
