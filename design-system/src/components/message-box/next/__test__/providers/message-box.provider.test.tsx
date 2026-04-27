import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { testHelpers, type RenderType } from '@test/test-utils';

import { useMessageBoxContext } from '../../hooks';
import { MessageBoxProvider } from '../../providers';

import type { MessageBoxProviderProps } from '../../providers';

import '@test/__mocks__/tiptap.mock';

const ComponentTemplate = (): JSX.Element => {
  const {
    disabled,
    editorContentNode,
    isEmpty,
    isFocused,
    isHovered,
    setIsFocused,
    setIsHovered,
    textValue,
  } = useMessageBoxContext();

  return (
    <div>
      <button
        data-testid="editor-content-node"
        onClick={() => setIsFocused(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {editorContentNode}
      </button>
      <div>{`disabled: ${disabled}`}</div>
      <div>{`isEmpty: ${isEmpty}`}</div>
      <div>{`isFocused: ${isFocused}`}</div>
      <div>{`isHovered: ${isHovered}`}</div>
      <div>{`textValue: ${textValue}`}</div>
    </div>
  );
};

const renderComponent = (props?: Partial<MessageBoxProviderProps>): RenderType =>
  render(
    <MessageBoxProvider {...props}>
      <ComponentTemplate />
    </MessageBoxProvider>,
  );

describe('MessageBoxProvider', () => {
  it('should return the correct values by default', () => {
    renderComponent();

    expect(screen.getByTestId('message-box-editor-content')).toBeInTheDocument();
    expect(screen.getByText('disabled: false')).toBeInTheDocument();
    expect(screen.getByText('isEmpty: true')).toBeInTheDocument();
    expect(screen.getByText('isFocused: false')).toBeInTheDocument();
    expect(screen.getByText('isHovered: false')).toBeInTheDocument();
    expect(screen.getByText('textValue:')).toBeInTheDocument();
  });

  it('should return the correct values by default when richTextEnabled is true', () => {
    renderComponent({ richTextEnabled: true });

    expect(screen.getByTestId('message-box-editor-content')).toBeInTheDocument();
    expect(screen.getByText('disabled: false')).toBeInTheDocument();
    expect(screen.getByText('isEmpty: true')).toBeInTheDocument();
    expect(screen.getByText('isFocused: false')).toBeInTheDocument();
    expect(screen.getByText('isHovered: false')).toBeInTheDocument();
    expect(screen.getByText('textValue:')).toBeInTheDocument();
  });

  it('should return the correct textValue when it changes', async () => {
    renderComponent();

    // Get the contenteditable element inside the editor
    const editorElement = screen.getByTestId('message-box-editor-content');
    const editableElement = editorElement.querySelector('[contenteditable="true"]') as HTMLElement;

    expect(editableElement).toBeInTheDocument();

    // Type in the contenteditable element
    await userEvent.type(editableElement, 'test');

    // Wait for the textValue to update
    await waitFor(() => {
      expect(screen.getByText('textValue: test')).toBeInTheDocument();
    });
  });

  it('should not change the textValue when disabled is true', async () => {
    renderComponent({ disabled: true, defaultValue: 'default value' });

    // Get the noContenteditable element inside the editor
    const editorElement = screen.getByTestId('message-box-editor-content');
    const noEditableElement = editorElement.querySelector(
      '[contenteditable="false"]',
    ) as HTMLElement;

    expect(noEditableElement).toBeInTheDocument();

    // Click and type in the noContenteditable element
    await userEvent.click(noEditableElement);
    await userEvent.type(noEditableElement, 'test');

    expect(screen.getByText('textValue: default value')).toBeInTheDocument();
  });

  it('should call handleSubmit when the Enter key is pressed', async () => {
    const onSubmitMock = testHelpers.fn();

    renderComponent({ onSubmit: onSubmitMock });

    const editorElement = screen.getByTestId('message-box-editor-content');
    const editableElement = editorElement.querySelector('[contenteditable="true"]') as HTMLElement;

    expect(editableElement).toBeInTheDocument();

    await userEvent.type(editableElement, 'test');
    await userEvent.keyboard('{Enter}');

    expect(onSubmitMock).toHaveBeenCalled();
  });

  it('should not call handleSubmit when the Enter key is pressed and shift key is pressed', async () => {
    const onSubmitMock = testHelpers.fn();

    renderComponent({ onSubmit: onSubmitMock });

    const editorElement = screen.getByTestId('message-box-editor-content');
    const editableElement = editorElement.querySelector('[contenteditable="true"]') as HTMLElement;

    expect(editableElement).toBeInTheDocument();

    await userEvent.type(editableElement, 'test');
    await userEvent.keyboard('{Shift>}{Enter}{/Shift}');

    expect(onSubmitMock).not.toHaveBeenCalled();
  });

  it('should not call handleSubmit when the Enter key is pressed and canSendWithEnter is false', async () => {
    const onSubmitMock = testHelpers.fn();

    renderComponent({ onSubmit: onSubmitMock, canSendWithEnter: false });

    const editorElement = screen.getByTestId('message-box-editor-content');
    const editableElement = editorElement.querySelector('[contenteditable="true"]') as HTMLElement;

    expect(editableElement).toBeInTheDocument();

    await userEvent.type(editableElement, 'test');
    await userEvent.keyboard('{Enter}');

    expect(onSubmitMock).not.toHaveBeenCalled();
  });

  it('should not call handleSubmit when the Enter key is pressed and the value is empty', async () => {
    const onSubmitMock = testHelpers.fn();

    renderComponent({ onSubmit: onSubmitMock, defaultValue: '' });

    const editorElement = screen.getByTestId('message-box-editor-content');
    const editableElement = editorElement.querySelector('[contenteditable="true"]') as HTMLElement;

    expect(editableElement).toBeInTheDocument();

    await userEvent.click(editableElement);
    await userEvent.keyboard('{Enter}');

    expect(onSubmitMock).not.toHaveBeenCalledWith();
  });
});
