import { ReactElement } from 'react';
import { SelectProps } from './select.interfaces';
import { Option, Value } from 'baseui/select';
export type SelectOption = Option;
export type SelectValue = Value;
/**
 * DS Select component.
 *
 * Has two main props that can change its normal behavior and work along each other.
 *  - Creatable, which allows the user to add a new option besides the options array
 *  - Multi, allowing the user to select many options.
 *
 * Link: https://www.figma.com/file/eMhywyfWwKMjIyemY3PDoK/Design-System-Webdox-1.0?node-id=174%3A2567
 */
export declare const Select: ({ "data-testid": dataTestId, value, name, zIndex, className, placeholder, isBorderless, creatable, clearable, filterOutSelected, kind, valueKey, labelKey, maxDropdownHeight, overrides, onOpen, onChange, onClose, getOptionLabel, onCreate, onInputChange, filterOptions, options, ...rest }: SelectProps) => ReactElement;
