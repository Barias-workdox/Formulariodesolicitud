import { Star } from '@carbon/icons-react';
import { userEvent } from '@testing-library/user-event';

import { render, screen } from '@test/test-utils';

import { StatefulMessageCard } from '../index';

import type { StatefulMessageCardProps } from '../index';
import type { RenderType } from 'test/test-utils';

const baseDataTestId = 'message-card';
const onClickMock = vi.fn();

const defaultProps: StatefulMessageCardProps = {
  'data-testid': baseDataTestId,
  Icon: Star,
  title: 'example-title',
  onClick: onClickMock,
};

const renderComponent = (props?: Partial<StatefulMessageCardProps>): RenderType =>
  render(
    <>
      <StatefulMessageCard
        {...defaultProps}
        {...props}
      />
      <button>Secondary element</button>
    </>,
  );

describe('MessageCard - tests', () => {
  it('should render correctly', () => {
    renderComponent();

    expect(screen.getByTestId(`${baseDataTestId}__title-icon-default--icon`)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
  });

  it('should render correctly when has description', () => {
    const descriptionMock = 'example-description';

    renderComponent({ description: descriptionMock });

    expect(screen.queryByTestId(`${baseDataTestId}__title-icon-default--icon`)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    expect(screen.getByText(descriptionMock)).toBeInTheDocument();
  });

  it('should render correctly when is disabled', () => {
    renderComponent({ disabled: true });

    expect(screen.getByTestId(`${baseDataTestId}--button`)).toBeDisabled();
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
  });

  it('should render correctly when `onFocus` and `onBlur` events are called', async () => {
    const { asFragment } = renderComponent();

    const rootElement = screen.getByTestId(`${baseDataTestId}--button`);
    const secondaryElement = screen.getByText('Secondary element');

    await userEvent.click(rootElement);

    expect(asFragment()).toMatchSnapshot('focus status');
    expect(rootElement).toHaveAttribute('aria-selected', 'true');

    await userEvent.click(secondaryElement);

    expect(asFragment()).toMatchSnapshot('default status');

    expect(rootElement).not.toHaveAttribute('aria-selected', 'true');
  });

  it('should execute `onClick` correctly when is clicked', async () => {
    renderComponent();

    await userEvent.click(screen.getByText(defaultProps.title));

    expect(onClickMock).toHaveBeenCalled();
  });
  it('should render correctly when `iconPosition` is `left`', () => {
    renderComponent({ iconPosition: 'left' });

    expect(screen.getByTestId(`${baseDataTestId}__title-icon-left--icon`)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
  });
  it('should render correctly when the Icon is `undefined`', () => {
    renderComponent({ Icon: undefined });

    expect(
      screen.queryByTestId(`${baseDataTestId}__title-icon-default--icon`),
    ).not.toBeInTheDocument();
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
  });
});
