import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { CollapsibleBoxHeader } from '../collapsible-box-header';

import type { CollapsibleBoxHeaderProps } from '../collapsible-box-header';
import type { RenderType } from '@test/test-utils';

const title = 'box title';
const collapsedTitle = 'Collapsed title';
const icon = '👻';
const defaultProps: CollapsibleBoxHeaderProps = {
  title,
  Icon: icon,
  $expanded: true,
  onClick: () => {
    return;
  },
};

const renderComponent = (props?: Partial<CollapsibleBoxHeaderProps>): RenderType =>
  render(
    <CollapsibleBoxHeader
      {...defaultProps}
      {...props}
    />,
  );

describe('collapsible-box-header tests', () => {
  it('should render the component icon and title', () => {
    renderComponent();

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(icon)).toBeInTheDocument();
  });

  it('should call `onClick` when the toggle button is clicked', async () => {
    const handleTogglePanel = testHelpers.fn();

    renderComponent({
      ...defaultProps,
      onClick: handleTogglePanel,
    });

    const toggleButton = screen.getByLabelText(`${title} toggle button`);

    await userEvent.click(toggleButton);

    expect(handleTogglePanel).toHaveBeenCalledTimes(1);
  });

  it('should render a collapse title', () => {
    renderComponent({ collapsedTitle, $expanded: false });

    expect(screen.queryByText(title)).not.toBeInTheDocument();
    expect(screen.getByText(collapsedTitle)).toBeInTheDocument();
  });
});
