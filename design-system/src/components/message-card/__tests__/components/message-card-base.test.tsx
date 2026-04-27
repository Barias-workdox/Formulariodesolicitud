import { Star } from '@carbon/icons-react';
import { userEvent } from '@testing-library/user-event';

import { render, screen } from '@test/test-utils';

import { MessageCardBase } from '../../components/message-card-base';

import type { MessageCardBaseProps } from '../../components/message-card-base';
import type { RenderType } from 'test/test-utils';

const baseDataTestId = 'message-card';
const onClickMock = vi.fn();

const defaultProps: MessageCardBaseProps = {
  'data-testid': baseDataTestId,
  Icon: Star,
  title: 'example-title',
  isActive: false,
  onClick: onClickMock,
};

const renderComponent = (props?: Partial<MessageCardBaseProps>): RenderType =>
  render(
    <>
      <MessageCardBase
        {...defaultProps}
        {...props}
      />
      <button>Secondary element</button>
    </>,
  );

describe('MessageCardBase - tests', () => {
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
    const onFocusMock = vi.fn();
    const onBlurMock = vi.fn();

    renderComponent({
      onFocus: onFocusMock,
      onBlur: onBlurMock,
    });

    const rootElement = screen.getByTestId(`${baseDataTestId}--button`);
    const secondaryElement = screen.getByText('Secondary element');

    await userEvent.click(rootElement);

    expect(onFocusMock).toHaveBeenCalled();
    expect(onBlurMock).not.toHaveBeenCalled();
    expect(screen.queryByTestId(`${baseDataTestId}--button--active`)).not.toBeInTheDocument();

    await userEvent.click(secondaryElement);

    expect(onFocusMock).toHaveBeenCalled();
    expect(onBlurMock).toHaveBeenCalled();

    expect(onBlurMock).toHaveBeenCalled();
  });

  it('should execute `onClick` and `onFocus` correctly when is clicked', async () => {
    const onFocusMock = vi.fn();

    renderComponent({
      onFocus: onFocusMock,
    });

    await userEvent.click(screen.getByText(defaultProps.title));

    expect(onClickMock).toHaveBeenCalled();
    expect(onFocusMock).toHaveBeenCalled();
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

  it('should render the active state correctly', () => {
    renderComponent({ isActive: true });

    expect(screen.getByTestId(`${baseDataTestId}--button`)).toBeInTheDocument();

    expect(screen.getByTestId(`${baseDataTestId}--button`)).toHaveAttribute(
      'aria-selected',
      'true',
    );
  });
  it('should not be activated on click when `isActive` is false', async () => {
    renderComponent({ isActive: false });

    expect(screen.getByTestId(`${baseDataTestId}--button`)).toHaveAttribute(
      'aria-selected',
      'false',
    );

    await userEvent.click(screen.getByText(defaultProps.title));

    expect(onClickMock).toHaveBeenCalled();
  });
  it('should not be disabled on click when `isActive` is true', async () => {
    renderComponent({ isActive: true });

    expect(screen.queryByTestId(`${baseDataTestId}--button`)).toBeInTheDocument();

    await userEvent.click(screen.getByText(defaultProps.title));

    expect(onClickMock).toHaveBeenCalled();
    expect(screen.queryByTestId(`${baseDataTestId}--button`)).toBeInTheDocument();
  });
});
