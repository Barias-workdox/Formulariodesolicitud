import { Item, ListFactoryProps } from '../../list-factory/list-factory.interfaces';
import { PopoverPlacementType } from '../../popover';
import { PopoverProps } from 'baseui/popover';
export type DropdownProps<T extends Item> = Pick<PopoverProps, 'triggerType' | 'overrides' | 'showArrow'> & {
    options: T[];
    multi?: boolean;
    placement?: PopoverPlacementType;
    listProps?: Pick<ListFactoryProps, 'minWidth' | 'maxHeight' | 'maxWidth' | 'data-testid'>;
    selectedItems?: (number | string)[];
    zIndex?: number;
    onChange?(selectedIds: T['id'][]): void;
};
