import { render, screen } from '@test/test-utils';

import { LoadingWrapper } from './loading-wrapper';

import type { LoadingWrapperProps } from './loading-wrapper';
import type { RenderType } from '@test/test-utils';

const defaultProps: LoadingWrapperProps = {
  isLoading: true,
  children: <>Test</>,
  spinnerSize: 'sm',
};

/** Utility to render component quickly with default props */
const renderComponent = (props?: Partial<LoadingWrapperProps>): RenderType => {
  return render(
    <LoadingWrapper
      {...defaultProps}
      {...props}
    />,
  );
};

describe('LoadingWrapper - snapshot matching', () => {
  it('should renders correctly', () => {
    renderComponent();

    expect(screen.getByLabelText('Spinner')).toBeInTheDocument();
    expect(screen.getByTestId('loading-spinner--container')).toBeInTheDocument();
  });

  it('should renders correctly the children', () => {
    renderComponent({ isLoading: false });

    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  // Spinner sizes
  it('should renders correctly the spinner md', () => {
    renderComponent({ spinnerSize: 'md' });

    expect(screen.getByLabelText('Spinner').firstChild).toHaveAttribute('height', '32px');
  });

  it('should renders correctly the spinner lg', () => {
    renderComponent({ spinnerSize: 'lg' });

    expect(screen.getByLabelText('Spinner').firstChild).toHaveAttribute('height', '64px');
  });

  it('should render the title correctly', () => {
    renderComponent({ title: 'Loading...' });
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should render the title correctly with custom title', () => {
    renderComponent({ title: <button>Loading...</button> });
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
