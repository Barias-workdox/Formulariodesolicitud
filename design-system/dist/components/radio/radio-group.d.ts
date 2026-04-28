import { ALIGN } from 'baseui/radio';
export { ALIGN };
/**
 * A group of radio buttons with customizable options and labels.
 */
export declare const RadioGroup: import('react').ForwardRefExoticComponent<Omit<import('baseui/radio').RadioGroupProps, "overrides"> & {
    'data-testid'?: string;
    options?: unknown[];
    valueKey?: string;
    labelKey?: string;
    className?: string;
    children?: import('react').ReactNode[];
    rowGap?: import('styletron-standard').StyleObject["rowGap"];
    columnGap?: import('styletron-standard').StyleObject["columnGap"];
    overrides?: import('baseui/radio').RadioGroupProps["overrides"] & {
        Radio?: import('baseui/radio').RadioProps["overrides"];
    };
} & import('react').RefAttributes<HTMLElement>>;
