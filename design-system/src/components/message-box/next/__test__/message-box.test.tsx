import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { MessageBox } from '..';
import { composeTextEditorToolbarTestId } from '../utils';

import type { MessageBoxPlugin, MessageBoxProps } from '../message-box.interfaces';
import type { RenderType } from '@test/test-utils';

import '@test/__mocks__/tiptap.mock';

const pluginsMock: MessageBoxPlugin[] = [
  {
    name: 'test',
    render: () => <div>Test</div>,
  },
];

const onSubmitMock = testHelpers.fn();

const defaultProps: MessageBoxProps = {
  onSubmit: onSubmitMock,
  primaryButtonText: 'Primary Button',
};

const renderComponent = (props?: Partial<MessageBoxProps>): RenderType =>
  render(
    <MessageBox
      {...defaultProps}
      {...props}
    />,
  );

describe('MessageBox', () => {
  beforeEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render correctly', () => {
    renderComponent();

    expect(screen.getByText('Primary Button')).toBeInTheDocument();
    expect(
      screen.getByTestId('message-box-editor-content').querySelector('[contenteditable="true"]'),
    ).toBeInTheDocument();
  });

  it('should render correctly when richTextEnabled is true', () => {
    renderComponent({ richTextEnabled: true });

    expect(screen.queryByTestId(composeTextEditorToolbarTestId('__italic-button'))).toBeNull();
    expect(screen.queryByTestId(composeTextEditorToolbarTestId('__bold-button'))).toBeNull();
    expect(screen.queryByTestId(composeTextEditorToolbarTestId('__underline-button'))).toBeNull();
  });

  it('should render correctly when addons are provided', () => {
    renderComponent({ addons: <div>Addons</div> });

    expect(screen.getByText('Addons')).toBeInTheDocument();
  });

  it('should render correctly when extraActions are provided', () => {
    renderComponent({ extraActions: <div>Extra Actions</div> });

    expect(screen.getByText('Extra Actions')).toBeInTheDocument();
  });

  it('should render correctly when plugins are provided', () => {
    renderComponent({ plugins: pluginsMock });

    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('executes the onSubmit function when the primary button is clicked', async () => {
    renderComponent();

    const primaryButton = screen.getByText('Primary Button');
    // Get the contenteditable element inside the editor
    const editorElement = screen.getByTestId('message-box-editor-content');
    const editableElement = editorElement.querySelector('[contenteditable="true"]') as HTMLElement;

    // Type in the contenteditable element
    await userEvent.type(editableElement, 'test');
    await userEvent.click(primaryButton);

    expect(onSubmitMock).toHaveBeenCalled();
  });
});
