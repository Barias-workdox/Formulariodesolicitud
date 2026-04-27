import { userEvent } from '@testing-library/user-event';

import { render, screen, waitFor } from '@test/test-utils';
import { lightTheme } from '@themes';

import { MultipleAvatars, getAvatarCounter } from '..';

import type { MultipleAvatarsProps } from '..';
import type { RenderType } from '@test/test-utils';

const baseTestId = 'avatar';

const defaultProps = {
  'data-testid': baseTestId,
  avatars: [{ name: 'Example Test1' }, { name: 'Example Test2' }, { name: 'Example Test3' }],
} as const satisfies MultipleAvatarsProps;

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<MultipleAvatarsProps>): RenderType =>
  render(
    <MultipleAvatars
      {...defaultProps}
      {...props}
    />,
  );

describe('MultipleAvatars - test', () => {
  it('should render component correctly', () => {
    renderComponent();

    expect(screen.getByTestId(`${baseTestId}-index-1--root`)).toBeInTheDocument();
    expect(screen.getByTestId(`${baseTestId}-index-1--initials`)).toBeInTheDocument();

    // First Avatar Initials
    expect(screen.getByText('ET')).toBeInTheDocument();

    // Counter
    expect(screen.getByText(getAvatarCounter(defaultProps.avatars.length - 1))).toBeInTheDocument();
  });

  it('should render component with  `brain` variant', () => {
    renderComponent({ variant: 'brain' });

    const avatarElement = screen.getByTestId(`${baseTestId}-index-1--root`);
    const counterElement = screen.getByText(getAvatarCounter(defaultProps.avatars.length - 1));

    expect(avatarElement).toHaveStyle(`backgroundColor: '${lightTheme.colors.brandSubdued}'`);
    expect(counterElement).toHaveStyle(`backgroundColor: '${lightTheme.colors.powerSubtle}'`);
  });

  it('should render tooltip correctly', async () => {
    renderComponent();

    const avatarElement = screen.getByTestId(`${baseTestId}-index-1--root`);
    const counterElement = screen.getByText(getAvatarCounter(defaultProps.avatars.length - 1));

    await userEvent.hover(avatarElement);
    await userEvent.hover(counterElement);

    await waitFor(() => {
      for (const { name } of defaultProps.avatars) {
        expect(screen.getByText(name)).toBeInTheDocument();
      }
    });
  });

  it('should not render tooltip when showTooltip is `false`', async () => {
    renderComponent({ showTooltip: false });

    const avatarElement = screen.getByTestId(`${baseTestId}-index-1--root`);
    const counterElement = screen.getByText(getAvatarCounter(defaultProps.avatars.length - 1));

    await userEvent.hover(avatarElement);
    await userEvent.hover(counterElement);

    await waitFor(() => {
      defaultProps.avatars.forEach(({ name }) => {
        expect(screen.queryByText(name)).not.toBeInTheDocument();
      });
    });
  });

  it('should not render anything if no avatars are present', () => {
    renderComponent({ avatars: [] });

    expect(screen.queryByTestId(`${baseTestId}-index-1`)).not.toBeInTheDocument();
  });
});
