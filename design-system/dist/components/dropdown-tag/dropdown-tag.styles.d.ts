import { ColorGroup, DropdownTagOverridesParams, SupportedKind } from './dropdown-tag.interfaces';
import { MenuOverrides } from 'baseui/menu';
import { TagOverrides } from 'baseui/tag';
/** Reusable utility to get the selected color by kind */
export declare const getColors: (kind: SupportedKind) => ColorGroup;
/** Styled DropdownTag overrides */
export declare const dropdownTagOverrides: ({ dataTestId, kind, disabled, }: DropdownTagOverridesParams) => TagOverrides;
/** Styled Menu overrides for DropdownTag component */
export declare const menuOverrides: MenuOverrides;
