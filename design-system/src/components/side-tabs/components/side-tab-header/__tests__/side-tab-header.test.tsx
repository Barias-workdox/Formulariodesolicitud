import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { SideTabHeader } from '../side-tab-header';

import type { SideTabHeaderProps } from '../side-tab-header';
import type { RenderType } from '@test/test-utils';

const dataTestId = 'test';
const mockTitle = 'Heading text';

const mockOnClose = testHelpers.fn();

const defaultProps: Partial<SideTabHeaderProps> = {
  'data-testid': dataTestId,
  onClose: mockOnClose,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<SideTabHeaderProps>): RenderType => {
  return render(
    <SideTabHeader
      {...defaultProps}
      {...props}
    >
      {mockTitle}
    </SideTabHeader>,
  );
};

describe('SideTabHeader - tests', () => {
  it('should render the component successfully', () => {
    renderComponent();

    expect(screen.getByText(mockTitle)).toBeInTheDocument();
    expect(screen.getByTestId(`${dataTestId}--close`)).toBeInTheDocument();
  });

  it('should render the component successfully when onClose is undefined', () => {
    renderComponent({ onClose: undefined });

    expect(screen.getByText(mockTitle)).toBeInTheDocument();
    expect(screen.queryByTestId(`${dataTestId}--close`)).not.toBeInTheDocument();
  });

  it('should call the onClose method successfully', async () => {
    renderComponent();

    await userEvent.click(screen.getByTestId(`${dataTestId}--close`));

    expect(mockOnClose).toHaveBeenCalled();
  });
});
