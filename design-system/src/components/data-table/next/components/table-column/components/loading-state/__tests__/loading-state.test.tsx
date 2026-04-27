import { DEFAULT_SKELETON_ROW_COUNT } from '@components/data-table/next/data-table.constants';
import { render, screen } from '@test/test-utils';

import { LoadingState } from '../loading-state';

import type { LoadingStateProps } from '../loading-state';

const props: LoadingStateProps = {
  columnIndex: 0,
  isHeaderHovered: false,
  isDragging: false,
  rowHeight: 'auto',
};

describe('LoadingState', () => {
  it('renders loading cell skeletons', () => {
    render(<LoadingState {...props} />);

    Array(DEFAULT_SKELETON_ROW_COUNT)
      .fill(0)
      .forEach((_, cellSkeletonIndex) => {
        expect(
          screen.getByTestId(`${props.columnIndex}-cell-skeleton-${cellSkeletonIndex}`),
        ).toBeInTheDocument();
      });
  });
});
