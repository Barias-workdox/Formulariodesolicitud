/**
 * A factory that renders either a "basic" ListItem or an "avatar" ListItem,
 * depending on the `kind` prop.
 */
export declare const ListItemFactory: import('react').ForwardRefExoticComponent<{
    'data-testid'?: string;
    dataTestId?: string;
} & Omit<import('./list-factory.interfaces').Item, "id"> & Pick<import('../list/components/list-item').ListItemProps, "overrides" | "aiGenerated"> & {
    onClick(): void;
} & import('react').RefAttributes<HTMLButtonElement>>;
