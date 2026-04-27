import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { BackButton } from './back-button';

import type { BackButtonProps } from './back-button';
import type { RenderType } from '@test/test-utils';

const mockOnClick = testHelpers.fn();

const defaultProps: BackButtonProps = {
  onClick: mockOnClick,
  'data-testid': 'data-testid',
  disabled: false,
  isLoading: false,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<BackButtonProps>): RenderType =>
  render(
    <BackButton
      {...defaultProps}
      {...props}
    />,
  );

describe('back-button - tests', () => {
  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render the component', () => {
    renderComponent();

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should execute correctly when the component is clicked', async () => {
    renderComponent({ onClick: mockOnClick });

    expect(mockOnClick).not.toHaveBeenCalled();
    await userEvent.click(screen.getByRole('button'));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
