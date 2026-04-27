import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { HeaderTab } from '../header-tab';

import type { HeaderTabProps } from '../header-tab';
import type { RenderType } from '@test/test-utils';

const dataTestId = 'test';
const mockTitle = 'Heading text';

const mockOnClose = testHelpers.fn();

const defaultProps: HeaderTabProps = {
  'data-testid': dataTestId,
  title: mockTitle,
  onClose: mockOnClose,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<HeaderTabProps>): RenderType => {
  return render(
    <HeaderTab
      {...defaultProps}
      {...props}
    />,
  );
};

describe('HeaderTab - tests', () => {
  it('should render the component successfully', () => {
    renderComponent();

    expect(screen.getByText(mockTitle)).toBeInTheDocument();
    expect(screen.getByTestId(`${dataTestId}--close`)).toBeInTheDocument();
  });

  it('should call the onClose method successfully', async () => {
    renderComponent();

    await userEvent.click(screen.getByTestId(`${dataTestId}--close`));

    expect(mockOnClose).toHaveBeenCalled();
  });
});
