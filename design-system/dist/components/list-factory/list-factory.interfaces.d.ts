import { ReactNode } from 'react';
import { EmptyStateProps } from '../empty-state';
import { AvatarListItemProps } from '../list/components/avatar-list-item';
import { ListItemProps } from '../list/components/list-item';
import { WithTestId } from '../../interfaces/common.interfaces';
type KindSpecificProps = {
    kind?: 'basic';
    avatarProps?: never;
} | {
    kind?: 'avatar';
    avatarProps?: AvatarListItemProps['avatarProps'];
} | {
    kind?: 'group';
    avatarProps?: AvatarListItemProps['avatarProps'];
};
/**
 * A structure that represents an individual item in the list.
 *
 * @remarks
 * This includes type-specific properties determined by `kind`,
 * and an optional subtree of child items in `items`.
 */
export type Item = KindSpecificProps & {
    id: string | number;
    label: string;
    Icon?: ReactNode;
    checked?: boolean;
    disabled?: boolean;
    aiGenerated?: boolean;
    withCheckbox?: boolean;
    quantity?: number;
    items?: Item[];
};
export type ListItemFactoryProps = WithTestId & Omit<Item, 'id'> & Pick<ListItemProps, 'overrides' | 'aiGenerated'> & {
    onClick(): void;
};
export type ListFactoryPaginationProps = {
    isFetchingNextPage: boolean;
    onPageEnd(): void;
};
export type ListFactoryProps = WithTestId & {
    items: Item[];
    isFiltrable?: boolean;
    minWidth?: string;
    maxWidth?: string;
    maxHeight?: string;
    emptyStateProps?: EmptyStateProps;
    multi?: boolean;
    paginationProps?: ListFactoryPaginationProps;
    onItemClick(params: {
        item: Item;
        multi?: boolean;
    }): void;
} & ({
    isFiltrable: true;
    searchValue: string;
    onSearchValueChange(value: string): void;
} | {
    isFiltrable?: false;
    searchValue?: string;
    onSearchValueChange?(value: string): void;
});
export {};
