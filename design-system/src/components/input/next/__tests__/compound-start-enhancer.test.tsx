import { render, screen } from '@test/test-utils';

import { sharedPropsMock } from '../__mocks__/shared-props.mock';
import { CompoundStartEnhancer } from '../components/compound-start-enhancer';

import type { CompoundStartEnhancerProps } from '../components/compound-start-enhancer';
import type { RenderType } from '@test/test-utils';

const baseDataTestId = 'compound-start-enhancer-test-id';

const defaultProps: CompoundStartEnhancerProps = {
  ...sharedPropsMock,
  'data-testid': baseDataTestId,
  leading: <div>Leading Element</div>,
  startEnhancer: <div>Start Enhancer</div>,
  prefixText: 'Prefix Text',
  size: 'md',
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<CompoundStartEnhancerProps>): RenderType =>
  render(
    <CompoundStartEnhancer
      {...defaultProps}
      {...props}
    />,
  );

describe('CompoundStartEnhancer', () => {
  it('should render the component correctly', () => {
    renderComponent();

    expect(screen.getByText('Leading Element')).toBeInTheDocument();
    expect(screen.getByText('Start Enhancer')).toBeInTheDocument();
    expect(screen.getByText('Prefix Text')).toBeInTheDocument();
  });

  it('should not render leading when is undefined', () => {
    renderComponent({ leading: undefined });

    expect(screen.queryByText('Leading Element')).not.toBeInTheDocument();
  });

  it('should not render startEnhancer when is undefined', () => {
    renderComponent({ startEnhancer: undefined });

    expect(screen.queryByText('Start Enhancer')).not.toBeInTheDocument();
  });

  it('should not render prefixText when is undefined', () => {
    renderComponent({ prefixText: undefined });

    expect(screen.queryByText('Prefix Text')).not.toBeInTheDocument();
  });
});
