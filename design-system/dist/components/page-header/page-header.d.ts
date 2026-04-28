import { PageHeaderSearch } from './components/page-header-search';
import { PageHeaderLayoutProps } from './components/page-header-layout';
export type PageHeaderProps = PageHeaderLayoutProps;
/**
 * A component that renders a page header.
 */
declare const PageHeader: {
    ({ startEnhancer, endEnhancer, toolbar, title, showBorder, }: PageHeaderProps): JSX.Element;
    BackgroundIcon: (props: import('./components/page-header-background-icon').PageHeaderBackgroundIconProps) => import('react').ReactElement;
    PrimaryButton: ({ dataTestId, children, ...rest }: import('./components/page-header-primary-button').PageHeaderPrimaryButtonProps) => import('react').ReactElement;
    EndEnhancerWrapper: import('styletron-react').StyletronComponent<"div", {}>;
    Search: typeof PageHeaderSearch;
    Toolbar: ({ "data-testid": dataTestId, itemsText, shouldRenderMobileFilters, itemsCounter, filters, actions, }: import('./components/page-header-toolbar').PageHeaderToolbarProps) => JSX.Element;
};
export { PageHeader };
