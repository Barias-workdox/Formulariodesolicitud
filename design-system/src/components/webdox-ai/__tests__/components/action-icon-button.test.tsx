import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { ActionIconButton } from '../../components/action-icon-button';

import type { ActionIconButtonProps } from '../../components/action-icon-button';
import type { RenderType } from '@test/test-utils';

const mockOnClick = testHelpers.fn();

const dataTestId = 'data-testid';
const mockTooltipContent = 'Sunt fugiat laborum enim tempor.';

const defaultProps: ActionIconButtonProps = {
  dataTestId,
  Icon: <div data-testid={`${dataTestId}--icon`} />,
  tooltipContent: mockTooltipContent,
  onClick: mockOnClick,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<ActionIconButtonProps>): RenderType => {
  return render(
    <ActionIconButton
      {...defaultProps}
      {...props}
    />,
  );
};

describe('ActionIconButton - tests', () => {
  beforeEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render the component correctly', async () => {
    renderComponent();

    expect(screen.getByTestId(`${dataTestId}--icon`)).toBeInTheDocument();

    // Hover event
    await userEvent.hover(screen.getByTestId(dataTestId));

    expect(await screen.findByText(mockTooltipContent)).toBeInTheDocument();
  });

  it('should not display the tooltip content when `showTooltip` is false', async () => {
    renderComponent({ showTooltip: false });

    expect(screen.getByTestId(`${dataTestId}--icon`)).toBeInTheDocument();

    // Hover event
    await userEvent.hover(screen.getByTestId(dataTestId));

    expect(screen.queryByText(mockTooltipContent)).not.toBeInTheDocument();
  });

  it('should execute `onClick` correctly', async () => {
    renderComponent();

    await userEvent.click(screen.getByTestId(dataTestId));

    expect(mockOnClick).toHaveBeenCalled();
  });
});
