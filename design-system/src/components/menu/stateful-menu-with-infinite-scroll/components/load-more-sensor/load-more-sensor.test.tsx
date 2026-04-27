import {
  mockAllIsIntersecting,
  resetIntersectionMocking,
} from 'react-intersection-observer/test-utils';
import { vi } from 'vitest';

import { render, screen } from '@test/test-utils';

import { LoadMoreSensor } from './load-more-sensor';

import type { InfiniteScrollProps } from '@components/menu/stateful-menu-with-infinite-scroll/stateful-menu-with-infinite-scroll.interfaces';
import type { RenderType } from '@test/test-utils';

// MOCKS
let consoleErrorSpy;
const mockOnLoadMore = vi.fn();

/* Setting the default props for the component. */
const defaultProps: InfiniteScrollProps = {
  isLoadingMore: false,
  onLoadMore: mockOnLoadMore,
};

/**
 * renderComponent is a function that takes in props as an optional parameter and returns a component with
 * defaultProps and the received props
 */
const renderComponent = (props?: Partial<InfiniteScrollProps>): RenderType =>
  render(
    <LoadMoreSensor
      {...defaultProps}
      {...props}
    />,
  );

describe('Load more sensor component tests', () => {
  beforeEach(() => {
    consoleErrorSpy = vi.spyOn(console, 'error');
  });

  afterEach(() => {
    vi.clearAllMocks();
    resetIntersectionMocking();
    consoleErrorSpy.mockRestore();
  });

  it('should not show the spinner when isLoadingMore === false', () => {
    renderComponent();
    expect(screen.queryByTestId('load-more-sensor--spinner')).not.toBeInTheDocument();
  });

  it('should show the spinner when isLoadingMore === true', () => {
    renderComponent({
      isLoadingMore: true,
    });
    expect(screen.getByTestId('load-more-sensor--spinner')).toBeInTheDocument();
  });

  it('should call console.error if onLoadMore method is not defined', () => {
    expect(consoleErrorSpy).toHaveBeenCalledTimes(0);

    renderComponent({
      onLoadMore: null,
    });
    mockAllIsIntersecting(true);

    expect(consoleErrorSpy).toHaveBeenCalled();
  });

  it('should call the onLoadMore method', () => {
    expect(mockOnLoadMore).toHaveBeenCalledTimes(0);

    renderComponent();
    mockAllIsIntersecting(true);

    expect(mockOnLoadMore).toHaveBeenCalled();
  });
});
