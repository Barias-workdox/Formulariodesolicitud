import { SharedProps } from '../../input/next';
import { StyleOverrideProps } from '../../../themes/theme.interfaces';
import { StyleObject } from 'styletron-react';
/** Flag container styles override */
export declare const rootStyles: () => StyleObject;
/** Flag container styles override */
export declare const flagContainerStyles: ({ $size }: StyleOverrideProps<SharedProps>) => StyleObject;
/** Dial code styles override */
export declare const dialCodeStyles: ({ $theme, $disabled, $size, }: StyleOverrideProps<SharedProps>) => StyleObject;
/** Country select dropdown list item styles override */
export declare const countrySelectDropdownListItemStyles: ({ $theme, }: StyleOverrideProps<SharedProps>) => StyleObject;
/** Country select dropdown name column styles override */
export declare const countrySelectDropdownNameColumnStyles: ({ $theme, $size, }: StyleOverrideProps<SharedProps>) => StyleObject;
/** Country select dropdown dial code styles override */
export declare const countrySelectDropdownDialcodeColumnStyles: ({ $theme, $size, }: StyleOverrideProps<SharedProps>) => StyleObject;
/** Country select dropdown flag column styles override */
export declare const countrySelectDropdownFlagColumnStyles: () => StyleObject;
