import { userEvent } from '@testing-library/user-event';

import { render, screen, waitFor } from '@test/test-utils';
import { lightTheme } from '@themes';

import { Avatar } from '../avatar';

import type { AvatarProps } from '../avatar';
import type { RenderType } from '@test/test-utils';

const baseTestId = 'avatar';

const defaultProps: AvatarProps = {
  'data-testid': baseTestId,
  name: 'Test Name',
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<AvatarProps>): RenderType =>
  render(
    <Avatar
      {...defaultProps}
      {...props}
    />,
  );

describe('Avatar - test', () => {
  test('should render component correctly', () => {
    renderComponent();

    expect(screen.getByTestId(`${baseTestId}--root`)).toBeInTheDocument();
    expect(screen.getByTestId(`${baseTestId}--initials`)).toBeInTheDocument();
    expect(screen.getByText('TN')).toBeInTheDocument();
  });

  test('should render component correctly when is disabled', () => {
    renderComponent({ disabled: true });

    const avatarElement = screen.getByTestId(`${baseTestId}--root`);

    expect(avatarElement).toHaveStyle(`backgroundColor: '${lightTheme.colors.neutralDepressed}'`);
  });

  test('should render tooltip correctly', async () => {
    renderComponent();

    const avatarElement = screen.getByTestId(`${baseTestId}--root`);

    await userEvent.hover(avatarElement);

    expect(await screen.findByText(defaultProps.name)).toBeInTheDocument();
  });

  test('should not render tooltip when showTooltip is `false`', async () => {
    renderComponent({ showTooltip: false });

    const avatarElement = screen.getByTestId(`${baseTestId}--root`);

    await userEvent.hover(avatarElement);

    await waitFor(() => {
      expect(screen.queryByText(defaultProps.name)).not.toBeInTheDocument();
    });
  });
});
