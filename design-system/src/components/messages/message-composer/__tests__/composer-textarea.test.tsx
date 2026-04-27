import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import { ComposerTextarea } from '../common/composer-textarea';

import type { ComposerTextareaProps } from '../common/composer-textarea';
import type { RenderType } from '@test/test-utils';

const baseDataTestId = 'composer-textarea';

const evaluateMentionMock = testHelpers.fn();
const onKeyDownMock = testHelpers.fn();
const onPasteMock = testHelpers.fn();

const defaultProps: ComposerTextareaProps = {
  'data-testid': baseDataTestId,
  evaluateMention: evaluateMentionMock,
  messageRef: { current: null },
  onKeyDown: onKeyDownMock,
  onPaste: onPasteMock,
  placeholder: undefined,
  isDisabled: false,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<ComposerTextareaProps>): RenderType =>
  render(
    <ComposerTextarea
      {...defaultProps}
      {...props}
    />,
  );

describe('ComposerTextarea - test', () => {
  const { t } = renderUseTranslation();

  it('should render correctly', () => {
    renderComponent();

    expect(screen.getByTestId(`${baseDataTestId}-message-textarea`)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(t('general.writeMessage'))).toBeInTheDocument();
  });

  it('should render correctly when it has a custom `padding`', () => {
    renderComponent({ $padding: '25px' });

    expect(screen.getByTestId(`${baseDataTestId}-message-textarea`)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(t('general.writeMessage'))).toBeInTheDocument();
  });

  it('should render the placeholder correctly', () => {
    const placeholder = 'placeholder-example';

    renderComponent({ placeholder });

    expect(screen.getByTestId(`${baseDataTestId}-message-textarea`)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
  });

  it('should execute `onKeyDown` and `evaluateMention` correctly', async () => {
    renderComponent();

    const textarea = screen.getByTestId(`${baseDataTestId}-message-textarea`);

    await userEvent.type(textarea, 'A');

    expect(onKeyDownMock).toHaveBeenCalled();
    expect(evaluateMentionMock).toHaveBeenCalled();
  });

  it('should execute `onPaste` correctly', async () => {
    renderComponent();

    const textarea = screen.getByTestId(`${baseDataTestId}-message-textarea`);

    textarea.focus();
    await userEvent.paste('example');

    expect(onPasteMock).toHaveBeenCalled();
  });

  it('should not be editable when `isDisabled` is `true`', async () => {
    renderComponent({
      isDisabled: true,
    });

    const textarea = screen.getByTestId(`${baseDataTestId}-message-textarea`);

    expect(textarea).toHaveAttribute('contentEditable', 'false');
  });
});
