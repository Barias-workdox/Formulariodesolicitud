import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import { MessageBoxTextarea } from '../components';
import { INNER_HTML_EMPTY_VALUE } from '../message-box.constants';

import type { MessageBoxTextareaProps } from '../components';
import type { RenderType } from '@test/test-utils';

const baseDataTestId = 'textarea';

const onInputMock = testHelpers.fn();
const onKeyDownMock = testHelpers.fn();
const onPasteMock = testHelpers.fn();

const defaultProps: MessageBoxTextareaProps = {
  'data-testid': baseDataTestId,
  disabled: false,
  value: '',
  onInput: onInputMock,
  onKeyDown: onKeyDownMock,
  onPaste: onPasteMock,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<MessageBoxTextareaProps>): RenderType =>
  render(
    <MessageBoxTextarea
      {...defaultProps}
      {...props}
    />,
  );

describe('ComposerTextarea - test', () => {
  const { t } = renderUseTranslation();

  it('should render correctly', () => {
    renderComponent();

    expect(screen.getByTestId(baseDataTestId)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(t('general.writeMessage'))).toBeInTheDocument();
  });

  it('should render a custom placeholder correctly', () => {
    const placeholder = 'placeholder-example';

    renderComponent({ placeholder });

    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
  });

  it('should render correctly when `value` is inner html empty value', () => {
    const { asFragment } = renderComponent({ value: INNER_HTML_EMPTY_VALUE });

    expect(asFragment()).toMatchSnapshot('when value is inner html empty value');
  });

  it('should execute `onKeyDown` and `onInput` correctly', async () => {
    renderComponent();

    const textarea = screen.getByPlaceholderText(t('general.writeMessage'));

    await userEvent.type(textarea, 'A');

    expect(onKeyDownMock).toHaveBeenCalled();
    expect(onInputMock).toHaveBeenCalled();
  });

  it('should execute `onPaste` correctly', async () => {
    renderComponent();

    const textarea = screen.getByPlaceholderText(t('general.writeMessage'));

    textarea.focus();
    await userEvent.paste('example');

    expect(onPasteMock).toHaveBeenCalled();
  });

  it('should not be editable when `isDisabled` is `true`', async () => {
    renderComponent({
      disabled: true,
    });

    const textarea = screen.getByPlaceholderText(t('general.writeMessage'));

    expect(textarea).toHaveAttribute('contentEditable', 'false');
  });
});
