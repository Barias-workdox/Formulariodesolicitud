import { useRef } from 'react';
import type { ReactElement } from 'react';

import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { InlineComposerTextareaContainer } from '../containers/inline-composer-textarea-container';

import type { InlineComposerTextareaContainerProps } from '../containers/inline-composer-textarea-container';
import type { RenderType } from '@test/test-utils';

const baseDataTestId = 'composer-textarea';

const evaluateMentionMock = testHelpers.fn();
const onKeyDownMock = testHelpers.fn();
const onPasteMock = testHelpers.fn();
const onCreateMock = testHelpers.fn();

const defaultProps: InlineComposerTextareaContainerProps = {
  'data-testid': baseDataTestId,
  messageRef: null,
  evaluateMention: evaluateMentionMock,
  localValue: 'example',
  onCreate: onCreateMock,
  onKeyDown: onKeyDownMock,
  onPaste: onPasteMock,
  placeholder: 'Consectetur occaecat est.',
  startEnhancer: <div data-testid={`${baseDataTestId}__start-enhancer`} />,
};

/** */
const ComponentExample = (props): ReactElement => {
  const messageRef = useRef<HTMLDivElement>();

  return (
    <InlineComposerTextareaContainer
      {...defaultProps}
      {...props}
      messageRef={messageRef}
    />
  );
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<InlineComposerTextareaContainerProps>): RenderType =>
  render(
    <ComponentExample
      {...defaultProps}
      {...props}
    />,
  );

describe('InlineComposerTextareaContainer - test', () => {
  it('should render correctly', () => {
    renderComponent();

    expect(
      screen.getByTestId(`${baseDataTestId}__inline-composer-container__button`),
    ).toBeInTheDocument();
    expect(
      screen.getByTestId(`${baseDataTestId}__inline-composer-textarea-message-textarea`),
    ).toBeInTheDocument();
    expect(screen.getByTestId(`${baseDataTestId}__start-enhancer`)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(defaultProps.placeholder)).toBeInTheDocument();
  });

  it('should execute `onKeyDown` and `evaluateMention` correctly', async () => {
    renderComponent();

    const textarea = screen.getByTestId(
      `${baseDataTestId}__inline-composer-textarea-message-textarea`,
    );

    await userEvent.type(textarea, 'A');

    expect(onKeyDownMock).toHaveBeenCalled();
    expect(evaluateMentionMock).toHaveBeenCalled();
  });

  it('should execute `onPaste` correctly', async () => {
    renderComponent();

    const textarea = screen.getByTestId(
      `${baseDataTestId}__inline-composer-textarea-message-textarea`,
    );

    textarea.focus();
    await userEvent.paste('example');

    expect(onPasteMock).toHaveBeenCalled();
  });
});
