import { GetOverridesParams } from './select.interfaces';
import { SelectOverrides } from 'baseui/select';
/**
 * Get the select overrides customized by the Design System theme and kind
 */
export declare const getSelectOverrides: ({ kind, zIndex, dataTestId, isHovered, size, options, isInputDirty, leading, width, name, onClear, }: GetOverridesParams) => SelectOverrides;
/** @deprecated use instead getSelectOverrides */
export declare const getOverrides: ({ kind, zIndex, dataTestId, isHovered, size, options, isInputDirty, leading, width, name, onClear, }: GetOverridesParams) => SelectOverrides;
