import { ReactElement } from 'react';
import { FilterProps } from './filter.interfaces';
/**
 * A customizable filter component that displays a button with optional tags and a popover for additional content.
 * The filter supports single and multi-selection modes, and its appearance can be customized via overrides.
 */
export declare const Filter: ({ "data-testid": testId, size, kind, tooltipText, label, content, value, disabled, disabledReason, startEnhancer, overrides, hasInteractions, initialIsOpen, minWidth, maxWidth, popoverProps: { minWidth: $popoverMinWidth }, onClear, }: FilterProps) => ReactElement;
