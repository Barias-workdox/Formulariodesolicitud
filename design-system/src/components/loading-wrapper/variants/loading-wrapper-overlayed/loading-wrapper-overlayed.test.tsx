import { render, screen } from '@test/test-utils';

import { LoadingWrapperOverlayed } from './loading-wrapper-overlayed';

import type { LoadingWrapperOverlayedProps } from './loading-wrapper-overlayed';

const spinnerTestId = 'loading-spinner';

const renderComponent = ({ isLoading = true, ...rest }: Partial<LoadingWrapperOverlayedProps>) =>
  render(
    <LoadingWrapperOverlayed
      isLoading={isLoading}
      {...rest}
    />,
  );

describe('LoadingWrapperOverlayed', () => {
  it('renders children when not loading', () => {
    const childText = 'Not loading content';

    renderComponent({ isLoading: false, children: <div>{childText}</div> });

    expect(screen.getByText(childText)).toBeVisible();
    expect(screen.queryByTestId(spinnerTestId)).not.toBeInTheDocument();
  });

  it('renders spinner when loading', () => {
    renderComponent({ isLoading: true, children: <div>Some content</div> });

    expect(screen.getByTestId(spinnerTestId)).toBeVisible();
  });

  test('renders spinner with specified size and color when loading', () => {
    renderComponent({
      isLoading: true,
      spinnerSize: 'lg',
      spinnerColor: 'blue',
      children: <div>Content</div>,
    });

    expect(screen.getByTestId(spinnerTestId)).toBeInTheDocument();
  });

  it('should render the title correctly', () => {
    renderComponent({
      isLoading: true,
      children: <div>Some content</div>,
      title: 'Loading...',
    });
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should render the title correctly with custom title', () => {
    renderComponent({
      isLoading: true,
      children: <div>Some content</div>,
      title: <button>Loading...</button>,
    });
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
