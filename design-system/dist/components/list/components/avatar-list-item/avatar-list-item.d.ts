import { ListItemProps } from '../list-item/list-item.interfaces';
import { AvatarProps } from '../../../avatar';
export type AvatarListItemProps = ListItemProps & {
    avatarProps: Pick<AvatarProps, 'name'> & Partial<Pick<AvatarProps, 'backgroundColor' | 'initials' | 'showTooltip' | 'disabled' | 'overrides'>>;
} & {
    zIndex?: number;
};
/**
 * Component that integrates an `Avatar` component with the `ListItem` component.
 * It provides a way to display an avatar alongside a label, enhancing the list item with a visual representation
 * of the avatar.
 */
export declare const AvatarListItem: import('react').ForwardRefExoticComponent<ListItemProps & {
    avatarProps: Pick<AvatarProps, "name"> & Partial<Pick<AvatarProps, "backgroundColor" | "initials" | "showTooltip" | "disabled" | "overrides">>;
} & {
    zIndex?: number;
} & import('react').RefAttributes<HTMLButtonElement>>;
