import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { TableAction } from './table-action';

import type { TableActionProps } from './table-action';
import type { RenderType } from '@test/test-utils';

const mockOnClick = testHelpers.fn();
const tooltipText = 'Custom tooltip text';

const defaultProps: TableActionProps = {
  action: 'edit',
  onClick: mockOnClick,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<TableActionProps>): RenderType =>
  render(
    <TableAction
      {...defaultProps}
      {...props}
    />,
  );

describe('TableAction - tests', () => {
  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render the component', () => {
    renderComponent();

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button.querySelector('svg')).toBeInTheDocument();
  });

  it('should display the default tooltip', async () => {
    renderComponent();

    await userEvent.hover(screen.getByRole('button'));

    expect(await screen.findByText('Editar')).toBeInTheDocument();
  });

  it('should display the custom tooltip', async () => {
    renderComponent({ tooltipText });

    await userEvent.hover(screen.getByRole('button'));

    expect(await screen.findByText(tooltipText)).toBeInTheDocument();
  });

  it('should not display tooltip with showTooltip = `false`', async () => {
    renderComponent({ tooltipText, showTooltip: false });

    await userEvent.hover(screen.getByRole('button'));

    expect(screen.queryByText(tooltipText)).not.toBeInTheDocument();
  });

  it('should not render tooltip if disabled', async () => {
    renderComponent({ tooltipText, disabled: false });

    await userEvent.hover(screen.getByRole('button'));

    expect(await screen.findByText(tooltipText)).toBeInTheDocument();
  });
});
