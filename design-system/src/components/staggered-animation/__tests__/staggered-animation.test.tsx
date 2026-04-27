import { describe, expect, it, vi } from 'vitest';

import { act, render, screen } from '@test/test-utils';
import { validateStyledComponent } from '@test/validate-styled-component.util';

import { StaggeredAnimation } from '../staggered-animation';

import type { StaggeredAnimationProps } from '../staggered-animation';
import type { RenderType } from '@test/test-utils';

const defaultProps: Omit<StaggeredAnimationProps, 'children'> = {
  baseDelay: 100,
  duration: 300,
  order: 'asc',
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<StaggeredAnimationProps>): RenderType => {
  return render(
    <StaggeredAnimation
      {...defaultProps}
      {...props}
    >
      <div data-testid="item-1">Item 1</div>
      <div data-testid="item-2">Item 2</div>
      <div data-testid="item-3">Item 3</div>
    </StaggeredAnimation>,
  );
};

describe('StaggeredAnimation', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllTimers();
  });

  it('should render children with staggered animation', () => {
    renderComponent();

    const item1 = screen.getByTestId('item-1').parentElement;
    const item2 = screen.getByTestId('item-2').parentElement;
    const item3 = screen.getByTestId('item-3').parentElement;

    // Initially, all items should be hidden
    expect(validateStyledComponent(item1, { opacity: 0, transform: 'scale(0.8)' })).toBeTruthy();
    expect(validateStyledComponent(item2, { opacity: 0, transform: 'scale(0.8)' })).toBeTruthy();
    expect(validateStyledComponent(item3, { opacity: 0, transform: 'scale(0.8)' })).toBeTruthy();

    // Fast-forward time to trigger animations
    act(() => {
      vi.advanceTimersByTime(defaultProps.baseDelay);
    });

    expect(validateStyledComponent(item1, { opacity: 1, transform: 'scale(1)' })).toBeTruthy();

    act(() => {
      vi.advanceTimersByTime(defaultProps.baseDelay);
    });

    expect(validateStyledComponent(item2, { opacity: 1, transform: 'scale(1)' })).toBeTruthy();

    act(() => {
      vi.advanceTimersByTime(defaultProps.baseDelay);
    });

    expect(validateStyledComponent(item3, { opacity: 1, transform: 'scale(1)' })).toBeTruthy();
  });

  it('should render children in descending order when order is "desc"', () => {
    renderComponent({ order: 'desc' });

    const item1 = screen.getByTestId('item-1').parentElement;
    const item2 = screen.getByTestId('item-2').parentElement;
    const item3 = screen.getByTestId('item-3').parentElement;

    // Initially, all items should be hidden
    expect(validateStyledComponent(item1, { opacity: 0, transform: 'scale(0.8)' })).toBeTruthy();
    expect(validateStyledComponent(item2, { opacity: 0, transform: 'scale(0.8)' })).toBeTruthy();
    expect(validateStyledComponent(item3, { opacity: 0, transform: 'scale(0.8)' })).toBeTruthy();

    // Fast-forward time to trigger animations
    act(() => {
      vi.advanceTimersByTime(defaultProps.baseDelay);
    });
    expect(validateStyledComponent(item3, { opacity: 1, transform: 'scale(1)' })).toBeTruthy();

    act(() => {
      vi.advanceTimersByTime(defaultProps.baseDelay);
    });
    expect(validateStyledComponent(item2, { opacity: 1, transform: 'scale(1)' })).toBeTruthy();

    act(() => {
      vi.advanceTimersByTime(defaultProps.baseDelay);
    });
    expect(validateStyledComponent(item1, { opacity: 1, transform: 'scale(1)' })).toBeTruthy();
  });
});
