import { ReactNode } from 'react';
import { RadioGroupProps as BaseRadioGroupProps, RadioProps } from 'baseui/radio';
import { StyleObject } from 'styletron-standard';
export type RadioGroupProps = Omit<BaseRadioGroupProps, 'overrides'> & {
    'data-testid'?: string;
    /**
     * Used to create the radio group in a declarative way with each radio supplied as an object in the array.
     * The default and common use case.
     * Check the children property to override the Radio component
     */
    options?: unknown[];
    valueKey?: string;
    labelKey?: string;
    className?: string;
    /**
     * Used to create the radio group with custom Radio components.
     * Only required for uncommon cases, for the default one check the options property
     */
    children?: ReactNode[];
    /** Spacing between rows */
    rowGap?: StyleObject['rowGap'];
    /** Spacing between columns */
    columnGap?: StyleObject['columnGap'];
    overrides?: BaseRadioGroupProps['overrides'] & {
        Radio?: RadioProps['overrides'];
    };
};
