import { PropsWithChildren } from 'react';
import { DropdownProps } from './dropdown.interfaces';
import { Item } from '../../list-factory/list-factory.interfaces';
/**
 * A dropdown component that displays a list of selectable options within a popover.
 *
 * T - Extends the base Item type for custom option types
 *
 * @example
 * ```tsx
 * <Dropdown
 *   placement={PLACEMENT.BOTTOM_RIGHT}
 *   triggerType={TRIGGER_TYPE.click}
 *   multi // if you want to select multiple options
 *   options={[
 *     { id: '1', label: 'Option 1', disabled: false, withCheckbox: true, kind: 'basic' },
 *     { id: '2', label: 'Option 2', disabled: false, withCheckbox: false, kind: 'avatar' },
 *   ]}
 *   onChange={(selectedIds) => console.log(selectedIds)}
 *   listProps={{
 *    minWidth: `${DROPDOWN_MIN_WIDTH}px`,
 *   }}
 * selectedItems=['1', '2']
 * >
 *   <Button>Open Dropdown</Button>
 * </Dropdown>
 * ```
 *
 * @returns A dropdown component with searchable and selectable options
 */
export declare const Dropdown: <T extends Item>({ placement, triggerType, overrides, children, multi, options, showArrow, selectedItems, listProps, zIndex, onChange, }: PropsWithChildren<DropdownProps<T>>) => JSX.Element;
