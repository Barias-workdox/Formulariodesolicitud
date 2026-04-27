import { PageHeaderBackgroundIcon } from './components/page-header-background-icon';
import { PageHeaderEndEnhancerWrapper } from './components/page-header-end-enhancer-wrapper';
import { PageHeaderLayout } from './components/page-header-layout';
import { PageHeaderPrimaryButton } from './components/page-header-primary-button';
import { PageHeaderSearch } from './components/page-header-search';
import { PageHeaderToolbar } from './components/page-header-toolbar';

import type { PageHeaderLayoutProps } from './components/page-header-layout';

export type PageHeaderProps = PageHeaderLayoutProps;

/**
 * A component that renders a page header.
 */
const PageHeader = ({
  startEnhancer,
  endEnhancer,
  toolbar,
  title,
  showBorder,
}: PageHeaderProps): JSX.Element => {
  return (
    <PageHeaderLayout
      title={title}
      endEnhancer={endEnhancer}
      startEnhancer={startEnhancer}
      toolbar={toolbar}
      showBorder={showBorder}
    />
  );
};

PageHeader.BackgroundIcon = PageHeaderBackgroundIcon;
PageHeader.PrimaryButton = PageHeaderPrimaryButton;
PageHeader.EndEnhancerWrapper = PageHeaderEndEnhancerWrapper;
PageHeader.Search = PageHeaderSearch;
PageHeader.Toolbar = PageHeaderToolbar;

export { PageHeader };
