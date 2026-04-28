import { ReactNode } from 'react';
import { WithTestId } from '../../../../interfaces/common.interfaces';
export interface PageHeaderToolbarProps extends WithTestId {
    /** If the string is set, overrides the default message with the format **5 items**. */
    itemsText?: string;
    /** If `true`, the filters can be rendered in mobile. Defaults to `false` */
    shouldRenderMobileFilters?: boolean;
    itemsCounter?: number;
    filters?: ReactNode;
    actions?: ReactNode;
}
/**
 * `PageHeaderToolbar` is a component that provides a search bar for mobile devices,
 * filters, and an item counter, with additional context-based behavior.
 */
export declare const PageHeaderToolbar: ({ "data-testid": dataTestId, itemsText, shouldRenderMobileFilters, itemsCounter, filters, actions, }: PageHeaderToolbarProps) => JSX.Element;
