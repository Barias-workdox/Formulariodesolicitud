import { render, screen } from '@test/test-utils';

import { PageHeaderLayout } from '../components/page-header-layout';

import type { RenderType } from '@test/test-utils';

const titleMock = 'title-example';
const endEnhancerMock = 'end-enhancer-example';
const startEnhancerMock = 'start-enhancer-example';
const toolbarMock = 'toolbar-example';

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (): RenderType => {
  return render(
    <PageHeaderLayout
      title={titleMock}
      endEnhancer={endEnhancerMock}
      startEnhancer={startEnhancerMock}
      toolbar={toolbarMock}
    />,
  );
};

describe('PageHeaderLayout - tests', () => {
  test('should render the component correctly', () => {
    renderComponent();

    expect(screen.getByText(titleMock)).toBeInTheDocument();
    expect(screen.getByText(endEnhancerMock)).toBeInTheDocument();
    expect(screen.getByText(startEnhancerMock)).toBeInTheDocument();
    expect(screen.getByText(toolbarMock)).toBeInTheDocument();
  });
});
