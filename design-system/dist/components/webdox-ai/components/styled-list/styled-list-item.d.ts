import { ReactElement } from 'react';
import { ListProps } from 'baseui/list';
export type ListItemKind = 'primary';
export interface StyledListItemProps extends ListProps {
    'data-testid': string;
    /** @defaultValue `primary` */
    kind?: ListItemKind;
}
/**
 * Special list item with several styles for each state.
 */
export declare const StyledListItem: ({ overrides, ...restProps }: StyledListItemProps) => ReactElement;
