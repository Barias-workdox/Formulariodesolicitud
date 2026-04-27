import { createRef } from 'react';

import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import { DefaultComposerTextareaContainer } from '../containers/default-composer-textarea-container';

import type { DefaultComposerTextareaContainerProps } from '../containers/default-composer-textarea-container';
import type { RenderType } from '@test/test-utils';

const baseDataTestId = 'composer-textarea';

const evaluateMentionMock = testHelpers.fn();
const onKeyDownMock = testHelpers.fn();
const onPasteMock = testHelpers.fn();

const defaultProps: DefaultComposerTextareaContainerProps = {
  'data-testid': baseDataTestId,
  messageRef: createRef<HTMLDivElement>(),
  evaluateMention: evaluateMentionMock,
  localValue: 'example',
  onKeyDown: onKeyDownMock,
  onPaste: onPasteMock,
  placeholder: 'Consectetur occaecat est.',
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<DefaultComposerTextareaContainerProps>): RenderType =>
  render(
    <DefaultComposerTextareaContainer
      {...defaultProps}
      {...props}
    />,
  );

describe('DefaultComposerTextareaContainer - test', () => {
  const { t } = renderUseTranslation();

  it('should render correctly', () => {
    renderComponent();

    expect(screen.getByTestId(`${baseDataTestId}__textarea`)).toBeInTheDocument();
    expect(screen.getByTestId(`${baseDataTestId}__send-button`)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(defaultProps.placeholder)).toBeInTheDocument();
    expect(screen.getByText(t('general.send'))).toBeInTheDocument();
  });

  it('should execute `onKeyDown` and `evaluateMention` correctly', async () => {
    renderComponent();

    const textarea = screen.getByTestId(`${baseDataTestId}__textarea`);

    await userEvent.type(textarea, 'A');

    expect(onKeyDownMock).toHaveBeenCalled();
    expect(evaluateMentionMock).toHaveBeenCalled();
  });

  it('should execute `onPaste` correctly', async () => {
    renderComponent();

    const textarea = screen.getByTestId(`${baseDataTestId}__textarea`);

    textarea.focus();
    await userEvent.paste('example');

    expect(onPasteMock).toHaveBeenCalled();
  });

  it('should render correctly when `isEditing` is true', () => {
    renderComponent({ isEditing: true });

    expect(screen.getByTestId(`${baseDataTestId}__textarea`)).toBeInTheDocument();
    expect(screen.getByTestId(`${baseDataTestId}__cancel-button`)).toBeInTheDocument();
    expect(screen.getByTestId(`${baseDataTestId}__save-button`)).toBeInTheDocument();
    expect(screen.getByText(t('general.cancel'))).toBeInTheDocument();
    expect(screen.getByText(t('general.save'))).toBeInTheDocument();
    expect(screen.getByPlaceholderText(defaultProps.placeholder)).toBeInTheDocument();
  });
});
