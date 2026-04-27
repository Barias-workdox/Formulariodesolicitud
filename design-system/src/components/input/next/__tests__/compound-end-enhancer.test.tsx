import { render, screen } from '@test/test-utils';

import { sharedPropsMock } from '../__mocks__/shared-props.mock';
import { CompoundEndEnhancer } from '../components/compound-end-enhancer';

import type { CompoundEndEnhancerProps } from '../components/compound-end-enhancer';
import type { RenderType } from '@test/test-utils';

const baseDataTestId = 'compound-end-enhancer-test-id';

const defaultProps: CompoundEndEnhancerProps = {
  ...sharedPropsMock,
  'data-testid': baseDataTestId,
  endEnhancer: <div>End Enhancer</div>,
  size: 'md',
  value: 'Test Value',
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<CompoundEndEnhancerProps>): RenderType =>
  render(
    <CompoundEndEnhancer
      {...defaultProps}
      {...props}
    />,
  );

describe('CompoundEndEnhancer', () => {
  it('should render the component correctly', () => {
    renderComponent();

    expect(screen.getByText('End Enhancer')).toBeInTheDocument();
  });

  it('should render a spinner when is loading', () => {
    renderComponent({ isLoading: true });

    expect(screen.getByTestId(`${baseDataTestId}--spinner`)).toBeInTheDocument();
  });

  it('should render a copy button when can copy', () => {
    renderComponent({ canCopy: true });

    expect(screen.getByTestId(`${baseDataTestId}--copy-to-clipboard-button`)).toBeInTheDocument();
  });

  it('should render a clear button when can clear', () => {
    renderComponent({ canClear: true });

    expect(screen.getByTestId(`${baseDataTestId}--clear-button`)).toBeInTheDocument();
  });

  it('should render a positive icon correctly', () => {
    renderComponent({ positive: true });

    expect(screen.getByTestId(`${baseDataTestId}--positive-icon`)).toBeInTheDocument();
  });

  it('should render an error icon correctly', () => {
    renderComponent({ error: true });

    expect(screen.getByTestId(`${baseDataTestId}--error-icon`)).toBeInTheDocument();
  });

  it('should not render a clear button when is read only', () => {
    renderComponent({ canClear: true, $isReadOnly: true });

    expect(screen.queryByTestId(`${baseDataTestId}--clear-button`)).not.toBeInTheDocument();
  });
});
