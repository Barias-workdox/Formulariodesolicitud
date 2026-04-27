import { render, screen } from '@test/test-utils';

import { Skeleton } from '../skeleton';

import type { SkeletonProps } from '../skeleton';
import type { RenderType } from '@test/test-utils';

const baseDataTestId = 'skeleton-test-id';

const defaultProps: SkeletonProps = {
  'data-testid': baseDataTestId,
  animation: true,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<SkeletonProps>): RenderType =>
  render(
    <Skeleton
      {...defaultProps}
      {...props}
    />,
  );

describe('Skeleton - tests', () => {
  it('should render the component', () => {
    renderComponent();

    expect(screen.getByTestId(baseDataTestId)).toBeInTheDocument();
  });
});
