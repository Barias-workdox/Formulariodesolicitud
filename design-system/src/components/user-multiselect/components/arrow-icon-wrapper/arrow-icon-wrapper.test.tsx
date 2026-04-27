import { userEvent } from '@testing-library/user-event';

import { render, testHelpers } from '@test/test-utils';

import { ArrowIconWrapper } from './arrow-icon-wrapper';

import type { RenderType } from '@test/test-utils';

const mockOnClick = testHelpers.fn();

const defaultProps = {
  toggleIsOpen: mockOnClick,
  isOpen: true,
};

/** Utility to render component quickly with default props */
const renderComponent = (props?: { isOpen?: boolean; toggleIsOpen?(): void }): RenderType => {
  return render(
    <ArrowIconWrapper
      {...defaultProps}
      {...props}
    />,
  );
};

describe('ArrowIcon - tests', () => {
  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render the component', () => {
    const { getByRole } = renderComponent();

    expect(getByRole('button')).toBeInTheDocument();
  });

  it('should execute correctly when the component is clicked', async () => {
    const { getByRole } = renderComponent();

    expect(mockOnClick.mock.calls.length).toBe(0);
    await userEvent.click(getByRole('button'));
    expect(mockOnClick.mock.calls.length).toBe(1);
  });
});
