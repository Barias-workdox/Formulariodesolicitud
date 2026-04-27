import type { Item, ListFactoryProps } from '@components/list-factory/list-factory.interfaces';
import type { PopoverPlacementType } from '@components/popover';
import type { PopoverProps } from 'baseui/popover';

export type DropdownProps<T extends Item> = Pick<
  PopoverProps,
  'triggerType' | 'overrides' | 'showArrow'
> & {
  options: T[];
  multi?: boolean;
  placement?: PopoverPlacementType;
  listProps?: Pick<ListFactoryProps, 'minWidth' | 'maxHeight' | 'maxWidth' | 'data-testid'>;
  selectedItems?: (number | string)[];
  zIndex?: number;
  onChange?(selectedIds: T['id'][]): void;
};
