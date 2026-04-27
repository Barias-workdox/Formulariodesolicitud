import { Star } from '@carbon/icons-react';
import { userEvent } from '@testing-library/user-event';

import { fireEvent, render, screen, testHelpers } from '@test/test-utils';

import { MenuItem } from '../components/menu-item';

import type { MenuItemProps } from '../components/menu-item';
import type { RenderType } from '@test/test-utils';

const baseDataTestId = 'menu-item';

const defaultProps: MenuItemProps = {
  'data-testid': baseDataTestId,
  label: 'example label',
  counter: 5,
  startEnhancer: <Star size={16} />,
  size: 'default',
};

const renderComponent = (props?: Partial<MenuItemProps>): RenderType =>
  render(
    <MenuItem
      {...defaultProps}
      {...props}
    />,
  );

describe('MenuItem - tests', () => {
  it('renders the component correctly', () => {
    const { asFragment } = renderComponent();

    expect(screen.getByText(defaultProps.label as string)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the component correctly when `disabled` is `true`', () => {
    const { asFragment } = renderComponent({ disabled: true });

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the component correctly when `size` is `large`', () => {
    const { asFragment } = renderComponent({ size: 'large', startEnhancer: <Star size={24} /> });

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the component correctly when is focused', async () => {
    const { asFragment } = renderComponent();

    const defaultFragment = asFragment();

    const rootElement = screen.getByTestId(`${baseDataTestId}--root`);

    await fireEvent.focus(rootElement);

    const focusedFragment = asFragment();

    expect(focusedFragment).toMatchSnapshot();

    await fireEvent.blur(rootElement);

    const blurredFragment = asFragment();

    expect(blurredFragment).toEqual(defaultFragment);
    expect(blurredFragment).not.toEqual(focusedFragment);
  });

  it('executes `onClick` function when is clicked', async () => {
    const onClickMock = testHelpers.fn();

    renderComponent({ onClick: onClickMock });

    const rootElement = screen.getByTestId(`${baseDataTestId}--root`);

    await userEvent.click(rootElement);

    expect(onClickMock).toHaveBeenCalled();
  });
});
