import { RadioGroupControlContainerProps } from '../../../forms';
import { RadioGroupProps } from '../../../radio/radio-group.interfaces';
import { StyleOverrideProps } from '../../../../themes/theme.interfaces';
import { StyleObject } from 'styletron-react';
/**
 * Styles for the sectioned modal header
 */
export declare const getSectionedModalHeaderStyles: ({ $theme }: StyleOverrideProps) => StyleObject;
/**
 * Styles for the sectioned modal body
 */
export declare const getStyledSectionedModalBodyStyles: ({ $theme }: StyleOverrideProps) => StyleObject;
/**
 * Styles for the sectioned modal footer
 */
export declare const getSectionedModalFooterStyles: ({ $theme }: StyleOverrideProps) => StyleObject;
export declare const radioGroupOverrides: RadioGroupProps['overrides'];
export declare const formControlOverrides: RadioGroupControlContainerProps['formControlOverrides'];
