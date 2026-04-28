import { RadioGroupProps, RadioOverrides } from 'baseui/radio';
/** All override props for the Radio Group component */
export declare const radioOverrides: (dataTestId: string) => RadioOverrides;
/**
 * Retrieves overrides for the Radio Group component
 */
export declare const getRadioGroupOverrides: ({ rowGap, columnGap, dataTestId, ref, }: Record<string, unknown>) => RadioGroupProps["overrides"];
