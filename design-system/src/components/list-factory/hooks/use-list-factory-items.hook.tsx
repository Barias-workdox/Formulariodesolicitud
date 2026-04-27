import type { ReactElement } from 'react';

import { noop } from '@utils/noop';

import { ListItemFactory } from '../list-item-factory';

import type { Item } from '../list-factory.interfaces';

interface ItemHandlers {
  group(): ReactElement[];
  avatar(): ReactElement;
  basic(): ReactElement;
}

interface UseListFactoryItemsReturn {
  /**
   * Function that renders the list items as an array of React elements
   */
  renderListItems(): ReactElement[];
}

export interface UseListFactoryProps {
  dataTestId?: string;
  /**
   * Array of items to be rendered in the list
   * Each item contains properties like id, label, checked, disabled, etc.
   */
  items: Item[];
  /**
   * Callback function triggered when an item is clicked
   */
  handleItemClick(item: Item): void;
}

/**
 * A hook that provides a factory for rendering list items.
 */
export const useListFactoryItems = ({
  dataTestId,
  items,
  handleItemClick,
}: UseListFactoryProps): UseListFactoryItemsReturn => {
  /**
   * Renders the list items based on the provided items array.
   */
  const renderListItems = (): ReactElement[] => {
    return items
      .map((item, index) => {
        const {
          id,
          label,
          checked = false,
          disabled = false,
          Icon,
          withCheckbox,
          kind = 'basic',
          avatarProps,
          quantity,
          aiGenerated,
          items: subItems,
        } = item;

        const itemDataTestId = `${dataTestId}__item--${index}`;

        const commonProps = {
          label,
          checked,
          disabled,
          kind,
          aiGenerated,
          quantity,
          withCheckbox,
          onClick: (): void => handleItemClick(item),
        } as const;

        const itemHandlers: ItemHandlers = {
          group: (): ReactElement[] => {
            const mappedSubItems = (subItems || []).map((subItem) => {
              const itemAvatarProps =
                subItem.kind === 'avatar'
                  ? { ...subItem.avatarProps, name: subItem.label }
                  : undefined;

              return (
                <ListItemFactory
                  key={subItem.id}
                  dataTestId={itemDataTestId}
                  {...{
                    label: subItem.label,
                    checked: subItem.checked,
                    disabled: subItem.disabled,
                    kind: subItem.kind,
                    quantity: subItem.quantity,
                    withCheckbox: subItem.withCheckbox,
                    Icon: subItem.Icon,
                    onClick: (): void => handleItemClick(subItem),
                    ...(itemAvatarProps && { avatarProps: itemAvatarProps }),
                  }}
                />
              );
            });

            return [
              mappedSubItems.length > 0 && (
                <ListItemFactory
                  key={id}
                  dataTestId={itemDataTestId}
                  {...commonProps}
                  quantity={subItems?.length}
                  label={label.toUpperCase()}
                  onClick={noop}
                />
              ),
              ...mappedSubItems,
            ];
          },

          avatar: (): ReactElement => (
            <ListItemFactory
              key={id}
              dataTestId={itemDataTestId}
              {...commonProps}
              avatarProps={{ ...avatarProps, name: label }}
            />
          ),

          basic: (): ReactElement => (
            <ListItemFactory
              key={id}
              dataTestId={itemDataTestId}
              {...commonProps}
              Icon={Icon}
            />
          ),
        };

        return (itemHandlers[kind] || itemHandlers.basic)();
      })
      .flat();
  };

  return {
    renderListItems,
  };
};
