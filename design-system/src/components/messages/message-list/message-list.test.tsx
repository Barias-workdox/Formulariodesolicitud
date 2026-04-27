import { vi } from 'vitest';

import { beforeEach, expect, render, screen, testHelpers } from '@test/test-utils';

import { MessageList } from './message-list';

import type { MessageListProps } from './message-list';
import type { RenderType } from '@test/test-utils';

vi.mock('react-use', () => ({
  useIntersection: (): { isIntersecting: boolean } => ({ isIntersecting: true }),
}));

const mockOnPageEnd = testHelpers.fn();
const mockSetIsAnimated = testHelpers.fn();
const mockScrollTo = testHelpers.fn();

const defaultProps = {
  children: ['Example1', 'Example2'],
  isLoading: false,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<MessageListProps>): RenderType => {
  return render(
    <MessageList
      {...defaultProps}
      {...props}
    />,
  );
};

describe('MessageList - test', () => {
  beforeEach(() => {
    Element.prototype.scrollTo = mockScrollTo;
  });

  it('should render the children correctly when is not empty', () => {
    renderComponent();

    expect(screen.getByText('Example1', { exact: false })).toBeInTheDocument();
    expect(screen.getByText('Example2', { exact: false })).toBeInTheDocument();
  });

  it('should render the children correctly when is empty', () => {
    renderComponent({ children: [] });

    expect(screen.getByText('Escribe un mensaje', { exact: false })).toBeInTheDocument();
  });

  it('should render the children correctly when is empty with custom message', () => {
    renderComponent({ children: [], emptyMessage: 'Custom message' });

    expect(screen.getByText('Custom message', { exact: false })).toBeInTheDocument();
  });

  it('should render the spinner correctly when is loading', () => {
    renderComponent({ isLoading: true, isPaginated: true, isSubmitting: false });

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('should execute onPageEnd function when end of page is intersecting', async () => {
    renderComponent({ isLoading: false, isPaginated: true, onPageEnd: mockOnPageEnd });

    expect(mockOnPageEnd).toHaveBeenCalled();
  });

  it('should execute setIsAnimated function when isPaginated prop is false AND isAnimated is false', () => {
    renderComponent({ isPaginated: false, isAnimated: false, setIsAnimated: mockSetIsAnimated });

    expect(mockSetIsAnimated).toHaveBeenCalled();
  });

  it('should execute setIsAnimated function when isPaginated prop is true AND isAnimated is true', () => {
    renderComponent({ isPaginated: true, isAnimated: true, setIsAnimated: mockSetIsAnimated });

    expect(mockSetIsAnimated).toHaveBeenCalled();
  });

  it('should not execute setIsAnimated function when isPaginated prop is true AND isAnimated is false', () => {
    renderComponent({ isPaginated: true, isAnimated: false, setIsAnimated: mockSetIsAnimated });

    expect(mockSetIsAnimated).toHaveBeenCalled();
  });
});
