import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { FooterMessageButton } from '../../components/footer-message-button/footer-message-button';

import type { FooterMessageButtonProps } from '../../components/footer-message-button/footer-message-button.interfaces';
import type { RenderType } from '@test/test-utils';

const mockOnClick = testHelpers.fn();

const dataTestId = 'data-testid';
const mockTooltipContent = 'Sunt fugiat laborum enim tempor.';

const defaultProps: FooterMessageButtonProps = {
  'data-testid': dataTestId,
  disabled: false,
  isLoading: false,
  tooltipText: mockTooltipContent,
  zIndex: 0,
  children: 'test',
  onClick: mockOnClick,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<FooterMessageButtonProps>): RenderType => {
  return render(
    <FooterMessageButton
      {...defaultProps}
      {...props}
    />,
  );
};

const getFooterButton = () => screen.getByRole('button');

describe('FooterButtonMenu - tests', () => {
  beforeEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render the component correctly', async () => {
    renderComponent();

    const button = getFooterButton();

    expect(button).toBeInTheDocument();

    // Hover event
    await userEvent.hover(button);

    expect(await screen.findByText(mockTooltipContent)).toBeInTheDocument();
  });

  it('should not display the tooltip content when `showTooltip` is false', async () => {
    renderComponent({ tooltipText: '' });

    const button = getFooterButton();

    expect(button).toBeInTheDocument();

    // Hover event
    await userEvent.hover(button);

    await expect(screen.findByText(mockTooltipContent, {}, { timeout: 200 })).rejects.toThrow();
  });

  it('should execute `onClick` correctly', async () => {
    renderComponent();

    await userEvent.click(getFooterButton());

    expect(mockOnClick).toHaveBeenCalled();
  });
});
