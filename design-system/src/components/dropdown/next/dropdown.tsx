import { useState } from 'react';
import type { PropsWithChildren, ReactElement } from 'react';

import { TRIGGER_TYPE } from 'baseui/popover';

import { ListFactory } from '@components/list-factory';
import { useListFactoryUtils } from '@components/list-factory/hooks/use-list-factory-utils';
import { Popover } from '@components/popover';
import { POPOVER_Z_INDEX } from '@components/popover/popover.constants';
import { PLACEMENT } from '@constants/placement.constants';

import { DROPDOWN_MIN_WIDTH } from './dropdown.constants';

import type { DropdownProps } from './dropdown.interfaces';
import type { Item } from '@components/list-factory/list-factory.interfaces';

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
export const Dropdown = <T extends Item>({
  placement = PLACEMENT.BOTTOM_RIGHT,
  triggerType = TRIGGER_TYPE.click,
  overrides,
  children,
  multi = false,
  options,
  showArrow = false,
  selectedItems,
  listProps = {
    minWidth: `${DROPDOWN_MIN_WIDTH}px`,
  },
  zIndex = POPOVER_Z_INDEX,
  onChange,
}: PropsWithChildren<DropdownProps<T>>): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [selectedIds, setSelectedIds] = useState<T['id'][] | undefined>(selectedItems);

  /**
   * Handles the selection of dropdown options.
   *
   * Updates the internal state and notifies the parent component through onChange callback.
   */
  const handleSelectOption = (checkedIds: T['id'][]): void => {
    setSelectedIds(checkedIds);
    onChange?.(checkedIds);
  };

  const { options: listOptions, onOptionClick } = useListFactoryUtils({
    root: options,
    pathIds: [],
    checkedIds: selectedIds,
    searchValue,
    onChange: ({ checkedIds }) => handleSelectOption(checkedIds),
  });

  return (
    <Popover
      zIndex={zIndex}
      placement={placement}
      accessibilityType="menu"
      triggerType={triggerType}
      showArrow={showArrow}
      overrides={overrides}
      content={(): ReactElement => (
        <ListFactory
          {...listProps}
          items={listOptions}
          searchValue={searchValue}
          onItemClick={({ item }) => onOptionClick({ item, multi })}
          onSearchValueChange={setSearchValue}
        />
      )}
    >
      {children}
    </Popover>
  );
};
