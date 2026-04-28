import { GetOverridesParams } from './select.interfaces';
import { SelectOverrides } from 'baseui/select';
/**
 * Get the select overrides customized by the Design System theme and kind
 */
export declare const getOverrides: ({ kind, zIndex, dataTestId, name, isBorderless, isOpen, options, }: GetOverridesParams) => SelectOverrides;
