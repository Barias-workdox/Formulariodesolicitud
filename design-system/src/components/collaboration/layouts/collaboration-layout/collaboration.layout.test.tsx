import { render, screen } from '@test/test-utils';

import { CollaborationLayout } from './collaboration.layout';

import type { CollaborationLayoutProps } from './collaboration.layout';
import type { RenderType } from '@test/test-utils';

const mockContentText = 'Example content';
const mockHeaderText = 'Example header';
const mockBannerText = 'Example banner';

const defaultProps: CollaborationLayoutProps = {
  showBanner: true,
  Header: mockHeaderText,
  Banner: mockBannerText,
  children: mockContentText,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<CollaborationLayoutProps>): RenderType => {
  return render(
    <CollaborationLayout
      {...defaultProps}
      {...props}
    />,
  );
};

describe('CollaborationLayout - tests', () => {
  it('should render the component correctly', () => {
    renderComponent();

    expect(screen.getByText(mockContentText)).toBeInTheDocument();
    expect(screen.getByText(mockHeaderText)).toBeInTheDocument();
    expect(screen.getByText(mockBannerText)).toBeInTheDocument();
  });

  it('should render the component without the banner', () => {
    renderComponent({ showBanner: false });

    expect(screen.getByText(mockContentText)).toBeInTheDocument();
    expect(screen.getByText(mockHeaderText)).toBeInTheDocument();
    expect(screen.queryByText(mockBannerText)).not.toBeInTheDocument();
  });
});
